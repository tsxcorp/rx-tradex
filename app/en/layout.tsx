import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "RX Tradex - Asia's leading industrial and manufacturing exhibition organiser",
  description: "RX Tradex is proud to be a global exhibition organizer, offering high-end and in-depth events to suppliers and strategic partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <Header
          lang = "en"
        />
          {children}
        <Footer
          lang = "en"
        />
      </body>
      
    </html>
  );
}
