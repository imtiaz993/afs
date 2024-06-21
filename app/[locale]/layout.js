import Head from "next/head";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "../common/Footer";
import "../globals.css";

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
        style={{ fontFamily: isArabic ? "'Noto Kufi Arabic' !important" : "PP Montreal" }}
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
