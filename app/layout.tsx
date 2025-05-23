import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

export const metadata = {
  title: "Skelv",
  description: "Get Hired, Gain Experience, Build Your Portfolio.",
  icons: {
    icon: "Skelv logo.png",
  },
  other: {
    stylesheet: "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
