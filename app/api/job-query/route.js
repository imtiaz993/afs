import { NextResponse } from "next/server";
import { send_email } from "emails/config";
import { CompanyEmail } from "emails/job-query/to-company";
import { CustomerEmail } from "emails/job-query/to-customer";

export async function POST(request) {
  let data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const headquarter = data.get("headquarter");
  const resume = data.get("resume");
  const message = data.get("message");

  try {
    send_email(
      "b18101044.imtiazhussain@gmail.com",
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
