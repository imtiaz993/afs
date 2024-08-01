import Head from "next/head";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../common/Footer";
import "../globals.css";
import Script from "next/script";

export const metadata = {
  title: "AFS",
  description: "",
};

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();
  const isArabic = locale === "ar";
  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body
        style={{
          fontFamily: isArabic
            ? "'Noto Kufi Arabic' !important"
            : "PP Montreal",
        }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/isotope-layout/dist/isotope.min.css"
          />
        </Head>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
          <ToastContainer />
        </NextIntlClientProvider>

        {/* <Script
          src="https://cdn.cookielaw.org/consent/1168d97f-8e21-4d5a-a0dc-6e0604601092/OtAutoBlock.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          type="text/javascript"
          charset="UTF-8"
          data-domain-script="1168d97f-8e21-4d5a-a0dc-6e0604601092"
          strategy="afterInteractive"
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-VSQJG2Y6RL`}
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VSQJG2Y6RL'); 
            `}
        </Script>

        <Script id="optanon-wrapper" strategy="afterInteractive">
          {`
            function OptanonWrapper() { }
          `}
        </Script> */}
      </body>
    </html>
  );
}
