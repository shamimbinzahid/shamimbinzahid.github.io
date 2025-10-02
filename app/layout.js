import { Red_Hat_Display, DM_Sans, Anaheim, Slabo_13px, Alfa_Slab_One, DM_Serif_Display, Bree_Serif, PT_Serif, PT_Serif_Caption, Noto_Serif, Noto_Serif_Display, Atkinson_Hyperlegible } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const displayFont = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});

const monoFont = Anaheim({
  subsets: ['latin'],
  variable: '--font-mono',
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
    <html lang="en" className={`${monoFont.variable} ${displayFont.variable}`}>
      <head>
        <link
          rel="icon"
          href="shamim.ico"
          type="image/jpeg"
          sizes="32x32"
        />
        <GoogleAnalytics />
      </head>
      <body className={`${monoFont.className}`}>
        {children}
      </body>
    </html>
  );
}
