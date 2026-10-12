import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-8 text-glow">About Durvik Technologies</h1>
        
        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            Founded in Mandsaur, India, Durvik Technologies is a next-gen tech startup focused on bridging the gap between complex AI research and real-world applications.
          </p>
          <p>
            We specialize in building intelligent products that solve actual problems. From mobile applications like ChatSaathi to AgriTech AI models for disease detection, our mission is to deliver scalable, high-performance digital solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI First</h3>
              <p className="text-sm text-gray-400">Every product we build integrates modern machine learning capabilities.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Scalable</h3>
              <p className="text-sm text-gray-400">Built with Next.js and Cloud-native architectures for global reach.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-green-400 mb-2">User Centric</h3>
              <p className="text-sm text-gray-400">Clean UI/UX that makes complex technology accessible to everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}