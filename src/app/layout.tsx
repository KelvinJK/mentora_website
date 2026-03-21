import type { Metadata } from "next";
import { Fira_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

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
  description: "Transforming education in Tanzania through AI-driven lesson plans, interactive learning, and teacher empowerment. Mentora helps educators create and deliver better content.",
  keywords: ["Mentora", "Mentora Tanzania", "AI Education", "EdTech Africa", "Lesson Planning", "Teacher Empowerment", "Interactive Learning", "Education Technology", "Tanzania"],
  authors: [{ name: "Mentora Team" }],
  creator: "Mentora",
  publisher: "Mentora Tanzania",
  icons: {
    icon: "https://mentoraapp.xyz/favicon.ico",
    apple: "https://mentoraapp.xyz/logo192.png",
  },
  openGraph: {
    title: "Mentora Tanzania | Empower Teaching with Intelligence",
    description: "Transforming education in Tanzania through AI-driven lesson plans, interactive learning, and teacher empowerment.",
    url: "https://mentoraapp.xyz",
    siteName: "Mentora",
    locale: "en_TZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentora Tanzania | Empower Teaching with Intelligence",
    description: "Transforming education in Tanzania through AI-driven lesson plans and teacher empowerment.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <CSPostHogProvider>
          {children}
        </CSPostHogProvider>
      </body>
    </html>
  );
}
