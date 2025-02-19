import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Streamify",
  description: "A Music Streaming Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          " min-h-screen bg-gradient-to-b from-slate-950 to-slate-900"
        }
      >
        {children}
      </body>
    </html>
  );
}
