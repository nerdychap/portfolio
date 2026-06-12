import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code,
  Database,
  ExternalLink,
  Figma,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Star,
  UserCircle2,
  Zap,
} from "lucide-react";
import combuiImage from "./assets/images/comb-ui.jpeg";
import socaiImage from "./assets/images/socai.jpeg";

/* ── Scroll-reveal wrapper ────────────────────────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */
const SOCIAL = {
  github: "https://github.com/nerdychap",
  linkedin: "https://www.linkedin.com/in/siyabonga-hlengwa-4552a087/",
  email: "mailto:HLNSIY007@myuct.ac.za",
} as const;

const STATS = [
  { icon: <Globe className="text-blue-600" size={28} />, value: "7+", label: "Years Experience" },
  { icon: <Code className="text-blue-600" size={28} />, value: "10+", label: "Production Apps" },
  { icon: <Smartphone className="text-blue-600" size={28} />, value: "3+", label: "Mobile Apps Shipped" },
  { icon: <Palette className="text-blue-600" size={28} />, value: "Advanced", label: "UI/UX in Figma" },
];

const SKILLS = [
  { name: "React / Next.js", level: "Expert", icon: <Code size={20} className="text-blue-500" /> },
  { name: "TypeScript", level: "Expert", icon: <Code size={20} className="text-blue-500" /> },
  { name: "React Native", level: "Advanced", icon: <Smartphone size={20} className="text-blue-500" /> },
  { name: "Redux / State Mgmt", level: "Advanced", icon: <Database size={20} className="text-blue-500" /> },
  { name: "Node.js / Express", level: "Intermediate", icon: <Server size={20} className="text-blue-500" /> },
  { name: "Azure Cloud", level: "Intermediate", icon: <Globe size={20} className="text-blue-500" /> },
  { name: "UI/UX Design", level: "Advanced", icon: <Palette size={20} className="text-blue-500" /> },
  { name: "Figma", level: "Advanced", icon: <Figma size={20} className="text-blue-500" /> },
  { name: "HTML / CSS / Tailwind", level: "Expert", icon: <Palette size={20} className="text-blue-500" /> },
];

const EXPERIENCE = [
  {
    title: "Front-End / Full-Stack Developer",
    company: "Mercedes-Benz",
    period: "Oct 2022 — Present",
    highlights: [
      "Architect and develop in-house web applications for plant operations used by 500+ employees daily",
      "Lead the front-end stack with React & TypeScript, delivering performant, accessible UIs",
      "Build and maintain Node.js APIs backed by Azure for data storage, auth, and real-time features",
      "Champion code quality through peer reviews, testing strategies, and CI/CD pipelines",
    ],
    tech: ["React", "TypeScript", "Node.js", "Azure", "CI/CD"],
  },
  {
    title: "Front-End Development Teacher / Tutor",
    company: "Noroff",
    period: "Oct 2022 — Sep 2023",
    highlights: [
      "Delivered lectures and 1-on-1 tutoring on HTML, CSS, JavaScript, and React",
      "Contributed to curriculum design and student assessment frameworks",
      "Mentored junior developers, fostering best practices in modern front-end development",
    ],
    tech: ["React", "JavaScript", "HTML/CSS", "Mentoring"],
  },
  {
    title: "UI Lead Engineer",
    company: "DotModus",
    period: "Jan 2021 — Oct 2022",
    highlights: [
      "Led UI development across web and mobile projects for enterprise clients",
      "Spearheaded the adoption of React Native, delivering cross-platform apps on time and within budget",
      "Provided strategic UI/UX direction, collaborating directly with stakeholders and design teams",
    ],
    tech: ["React", "React Native", "UI/UX", "TypeScript"],
  },
  {
    title: "Front-End Developer",
    company: "Mirum",
    period: "Nov 2019 — Dec 2020",
    highlights: [
      "Developed responsive, pixel-perfect web applications for diverse clients",
      "Implemented component libraries and design systems for reusability across projects",
      "Worked closely with designers to translate Figma/Sketch mockups into production code",
    ],
    tech: ["React", "JavaScript", "HTML/CSS", "Design Systems"],
  },
];

const PROJECTS = [
  {
    title: "CombUI — Generative React UI Builder",
    tagline: "AI-powered UI generation from plain English",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI / Anthropic API", "Vitest", "Playwright"],
    image: combuiImage,
    link: "https://comb-ui.vercel.app/",
    description:
      "A full-stack web app that lets developers describe UI components in natural language and instantly receive production-ready React code. Leverages multi-model AI orchestration for high-fidelity output.",
  },
  {
    title: "Socai — AI Content Social Platform",
    tagline: "Create and share AI-generated visuals",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Grok / Recraft Image API", "Playwright"],
    image: socaiImage,
    link: "https://socai-dusky.vercel.app/",
    description:
      "A social media platform purpose-built for AI-generated content. Users create, curate, and share AI artwork with a modern, responsive interface designed for seamless mobile and desktop experiences.",
  },
];

const VALUE_PROPOSITIONS = [
  {
    icon: <Zap className="text-blue-600" size={24} />,
    title: "Performance-First Mindset",
    desc: "I optimize bundle sizes, lazy-load intelligently, and leverage server components to deliver sub-second load times.",
  },
  {
    icon: <Code className="text-blue-600" size={24} />,
    title: "Clean, Scalable Architecture",
    desc: "Strong typing with TypeScript, modular component design, and well-defined API contracts ensure maintainability at scale.",
  },
  {
    icon: <Palette className="text-blue-600" size={24} />,
    title: "Design-to-Code Fluency",
    desc: "With advanced Figma skills, I bridge the gap between design and engineering — pixel-perfect UIs with thoughtful interactions.",
  },
  {
    icon: <Globe className="text-blue-600" size={24} />,
    title: "Cross-Platform Delivery",
    desc: "From web apps to React Native mobile, I ship cohesive experiences across platforms with shared business logic.",
  },
];

/* ── Component ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased overflow-x-hidden">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <header className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=20')] bg-cover bg-center opacity-[0.07]" />
          {/* Subtle grid overlay for depth */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 px-4 py-2 rounded-full text-emerald-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Siyabonga Emmanuel
              <span className="block text-blue-400">Hlengwa</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 mb-4 max-w-2xl leading-relaxed">
              Senior Frontend Engineer who ships <strong className="text-white">performant, accessible web &amp; mobile applications</strong> with
              React, Next.js, and React Native.
            </p>
            <p className="text-base text-blue-200/70 mb-10 max-w-xl">
              7+ years transforming complex business requirements into intuitive digital experiences — from
              enterprise dashboards at Mercedes-Benz to AI-powered SaaS products.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={SOCIAL.email}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-blue-50 px-7 py-3.5 rounded-lg font-semibold transition-colors shadow-lg shadow-black/20"
              >
                <Mail size={18} /> Let's Talk
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors border border-white/10"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors border border-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl transition-shadow text-center">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* ── About ──────────────────────────────────────────────── */}
        <FadeIn>
          <section id="about" className="mb-28 scroll-mt-24">
            <SectionLabel icon={<UserCircle2 size={18} />} text="ABOUT ME" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Turning Complex Problems into Elegant Interfaces
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-black/5 space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                I'm a <strong className="text-gray-900">Frontend-Focused Full-Stack Developer</strong> with
                over seven years of experience building web and mobile applications that serve real users at
                scale. My toolkit centres on React, Next.js, and TypeScript, complemented by Node.js backends
                and Azure cloud infrastructure.
              </p>
              <p>
                I hold a <strong className="text-gray-900">Bachelor of Science in Mechatronics Engineering</strong> from
                the University of Cape Town — an interdisciplinary foundation that sharpened my
                systems-thinking and problem-solving abilities before I fell in love with front-end development.
              </p>
              <p>
                Beyond code, I bring <strong className="text-gray-900">UX/UI design fluency</strong> with
                Figma, allowing me to own the full journey from wireframe to production deploy. Whether it's
                an enterprise dashboard, a cross-platform mobile app, or an AI-powered SaaS product, I care
                deeply about performance, accessibility, and craft.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <Linkedin size={18} /> LinkedIn Profile
                </a>
                <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <Github size={18} /> GitHub Profile
                </a>
                <a href="#"
                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <FileText size={18} /> Download CV
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── What I Bring ──────────────────────────────────────── */}
        <FadeIn>
          <section className="mb-28">
            <SectionLabel icon={<Star size={18} />} text="WHAT I BRING" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Work With Me</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {VALUE_PROPOSITIONS.map((vp, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">{vp.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{vp.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{vp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Education ─────────────────────────────────────────── */}
        <FadeIn>
          <section className="mb-28">
            <SectionLabel icon={<GraduationCap size={18} />} text="EDUCATION" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Academic Background</h2>
            <div className="space-y-4">
              <EducationCard
                degree="BSc (Eng) — Mechatronics Engineering"
                school="University of Cape Town"
                years="2014 – 2018"
              />
            </div>
          </section>
        </FadeIn>

        {/* ── Experience ────────────────────────────────────────── */}
        <FadeIn>
          <section className="mb-28">
            <SectionLabel icon={<Briefcase size={18} />} text="EXPERIENCE" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Journey</h2>
            <div className="space-y-6">
              {EXPERIENCE.map((job, i) => (
                <ExperienceCard key={i} job={job} index={i} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Skills ────────────────────────────────────────────── */}
        <FadeIn>
          <section className="mb-28">
            <SectionLabel icon={<Code size={18} />} text="SKILLS" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Technical Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow flex items-center gap-4 group">
                  <div className="p-2.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">{s.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{s.name}</div>
                    <div className="text-sm text-blue-600">{s.level}</div>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Projects ──────────────────────────────────────────── */}
        <FadeIn>
          <section id="projects" className="mb-28 scroll-mt-24">
            <SectionLabel icon={<Sparkles size={18} />} text="FEATURED WORK" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Selected Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((p, i) => (
                <div key={i} className="group bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{p.tagline}</p>
                    <p className="text-gray-500 mb-5 leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t, j) => (
                        <span key={j} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Great</h3>
              <p className="text-gray-400">I'm open to full-time roles, contract work, and exciting collaborations.</p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Mail size={22} />, href: SOCIAL.email, label: "Email" },
                { icon: <Linkedin size={22} />, href: SOCIAL.linkedin, label: "LinkedIn", external: true },
                { icon: <Github size={22} />, href: SOCIAL.github, label: "GitHub", external: true },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Siyabonga Hlengwa. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-red-400">♥</span> using React, Tailwind CSS &amp; Vite
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Shared sub-components ────────────────────────────────────────── */

function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function EducationCard({ degree, school, years }: { degree: string; school: string; years: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{degree}</h3>
          <div className="text-blue-600 font-medium mt-1">{school}</div>
        </div>
        <div className="text-gray-400 text-sm font-medium bg-gray-50 px-4 py-1.5 rounded-full whitespace-nowrap">{years}</div>
      </div>
    </div>
  );
}

function ExperienceCard({ job, index }: { job: (typeof EXPERIENCE)[number]; index: number }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="text-blue-600 font-medium mt-1">{job.company}</div>
        </div>
        <div className="text-gray-400 text-sm font-medium bg-gray-50 px-4 py-1.5 rounded-full whitespace-nowrap">{job.period}</div>
      </div>
      <ul className="space-y-2 mb-5">
        {job.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600">
            <ChevronRight size={16} className="text-blue-400 mt-1 shrink-0" />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
      {job.tech && (
        <div className="flex flex-wrap gap-2">
          {job.tech.map((t, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
