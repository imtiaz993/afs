import { NextResponse } from "next/server";
import { send_email } from "emails/config";
import { CompanyEmail } from "emails/job-apply/to-company";
import { CustomerEmail } from "emails/job-apply/to-customer";

export async function POST(request) {
  let data = await request.json();
  let { name, email, resume, coverLetter, message, jobTitle } = await data;

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
