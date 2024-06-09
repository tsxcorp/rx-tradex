import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "RX Tradex nhà tổ chức triển lãm hàng đầu ASEAN",
  description: "RX Tradex là một thành viên thuộc RX Global, đơn vị tổ chức sự kiện hàng đầu thế giới, tổ chức hơn 400 sự kiện tại 22 quốc gia khác nhau, phục vụ 43 lĩnh vực công nghiệp.",
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