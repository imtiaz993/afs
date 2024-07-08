const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  
  
export async function send_email(to='',subject='',html) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
    from: '"No Reply" <noreply@afs.com.bh>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: await html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}