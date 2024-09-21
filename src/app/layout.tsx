import type { Metadata } from "next";
import "./globals.css";
import { fugaz, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Mama's Meal",
  description: "Home Made Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fugaz.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
