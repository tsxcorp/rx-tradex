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
  title: "RX Tradex nhà tổ chức triển lãm hàng đầu ASEAN",
  description: "RX Tradex tự hào là đơn vị tổ chức triển lãm với quy mô toàn cầu, mang đến những sự kiện cao cấp và chuyên sâu cho các nhà cung cấp và các đối tác chiến lược.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      
      <body className={roboto.className}>
        <Header
          lang = "vi"
        />
          {children}
        <Footer
          lang = "vi"
        />
      </body>
      
    </html>
  );
}
