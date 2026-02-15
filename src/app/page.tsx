import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamGrid from '@/components/TeamGrid';
import PartnershipForm from '@/components/PartnershipForm';
import CountUp from '@/components/CountUp';
import { Bot, BookOpen, Layers, Users, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-fuchsia-100 selection:text-fuchsia-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-100/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-fuchsia-50 text-fuchsia-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-fuchsia-600 mr-2"></span>
            Reimagining Education in Tanzania
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8 leading-tight">
            Empower Teaching with <br />
            <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Mentora provides AI-driven lesson plans, automated assessments, and continuous professional development to help teachers focus on what matters most—their students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://mentoratanzania.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold tracking-wide hover:shadow-glow transition-all transform hover:-translate-y-1 inline-block"
            >
              TRY FOR FREE
            </a>
          </div>

          {/* Dashboard Preview Image */}
          <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl shadow-2xl glass-nav p-2 border border-slate-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="aspect-[16/9] bg-slate-50 rounded-xl overflow-hidden relative">
              <img
                src="/images/dashboard-hd.svg"
                alt="Mentora Platform Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-slate-800">Our Reach</h2>
            <div className="w-24 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-fuchsia-600 mb-2">
                <CountUp end={400} suffix="+" />
              </h3>
              <p className="text-slate-600 font-medium">Partner Schools</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                <CountUp end={7} duration={1500} />
              </h3>
              <p className="text-slate-600 font-medium">Regions Covered</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-fuchsia-600 mb-2">
                <CountUp end={50000} suffix="+" duration={2500} />
              </h3>
              <p className="text-slate-600 font-medium">Students Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mentora? / Features */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-4">Why Mentora?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We solve the biggest challenges in modern education with smart, scalable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-fuchsia-50 flex items-center justify-center mb-6 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">AI Lesson Plans</h3>
              <p className="text-slate-500 leading-relaxed">
                Generate comprehensive, curriculum-aligned lesson plans in seconds, tailored to your classroom&apos;s specific needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">CBC Compliance</h3>
              <p className="text-slate-500 leading-relaxed">
                Stay fully compliant with Competency Based Curriculum standards with our automated auditing tools.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Reduce Complexity</h3>
              <p className="text-slate-500 leading-relaxed">
                Simplify administrative tasks and grading so teachers can dedicate more time to student mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Teaching enthusiasts, tech innovators, and education policy experts working together.
            </p>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-4">Inspiration & Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explore our latest methodologies and success stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="aspect-video bg-fuchsia-50 rounded-xl overflow-hidden mb-6 relative flex items-center justify-center text-fuchsia-300 group-hover:bg-fuchsia-100 transition-colors">
                <Users size={48} className="text-fuchsia-500" />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-fuchsia-600 shadow-sm">CASE STUDY</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-fuchsia-600 transition-colors">Digital Transformation in Rural Schools</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">How AI tools bridge the resource gap in underserved regions, bringing quality education to all.</p>
              <div className="flex items-center text-sm font-bold text-fuchsia-600 group-hover:text-fuchsia-700 transition-colors">
                READ MORE <span className="ml-2">→</span>
              </div>
            </div>

            <div className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="aspect-video bg-violet-50 rounded-xl overflow-hidden mb-6 relative flex items-center justify-center text-violet-300 group-hover:bg-violet-100 transition-colors">
                <BookOpen size={48} className="text-violet-500" />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-violet-600 shadow-sm">PEDAGOGY</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition-colors">Implementing CBC Effectively</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">A practical, step-by-step guide for teachers adapting to the new Competency Based Curriculum.</p>
              <div className="flex items-center text-sm font-bold text-violet-600 group-hover:text-violet-700 transition-colors">
                READ MORE <span className="ml-2">→</span>
              </div>
            </div>

            <div className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="aspect-video bg-blue-50 rounded-xl overflow-hidden mb-6 relative flex items-center justify-center text-blue-300 group-hover:bg-blue-100 transition-colors">
                <Lightbulb size={48} className="text-blue-500" />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">IMPACT</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Teacher Wellbeing & Efficiency</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">Strategies for reducing burnout by automating administrative burdens and focusing on teaching.</p>
              <div className="flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                READ MORE <span className="ml-2">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 mb-4">Become a Partner</h2>
            <p className="text-lg text-slate-600">
              Join us in transforming education. Let&apos;s discuss how Mentora can support your institution.
            </p>
          </div>
          <PartnershipForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
