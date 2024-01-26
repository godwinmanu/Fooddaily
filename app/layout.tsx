import type { Metadata } from "next";
import Gordita from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fooddaily",
  description: "Food delivery website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Gordita.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
