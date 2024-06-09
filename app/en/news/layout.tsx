import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "News | RX Tradex nhà tổ chức triển lãm hàng đầu ASEAN",
  description: "RX Tradex: Update information related to supporting industries, electronics, CNC processing,... ",
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