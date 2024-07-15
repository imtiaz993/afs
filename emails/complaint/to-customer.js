export const CustomerEmail = async function (
  firstname = "",
  lastname = "",
  prefix = "",
  phone = "",
  email = "",
  businessName = "",
  category = "",
  details = ""
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
                            src="https://afs-email.vercel.app/complaints/merchant-support/img/afs.png"
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
                  <h3 style="margin-bottom: 8px">Dear ${firstname} ${lastname}!</h3>
                </td>

                <td></td>
              </tr>

              <tr>
                <td>
                  <p style="font-size: 18px; line-height: 1.5">
                    We are sending you this email to confirm that we have
                    received your form request. One of our team members will
                    contact you shortly
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- BANNER IMAGE -->
        <tr>
          <td style="padding: 0 16px">
            <img src="https://afs-email.vercel.app/complaints/merchant-support/img/banner.png" alt="Banner" style="max-width: 100%" />
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
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Business name</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px"><p>${businessName}</p></td>
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
                              <p>First name</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px"><p>${firstname}</p></td>
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
                              <p>Last name</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px"><p>${lastname}</p></td>
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
                              <p>Phone number</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>${prefix}-${phone}</p>
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
                      <td style="padding: 10px 0">
                        <table class="column">
                          <tr>
                            <td style="font-weight: bold; padding: 0 24px">
                              <p>Complaint category</p>
                            </td>
                          </tr>
                        </table>

                        <table class="column last">
                          <tr>
                            <td style="padding: 0 24px">
                              <p>${category}</p>
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
                              <p>Complaint details</p>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding: 0 24px">
                              <p>${details}</p>
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
                <td style="padding-bottom: 16px; font-size: 0px">
                  <a style="margin-right: 16px" href="https://www.facebook.com/ArabFinancialServices"
                    ><img src="https://afs-email.vercel.app/assets/icons/facebook.png"
                  /></a>
                  <a style="margin-right: 16px; margin-left: 0px" href="https://x.com/afs_bh"
                    ><img src="https://afs-email.vercel.app/assets/icons/x.png"
                  /></a>
                  <a style="margin-right: 16px" href="https://www.instagram.com/afs_bh/"
                    ><img src="https://afs-email.vercel.app/assets/icons/instagram.png"
                  /></a>
                  <a style="margin-right: 16px" href="https://www.linkedin.com/company/arab-financial-services/"
                    ><img src="https://afs-email.vercel.app/assets/icons/linkedin.png"
                  /></a>
                  <a href="https://www.youtube.com/@arabfinancialservices">
                    ><img style="padding-bottom: 2px" src="https://afs-email.vercel.app/assets/icons/youtube.png"
                  /></a>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 8px">
                  <a
                    href="https://afs-tawny.vercel.app/"
                    style="
                      color: #2e577c;
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 18px;
                    "
                    >Arab Financial Services</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <p style="color: #6d91b2; font-weight: 400">
                    You are receiving this email because you have used one of
                    the forms on our website at
                    <a href="www.afs.com.bh" style="color: #002a52"
                      >www.afs.com.bh.</a
                    >
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
