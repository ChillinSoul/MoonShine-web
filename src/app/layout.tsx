import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Toolbar from "./cmp/Toolbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonshine",
  description: "online accounting software for small businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
}
