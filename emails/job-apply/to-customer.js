export const CustomerEmail = async function (
  name = "",
  email = "",
  resume = "",
  coverLetter = "",
  message = ""
) {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AFS</title>
    <style type="text/css">
      body {
        margin: 0;
        background-color: #f0f7ff;
      }
      table {
        border-spacing: 0;
        border-collapse: collapse;
      }
      td {
        padding: 0;
      }
      img {
        border: 0;
      }

      a {
        text-decoration: none;
      }

      .wrapper {
        width: 100%;
        table-layout: fixed;
        background-color: #f0f7ff;
        padding: 16px 0;
      }

      .main {
        background-color: #fff;
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        border-spacing: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        color: #2e577c;
        border-radius: 8px;
      }

      .two-columns {
        font-size: 0;
      }

      .two-columns .column {
        width: 300px;
        display: inline-block;
        vertical-align: top;
      }

      p {
        font-size: 14px;
        margin: 0;
        line-height: 24px;
      }

      h3,
      h4 {
        margin: 0;
      }

      h3 {
        font-size: 24px;
        line-height: 1.3;
      }

      h4 {
        font-size: 18px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <center class="wrapper">
      <table class="main" width="100%">
        <!-- LOGO SECTION -->

        <tr>
          <td style="padding: 24px">
            <table style="width: 100%">
              <tr>
                <td style="font-size: 0">
                  <table style="width: 65%; display: inline-block">
                    <tr>
                      <td style="display: inline-block; padding-right: 16px">
                        <a href="https://afs-tawny.vercel.app/en">
                          <img
                            src="./img/afs.png"
                            alt="afs"
                            title="AFS"
                            width="73"
                            height="44"
                            title="AFS"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                  <table
                    style="width: 35%; display: inline-block; top: 20px"
                    valign="top"
                  >
                    <tr style="width: 100%">
                      <td
                        valign="bottom"
                        height="44px"
                        width="193px"
                        align="right"
                      >
                        <p style="right: 0px">View in browser</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- MERCHANT SECTION -->
        <tr>
          <td style="padding: 24px">
            <table>
              <tr></tr>
              <tr>
                <td>
                  <h3 style="margin-bottom: 8px">Dear ${name},</h3>
                </td>

                <td></td>
              </tr>

              <tr>
                <td>
                  <p style="font-size: 18px; line-height: 1.5">
                    Thank you for submitting your interest in working at AFS,
                    our team will evaluate your information and will get back to
                    you if we think you are a good fit for our team.
                  </p>
                  <br />
                  <p style="font-size: 18px; line-height: 1.5">Best regards,</p>
                  <p style="font-size: 18px; line-height: 1.5">
                    Human resources team.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- BANNER IMAGE -->
        <tr>
          <td style="padding: 0 16px">
            <img src="./img/banner.png" alt="Banner" style="max-width: 100%" />
          </td>
        </tr>

        <!-- BOTTOM SECTION -->
        <tr>
          <td style="padding: 24px; padding-bottom: 0">
            <h4>The information contained in the form can be found bellow</h4>
          </td>
        </tr>
        <tr>
          <td style="padding: 16px 0 32px">
            <table width="100%">
              <tr>
                <td class="two-columns">
                  <table width="100%">
                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Full name</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>${name}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Email address</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>${email}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>

                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>

                    <tr>
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Resume</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>Attached to email</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Cover letter</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>Attached to email</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td
                        height="1"
                        style="
                          background-color: #d4dfe9;
                          margin: 0 24px;
                          display: block;
                        "
                      ></td>
                    </tr>

                    <tr>
                      <td style="padding: 10px 0">
                        <table class="">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Candidate message</p>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding: 0 24px">
                              <p>${message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td height="1" style="background-color: #d4dfe9"></td>
        </tr>

        <tr>
          <td style="padding: 24px 40px; text-align: center">
            <table width="100%">
              <tr>
                <td style="padding-bottom: 8px">
                  <a
                    href="https://afs-tawny.vercel.app/"
                    style="
                      color: #002a52;
                      font-size: 14px;
                      font-weight: 700;
                      line-height: 18px;
                    "
                    >Arab Financial Services</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <p style="color: #6d91b2; font-weight: 400">
                    You have received this email because your are in the
                    <a href="mailto:careers@afs.com.bh" style="color: #002a52"
                      >careers@afs.com.bh</a
                    >
                    email group.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
`;
};
