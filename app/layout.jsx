import {
  Anaheim,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const displayFont = Anaheim({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Shamim Bin Zahid",
  description: "Product, Usability, Engineering, Design",
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-9RRRYEHJBK"}
      />
      <Script id="ga-id" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RRRYEHJBK');
        `}
      </Script>
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable}`}>
      <head>
        <link rel="icon" href="shamim.ico" type="image/jpeg" sizes="32x32" />
        <GoogleAnalytics />
      </head>
      <body className={`${displayFont.className}`}>{children}</body>
    </html>
  );
}
