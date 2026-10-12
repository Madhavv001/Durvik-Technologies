import Link from "next/link";
import { CheckCircle2, XCircle, MessageSquare, Mail } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      
      {/* Global Header with New Number */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#1e293b] bg-[#0f172a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold tracking-tight">DURVIK TECHNOLOGIES</Link>
          <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors">Pricing</Link>
          </div>
          <Link href="https://wa.me/917869112344" target="_blank" className="px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors">
            Chat on WhatsApp
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple & Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose our standard starter pack or get a custom quote for complex projects. No hidden charges.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            
            {/* Base Package Card */}
            <div className="rounded-2xl border border-[#334155] bg-[#1e293b] p-8 flex flex-col hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Portfolio Starter</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold">₹6,999</span>
                  <span className="text-slate-400">/one-time</span>
                </div>
                <p className="text-slate-400">Perfect for personal portfolios, freelancers, and small static business websites.</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {[
                  "Up to 5 Static Pages",
                  "Premium Responsive Design",
                  "Next.js + Tailwind CSS",
                  "Working Contact Form",
                  "WhatsApp Button Integration",
                  "Basic SEO Setup",
                  "Source Code Handover"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-[#334155] mt-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Not Included</p>
                  {["CMS / Admin Panel", "User Login / Database", "E-commerce", "Content Writing"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-500 mb-2">
                      <XCircle size={16} className="shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action Buttons with New Number */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/917869112344?text=Hi%20Durvik,%20I%20want%20to%20book%20the%20Portfolio%20Starter%20Package%20(6,999)."
                  target="_blank"
                  className="w-full py-3.5 rounded-lg font-semibold text-center bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors flex items-center justify-center gap-2"
                >
                  Book via WhatsApp <MessageSquare size={18} />
                </a>
                <a 
                  href={`mailto:durviktechnologies@gmail.com?subject=Order: Portfolio Starter Package&body=Hi Durvik Team,%0A%0AI want to book the Portfolio Starter Package (6,999).%0A%0AMy Details:%0AName:%0ABusiness Name:%0A%0AThank you.`}
                  className="w-full py-3.5 rounded-lg font-semibold text-center border border-[#334155] hover:bg-[#0f172a] text-white transition-colors flex items-center justify-center gap-2"
                >
                  Book via Email <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Custom Solutions Card */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-600/5 p-8 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Custom Web Solutions</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold">Custom Quote</span>
                </div>
                <p className="text-slate-400">For businesses needing dynamic features, e-commerce, AI integration, or web apps.</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">We Build</p>
                {[
                  "Business Websites with CMS",
                  "E-commerce & Payment Gateway",
                  "Web Apps with User Auth",
                  "AI/ML Powered Tools",
                  "SaaS Products",
                  "Advanced Animations"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Direct Action Buttons with New Number */}
              <div className="space-y-3 mt-auto">
                <a 
                  href="https://wa.me/917869112344?text=Hi%20Durvik,%20I%20need%20a%20custom%20web%20solution.%20Can%20we%20discuss?"
                  target="_blank"
                  className="w-full py-3.5 rounded-lg font-semibold text-center bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors flex items-center justify-center gap-2"
                >
                  Discuss on WhatsApp <MessageSquare size={18} />
                </a>
                <a 
                  href="mailto:durviktechnologies@gmail.com?subject=Custom Project Inquiry&body=Hi Durvik Team,%0A%0AI need a custom web solution.%0A%0AMy Requirements:%0A%0AThank you."
                  className="w-full py-3.5 rounded-lg font-semibold text-center border border-[#334155] hover:bg-[#0f172a] text-white transition-colors flex items-center justify-center gap-2"
                >
                  Send Requirements via Email <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Simple Process Note */}
          <div className="text-center max-w-2xl mx-auto p-8 bg-[#1e293b] rounded-2xl border border-[#334155]">
            <h3 className="font-bold mb-2">Our Simple Process</h3>
            <p className="text-slate-400 text-sm">
              50% Advance to Start → Weekly Updates → Final Payment on Delivery → Source Code Handover.
              <br />No hidden costs. No surprises.
            </p>
          </div>

        </div>
      </div>

      {/* Global Footer with New Number */}
      <footer className="bg-[#020617] border-t border-[#1e293b] pt-16 pb-8">
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

    </main>
  );
}