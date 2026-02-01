import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pzzle",
  description: "Premium everyday t-shirts designed for comfort and style",
};

export default function RootShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${jost.className}
          antialiased
          bg-light-200
          text-dark-900
        `}
      >
        {children}
      </body>
    </html>
  );
}
