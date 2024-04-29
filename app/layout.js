import Head from "next/head";
import RootWrapper from "./rootWrapper";
import "./globals.css";

export const metadata = {
  title: "AFS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/isotope-layout/dist/isotope.min.css"
          />
        </Head>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
