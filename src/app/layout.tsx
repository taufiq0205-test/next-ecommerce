"use client";


import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isEditorPage = pathname.startsWith('/editor');

  return (
    <html lang="en">      
      <body className={inter.className}>
        {!isEditorPage && <Navbar />}
        {children}
        {!isEditorPage && <Footer/>}
        </body>
    </html>
  );
}
