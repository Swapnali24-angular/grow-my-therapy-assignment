import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#faf7f2] font-sans antialiased text-[#2f3e2e]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}