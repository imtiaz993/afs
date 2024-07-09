import { NextResponse } from "next/server";
import { send_email } from "emails/config";
import { CompanyEmail } from "emails/job-apply/to-company";
import { CustomerEmail } from "emails/job-apply/to-customer";

export async function POST(request) {
  let data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const resume = data.get("resume");
  const coverLetter = data.get("coverLetter");
  const message = data.get("message");
  const jobTitle = data.get("jobTitle");

  console.log(resume);

  try {
    send_email(
      "b18101044.imtiazhussain@gmail.com",
      `New application for - ${jobTitle}`,
      CompanyEmail(jobTitle, name, email, resume, coverLetter, message)
    ).catch(console.error);
    send_email(
      email,
      "AFS Careers - We have received your infromation",
      CustomerEmail(name, email, resume, coverLetter, message)
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
    });
  }
}
