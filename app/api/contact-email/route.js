import { NextResponse } from "next/server";
import { CompanyEmail } from "emails/contact-email/to-company";
import { CustomerEmail } from "emails/contact-email/to-customer";
import { send_email } from "emails/config";

export async function POST(request) {
  let data = await request.json();
  let {
    firstname,
    lastname,
    prefix,
    phone,
    email,
    businessName,
    location,
    solution,
    details,
  } = await data;

  let emailLoacations = {
    "Bahrain": "info@unitedmonks.com",
    "Egypt": "info@unitedmonks.com",
    "Oman": "info@unitedmonks.com",
    "United Arab Emirates": "info@unitedmonks.com",
    "Other": "info@unitedmonks.com",
  };

  try {
    location.forEach((loc) => {
      send_email(
        emailLoacations[loc.label],
        `New commercial inquiry - ${loc.label}`,
        CompanyEmail(
          firstname,
          lastname,
          prefix,
          phone,
          email,
          businessName,
          location,
          solution,
          details,
          emailLoacations[loc.label]
        )
      ).catch(console.error);
    });
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
        location,
        solution,
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
