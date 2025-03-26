import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { Header } from "@/components";


export const metadata = {
  title: "Skelv",
  description: "Get Hired, Gain Experience, Build Your Portfolio.",
  icons: 'globe.svg',
  other: {
    "stylesheet":"https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css",
  }
=======
=======
import { Header } from "@/components";
>>>>>>> 782717e (completed with waitlist)


export const metadata = {
  title: "Skelv",
  description: "Get Hired, Gain Experience, Build Your Portfolio.",
  icons: 'globe.svg',
<<<<<<< HEAD
>>>>>>> f52cc9f (first commit)
=======
  other: {
    "stylesheet":"https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css",
  }
>>>>>>> 782717e (completed with waitlist)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
<<<<<<< HEAD
<<<<<<< HEAD
        <Header/>
=======
>>>>>>> f52cc9f (first commit)
=======
        <Header/>
>>>>>>> 782717e (completed with waitlist)
        {children}
      </body>
    </html>
  );
}
