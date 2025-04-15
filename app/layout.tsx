import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Nasehahadi | Front-End Developer",
  description:
    "Portfolio website of Ali Nasehahadi, a junior front-end developer specializing in React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased dark`}>{children}</body>
    </html>
  );
}

import "./globals.css";
