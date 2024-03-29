import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "footscore",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-16 md:py-2 text-textPrimary">
          <Navbar />
          <section className="flex space-x-4">
            < Sidebar />
            {children}
            {/* news */}
          </section>
        </main>
      </body>
    </html>
  );
}
