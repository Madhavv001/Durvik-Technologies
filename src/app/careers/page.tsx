import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, Users, FileText } from "lucide-react";

// Job Data with Full Descriptions
const jobs = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    exp: "0-1 Years",
    type: "Remote India",
    desc: "We are looking for a passionate Frontend Developer to build responsive and high-performance user interfaces for our AI products.",
    responsibilities: [
      "Develop pixel-perfect UI components using React.js and Tailwind CSS.",
      "Collaborate with backend team to integrate APIs seamlessly.",
      "Optimize application for maximum speed and scalability.",
      "Ensure cross-browser compatibility and mobile responsiveness."
    ],
    requirements: [
      "Strong proficiency in JavaScript/TypeScript and React ecosystem.",
      "Experience with state management (Redux/Zustand) and REST APIs.",
      "Basic understanding of web performance optimization.",
      "Good communication skills and ability to work in a remote team."
    ]
  },
  {
    id: 2,
    role: "Backend Engineer Intern",
    exp: "0-2 Years",
    type: "Remote India",
    desc: "Join our engineering team to build scalable server-side applications and robust APIs that power our intelligent products.",
    responsibilities: [
      "Design and implement secure RESTful APIs using Node.js or Python.",
      "Manage PostgreSQL/MongoDB databases and optimize queries.",
      "Implement authentication and authorization mechanisms.",
      "Write clean, testable code and maintain technical documentation."
    ],
    requirements: [
      "Proficiency in Node.js, Express, or Django/FastAPI.",
      "Solid understanding of database design and SQL/NoSQL.",
      "Familiarity with Git version control and CI/CD basics.",
      "Problem-solving mindset and eagerness to learn new technologies."
    ]
  },
  {
    id: 3,
    role: "AI/ML Research Intern",
    exp: "0-3 Years",
    type: "Remote India",
    desc: "Work on cutting-edge computer vision and NLP models. You will be involved in training, testing, and deploying ML models for real-world use cases.",
    responsibilities: [
      "Train and fine-tune deep learning models (CNNs, Transformers).",
      "Preprocess and augment datasets for improved model accuracy.",
      "Deploy models using Flask/FastAPI for production inference.",
      "Research latest papers and implement novel architectures."
    ],
    requirements: [
      "Strong foundation in Python and ML libraries (PyTorch/TensorFlow).",
      "Understanding of Computer Vision or NLP concepts.",
      "Experience with data manipulation (Pandas, NumPy).",
      "Bachelor's degree in CS/AI or related field (or equivalent experience)."
    ]
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-12 transition-colors text-sm font-medium">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            At Durvik Technologies, we're building the next generation of AI-powered solutions. 
            We hire based on skill, passion, and problem-solving ability.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <MapPin size={24}/>, title: "Remote First", desc: "Work from anywhere in India. Flexible hours focused on output." },
            { icon: <Users size={24}/>, title: "Mentorship", desc: "Learn directly from experienced engineers working on live AI projects." },
            { icon: <FileText size={24}/>, title: "Real Impact", desc: "Your code will be used by real users. No dummy projects." }
          ].map((item, i) => (
            <div key={i} className="bg-[#1e293b]/50 border border-[#334155] p-6 rounded-xl hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-blue-500" /> Open Positions
        </h2>
        
        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-[#1e293b] border border-[#334155] rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
              {/* Job Header */}
              <div className="p-8 border-b border-[#334155]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 flex items-center gap-1">
                      <Clock size={14}/> {job.exp}
                    </span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 flex items-center gap-1">
                      <MapPin size={14}/> {job.type}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{job.desc}</p>
              </div>

              {/* Job Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 p-8 bg-[#0f172a]/50">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-500"/> Roles & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FileText size={16} className="text-purple-500"/> Requirements
                  </h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Action */}
              <div className="p-6 border-t border-[#334155] bg-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-400">Ready to build the future with us?</p>
                <a 
                  href={`mailto:druviktechnologies@gmail.com?subject=Application: ${job.role}&body=Dear Hiring Team,%0A%0AI am writing to apply for the ${job.role} position at Durvik Technologies.%0A%0AName:%0AExperience:%0ALocation:%0APortfolio/GitHub:%0A%0AThank you for considering my application.`}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Apply Now <ArrowLeft size={18} className="rotate-180"/>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Note */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-3">Don't see your role?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We are always looking for talented individuals. Send your resume and portfolio to our HR team.
          </p>
          <a 
            href="mailto:druviktechnologies@gmail.com?subject=General Application - Durvik Technologies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Send Resume via Email
          </a>
        </div>
      </div>
    </main>
  );
}