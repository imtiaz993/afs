import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req, res) {
  const data = await req.json();
  const email = data.email;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    if (response.status === 200) {
      return NextResponse.json(
        {
          status: "success",
          message: "Email subscribed successfully",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "Error adding subscriber",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "error",
      message: "Internal Server Error",
      error: error,
    },{
      status: 500
    });
  }
}
