import type { Metadata, Viewport } from "next";
import { Anek_Malayalam, Inter, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoMl = Noto_Sans_Malayalam({ subsets: ["malayalam"], variable: "--font-noto-ml" });
const anek = Anek_Malayalam({ subsets: ["malayalam", "latin"], variable: "--font-anek" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "93Kerala | Malappuram's News Network – മലയാളം വാർത്തകൾ",
    template: "%s | 93Kerala",
  },
  description:
    "Malayalam and English news from Manjeri, Malappuram, Kerala, India and the world – 93Kerala digital news network.",
  // Pages that set their own openGraph replace this object, so they repeat siteName.
  openGraph: { siteName: "93Kerala", type: "website", locale: "ml_IN", images: ["/images/placeholder.jpg"] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#171717" };

// Applies the saved language before first paint, so the page never flashes the wrong language.
const LANG_SCRIPT = `try{if(localStorage.getItem("lang")==="en"){var h=document.documentElement;h.dataset.lang="en";h.lang="en"}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ml"
      suppressHydrationWarning
      className={`${inter.variable} ${notoMl.variable} ${anek.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-page font-sans text-ink">{children}</body>
    </html>
  );
}
