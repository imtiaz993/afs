import { NextResponse } from "next/server";
import { send_email } from "emails/config";
import { CompanyEmail } from "emails/job-apply/to-company";
import { CustomerEmail } from "emails/job-apply/to-customer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import slugify from "slugify";
import {fileTypeFromBuffer} from 'file-type';

const client = new S3Client({ 
  region: "ap-south-1",
  credentials:{
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

const uploadToS3 = async (name,type,file)=>{
  let url= process.env.AWS_BUCKET_URL;

  const buffer = Buffer.from(await file.arrayBuffer());
  const {ext,mime} = await fileTypeFromBuffer(buffer);
  const key = slugify(name + '-' + type) + '.' + ext;

  const params = {
    ACL:  "public-read" || "public-read-write",
    Bucket: 'asftest-bucket',
    Key: key,
    Body: buffer,
    ContentType: mime
  };

  const command = new PutObjectCommand(params);
  await client.send(command);
  return url + key;
}

export async function POST(request) {
  let data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const resume = data.get("resume");
  const coverLetter = data.get("coverLetter");
  const message = data.get("message");
  const jobTitle = data.get("jobTitle");

  const resumeFile = await uploadToS3(name,'resume',resume)
  const coverFile = await uploadToS3(name,'cover letter',coverLetter);
  
  try {
    send_email(
      "info@unitedmonks.com",
      `New application for - ${jobTitle}`,
      CompanyEmail(jobTitle, name, email, resumeFile, coverFile, message)
    ).catch(console.error);
    send_email(
      email,
      "AFS Careers - We have received your infromation",
      CustomerEmail(name, email, resumeFile, coverFile, message)
    ).catch(console.error);
    return NextResponse.json({
      status: "success",
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Something went wrong. Please try again later.",
      error: error,
    });
  }
}
