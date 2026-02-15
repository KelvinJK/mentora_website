import type { Metadata } from "next";
import { Fira_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Mentora Tanzania | Empower Teaching with Intelligence",
  description: "Transforming education in Tanzania through AI-driven lesson plans and teacher empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${plusJakartaSans.variable} font-sans antialiased text-slate-800 bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
