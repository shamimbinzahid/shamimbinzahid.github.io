import { Red_Hat_Display, Red_Hat_Mono } from 'next/font/google';
import "./globals.css";

const displayFont = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const monoFont = Red_Hat_Mono({
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
