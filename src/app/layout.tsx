import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: "Durvik Technologies | AI & Web Solutions in Mandsaur",
    template: "%s | Durvik Technologies"
  },
  description: "Leading tech startup in Mandsaur, MP offering AI, Web Development, and Mobile App solutions. Affordable packages starting at ₹6,999.",
  keywords: ["Web Development Mandsaur", "AI Startup India", "Next.js Developer", "Freelance Web Designer", "Durvik Technologies", "App Development MP"],
  authors: [{ name: "Madhav Sharma", url: "https://durvik-tech.vercel.app" }],
  creator: "Durvik Technologies",
  publisher: "Durvik Technologies",
  openGraph: {
    title: "Durvik Technologies | Intelligent Software Solutions",
    description: "Building scalable AI, Web, and Mobile products from Mandsaur, India.",
    url: "https://durvik-tech.vercel.app",
    siteName: "Durvik Technologies",
    locale: "en_IN",
    type: "website",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Durvik Technologies",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "6999",
                "priceCurrency": "INR"
              },
              "author": {
                "@type": "Person",
                "name": "Madhav Sharma"
              }
            })
          }}
        />
        
        {children}
        
        {/* Global Footer with CORRECT Number */}
        <footer className="bg-[#020617] border-t border-[#1e293b] pt-16 pb-8 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">DURVIK TECH</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Engineering the future of intelligent software. We build scalable AI, Web, and Mobile solutions for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Technology</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Artificial Intelligence</li>
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>Computer Vision</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Mandsaur, Madhya Pradesh, India</li>
                <li>durviktechnologies@gmail.com</li>
                <li>+91 78691 12344</li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#1e293b] text-center text-xs text-slate-500">
            © 2026 Durvik Technologies. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}