import { NextResponse } from "next/server";
import { CompanyEmail } from "emails/complaint/to-company";
import { CustomerEmail } from "emails/complaint/to-customer";
import { send_email } from "emails/config";

export async function POST(request) {
  let data = await request.json();
  let { firstname, lastname, prefix, phone, email, businessName, category, details } =
    await data;

  let complaintCategory = {
    "Merchant support": "info@unitedmonks.com",
    "BPay support": "info@unitedmonks.com",
    "Al Rateb support - WPS": "info@unitedmonks.com",
  };

  try {
    send_email(
      complaintCategory[category],
      `New - ${
        category === "Al Rateb support - WPS" ? "Payroll" : category
      } complaint`,
      CompanyEmail(
        firstname,
        lastname,
        prefix,
        phone,
        email,
        businessName,
        category,
        details,
        complaintCategory[category],
      )
    ).catch(console.error);
    send_email(
      email,
      "AFS (Arab Financial Services) - We have received your request",
      CustomerEmail(
        firstname,
        lastname,
        prefix,
        phone,
        email,
        businessName,
        category,
        details
      )
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
