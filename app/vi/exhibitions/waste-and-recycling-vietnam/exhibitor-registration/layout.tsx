import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "WRV - Waste and Recycling Vietnam | RX Tradex",
  description: "RX Tradex là thành viên của RX, tổ chức tổ chức sự kiện hàng đầu thế giới",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}