import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: "RX Tradex - Asia's Leading Exhibition Organizer",
  description: "RX Tradex is a member of RX Global, the world's leading event organizer, organizing more than 400 events in 22 different countries, serving 43 industry sectors.",
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