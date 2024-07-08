import { NextResponse } from "next/server";
import { CompanyEmail } from "emails/complaint/to-company";
import { CustomerEmail } from "emails/complaint/to-customer";
import { send_email } from "emails/config";

export async function POST(request) {
  let data = await request.json();
  let { firstname, lastname, phone, email, businessName, category, details } =
    await data;

  let complaintCategory = {
    "Merchant support": "merchantcare@afs.com.bh",
    BPay: "bpaysupport@afs.com.bh",
    "Al Rateb support - WPS": "payroll.cards@afs.com.bh",
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
        phone,
        email,
        businessName,
        category,
        details
      )
    ).catch(console.error);
    send_email(
      email,
      "AFS (Arab Financial Services) - We have received your request",
      CustomerEmail(
        firstname,
        lastname,
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
