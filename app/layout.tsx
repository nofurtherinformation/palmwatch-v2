import { MultiSearch } from "@/components/MutliSearch";
import { Inter } from "next/font/google";
import Link from "next/link";
import queryClient from "@/utils/getMillData";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "PalmWatch",
  description: "Explore the impact of palm oil production on deforestation",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await queryClient.init();
  const searchList = queryClient.getSearchList();
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.variable}>
        <NavBar searchList={searchList} currentPage="">
        {children}
        </NavBar>
      </body>
    </html>
  );
}
