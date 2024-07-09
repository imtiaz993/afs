import { NextResponse } from "next/server";
import { send_email } from "emails/config";
import { CompanyEmail } from "emails/job-query/to-company";
import { CustomerEmail } from "emails/job-query/to-customer";

export async function POST(request) {
  let data = await request.json();
  let { name, headquarter, email, resume, message } = await data;

  try {
    send_email(
      "careers@afs.com.bh",
      "New prospect candidate - CV",
      CompanyEmail(name, email, headquarter, resume, message)
    ).catch(console.error);
    send_email(
      email,
      "AFS Careers - We have received your infromation",
      CustomerEmail(name, email, headquarter, resume, message)
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
