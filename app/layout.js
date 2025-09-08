import { Red_Hat_Display, Noto_Sans_Mono } from 'next/font/google';
import "./globals.css";

const displayFont = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const monoFont = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: "Shamim Bin Zahid",
  description: "Product, Usability, Engineering, Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monoFont.variable} ${displayFont.variable}`}>
      <body className={`${monoFont.className}`}>
        {children}
      </body>
    </html>
  );
}
