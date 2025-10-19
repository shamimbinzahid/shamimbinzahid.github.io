import { Anaheim } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import DarkModeToggle from "./components/DarkModeToggle";

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

const Clarity = () => {
  return (
    <Script type="text/javascript" strategy="afterInteractive" id="clarity">
      {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "toorfi6hfi");`}
    </Script>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable}`}>
      <head>
        <link rel="icon" href="shamim.ico" type="image/jpeg" sizes="32x32" />
        <GoogleAnalytics />
        <Clarity />
      </head>
      <body className={`${displayFont.className}`}>
        <DarkModeToggle /> 
        {children}
      </body>
    </html>
  );
}
