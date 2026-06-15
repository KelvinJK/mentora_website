import type { Metadata } from "next";
import { Fira_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import CookieBanner from "@/components/CookieBanner";
import { AuthProvider } from "@/context/AuthContext";

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
  metadataBase: new URL("https://www.mentoratanzania.co.tz"),

  title: {
    template: "%s | Mentora Tanzania",
    default:
      "Mentora Tanzania — Tanzania's #1 AI Teaching Platform for the CBC Curriculum",
  },

  description:
    "Mentora is Tanzania's leading AI teaching assistant built exclusively for the Competence-Based Curriculum (CBC). Generate complete CBC-aligned lesson notes in minutes, access curriculum guidance, and track student progress across all 31 regions of Tanzania.",

  keywords: [
    "Mentora Tanzania",
    "Mentora",
    "AI teaching platform Tanzania",
    "CBC curriculum Tanzania",
    "Competence-Based Curriculum Tanzania",
    "CBC lesson plans Tanzania",
    "AI lesson planner Tanzania",
    "Tanzania EdTech",
    "teacher tools Tanzania",
    "lesson notes AI Tanzania",
    "CBC aligned lessons",
    "Tanzania education technology",
    "mwalimu AI Tanzania",
    "lesson planning tool Tanzania",
    "NECTA curriculum",
    "MoEVT curriculum 2025",
    "Form I to VI Tanzania",
    "Standard I to VII Tanzania",
    "Tanzania teacher resources",
    "elimu Tanzania",
    "AI kwa walimu Tanzania",
    "Mentora app",
    "app.mentoratanzania.co.tz",
    "mentoratanzania",
    "CBC lesson generator",
    "Tanzania school AI",
    "EdTech Africa",
    "walimu Tanzania",
    "shule Tanzania",
    "mafunzo Tanzania",
  ],

  authors: [{ name: "Mentora Team", url: "https://www.mentoratanzania.co.tz" }],
  creator: "Mentora Tanzania",
  publisher: "Mentora Tanzania",

  alternates: {
    canonical: "https://www.mentoratanzania.co.tz",
    languages: {
      "en-TZ": "https://www.mentoratanzania.co.tz",
      "sw-TZ": "https://www.mentoratanzania.co.tz",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title:
      "Mentora Tanzania — Tanzania's #1 AI Teaching Platform for CBC",
    description:
      "Generate CBC-aligned lesson notes, get AI curriculum guidance, and track student progress. Purpose-built for Tanzanian teachers across all 31 regions.",
    url: "https://www.mentoratanzania.co.tz",
    siteName: "Mentora Tanzania",
    locale: "en_TZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mentora Tanzania — AI Teaching Platform for Tanzania's CBC Curriculum",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mentora Tanzania — Tanzania's #1 AI Teaching Platform",
    description:
      "Generate CBC-aligned lesson notes, get AI curriculum guidance, and track student progress. Built for Tanzanian teachers.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "geo.region": "TZ",
    "geo.placename": "Dar es Salaam, Tanzania",
    "geo.position": "-6.7924;39.2083",
    ICBM: "-6.7924, 39.2083",
    "application-name": "Mentora Tanzania",
    "theme-color": "#7c3aed",
    "msapplication-TileColor": "#7c3aed",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.mentoratanzania.co.tz/#organization",
      name: "Mentora Tanzania",
      url: "https://www.mentoratanzania.co.tz",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mentoratanzania.co.tz/images/og-image.png",
      },
      description:
        "Tanzania's leading AI teaching platform for the Competence-Based Curriculum (CBC), serving teachers across all 31 regions.",
      areaServed: { "@type": "Country", name: "Tanzania" },
      sameAs: ["https://app.mentoratanzania.co.tz"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mentoratanzania.co.tz/#website",
      url: "https://www.mentoratanzania.co.tz",
      name: "Mentora Tanzania",
      description:
        "Tanzania's #1 AI Teaching Platform for the CBC Curriculum",
      publisher: { "@id": "https://www.mentoratanzania.co.tz/#organization" },
      inLanguage: ["en-TZ", "sw-TZ"],
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://app.mentoratanzania.co.tz/AskAgent?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://app.mentoratanzania.co.tz/#app",
      name: "Mentora — AI Teaching Assistant",
      applicationCategory: "EducationApplication",
      operatingSystem: "Web, Android, iOS",
      url: "https://app.mentoratanzania.co.tz",
      description:
        "AI-powered lesson planning, CBC curriculum guidance, and student progress tracking for Tanzanian teachers.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "TZS" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2400",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Mentora Tanzania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mentora Tanzania is Tanzania's #1 AI-powered teaching platform built specifically for the Competence-Based Curriculum (CBC). It helps teachers generate lesson notes, access curriculum guidance, and track student progress.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mentora aligned with Tanzania's CBC curriculum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mentora is purpose-built for Tanzania's Competence-Based Curriculum, covering all subjects and grade levels from Pre-Primary through Form VI, aligned to MoEVT and NECTA guidelines.",
          },
        },
        {
          "@type": "Question",
          name: "Which regions of Tanzania does Mentora serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mentora serves teachers across all 31 regions of Tanzania including Dar es Salaam, Dodoma, Arusha, Zanzibar, Mwanza, Mbeya, Kilimanjaro, Morogoro, Tanga, and every other region.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mentora free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Mentora offers a free tier for all Tanzanian teachers. Sign up at app.mentoratanzania.co.tz to get started immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What subjects does Mentora support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mentora supports all CBC subjects including Mathematics, Sciences, English, Kiswahili, Social Studies, vocational subjects, and more — for all levels from Standard I to Form VI.",
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CSPostHogProvider>
          <AuthProvider>
            {children}
            <CookieBanner />
          </AuthProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
