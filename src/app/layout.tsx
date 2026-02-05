import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick what you need
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
          ${montserratAlternates.className}
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
