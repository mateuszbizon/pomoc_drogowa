import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

const montSerrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
