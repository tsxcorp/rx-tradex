import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Tin tức | RX Tradex nhà tổ chức triển lãm hàng đầu ASEAN",
  description: "RX Tradex: Cập nhật các thông tin liên quan đến ngành công nghiệp phụ trợ, điện tử, gia công CNC,…",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={roboto.className}>
      {children}
    </main>
  );
}