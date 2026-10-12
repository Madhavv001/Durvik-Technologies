"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Mail, CheckCircle2, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { stats, technologies, highlightedProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pb-20 relative">
      
      {/* Navbar with New WhatsApp Number */}
      <nav className="fixed top-0 w-full z-40 border-b border-[#1e293b] bg-[#0f172a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white/5 border border-white/10">
               <Image 
                 src="/logo.png" 
                 alt="Durvik Technologies Logo" 
                 fill 
                 className="object-contain p-1"
                 priority 
               />
            </div>
            <span className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
              DURVIK TECHNOLOGIES
            </span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
            <Link href="#stats" className="hover:text-white transition-colors">Impact</Link>
            <Link href="#tech" className="hover:text-white transition-colors">Technology</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Pricing</Link>
          </div>
          
          <Link href="https://wa.me/917869112344" target="_blank" className="px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-2 shadow-lg shadow-green-500/20">
            Chat on WhatsApp
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e293b] bg-[#1e293b]/50 text-xs text-slate-400 mb-6">
            <CheckCircle2 size={14} className="text-green-500"/> ISO Compliant Development Process
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Enterprise-grade <br />
            <span className="text-blue-500">AI & Software Solutions.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Durvik Technologies delivers production-ready digital products. From Mandsaur to the world, we engineer systems that scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#work" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              View Case Studies <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="px-8 py-3.5 border border-[#1e293b] rounded-lg hover:bg-[#1e293b] transition-colors flex items-center gap-2">
              View Pricing <Globe size={18}/>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 border-y border-[#1e293b] bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="text-center md:text-left">
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 inline-block border-b-2 border-blue-500 pb-2">Our Technology Stack</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">We use industry-standard tools to ensure security, scalability, and performance.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <div key={i} className="bg-[#1e293b] border border-[#334155] p-4 rounded-lg flex items-center gap-3 hover:border-blue-500/50 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto bg-[#020617]">
        <h2 className="text-2xl font-bold mb-12 inline-block border-b-2 border-blue-500 pb-2">Featured Deployments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlightedProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: index * 0.1 }} 
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-8 group flex flex-col h-full hover:border-blue-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">{project.category}</span>
                <Code2 size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors"/>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-[#0f172a] border border-[#1e293b] rounded text-slate-400">{tag}</span>)}
              </div>
              <Link href={project.link} target="_blank" className="text-sm font-bold text-white hover:text-blue-400 flex items-center gap-2 mt-auto">
                View Details <ArrowRight size={14}/>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-2">Request a Consultation</h2>
          <p className="text-slate-400 mb-8 text-sm">Tell us about your requirements. We respond within 24 hours.</p>
          
          <form action="https://formsubmit.co/durviktechnologies@gmail.com" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="New Business Enquiry - Durvik Technologies" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/#contact" />
            
            <div className="grid grid-cols-2 gap-4">
              <input name="name" required placeholder="Full Name" className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" />
              <input name="email" type="email" required placeholder="Business Email" className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" />
            </div>
            <input name="company" placeholder="Organization Name" className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" />
            <textarea name="message" rows={4} required placeholder="Project Requirements..." className="w-full bg-[#0f172a] border border-[#1e293b] rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
            
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Submit Enquiry <Mail size={18}/>
            </button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp Button with New Number */}
      <a 
        href="https://wa.me/917969112344?text=Hi%20Durvik%20Technologies,%20I%20have%20a%20project%20requirement." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={28} />
      </a>

    </main>
  );
}