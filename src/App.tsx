import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  UserCircle2,
  Sparkles,
  ChevronRight,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";

const workExperience = [
  {
    title: "Front-End/Full-Stack Developer",
    company: "Mercedes-Benz",
    period: "2022 Oct - Current",
    description:
      "Develop in-house web applications for plant operations, leveraging React with TypeScript for the front-end and a Node.js-powered backend integrated with Azure for data storage and authentication.",
    tech: ["React", "TypeScript", "Node.js", "Azure"],
  },
  {
    title: "Front-End Development Teacher/Tutor",
    company: "Noroff",
    period: "2022 Oct - 2023 Sep",
    description:
      "Instructed students in HTML, CSS, JavaScript, and React, facilitating tutoring and video sessions. Contributed to grading and curriculum development.",
    tech: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "UI Lead Engineer",
    company: "DotModus",
    period: "2021 Jan - 2022 Oct",
    description:
      "Spearheaded web and mobile applications development using React and React Native. Provided strategic direction for UI development and collaborated closely with clients.",
    tech: ["React", "React Native", "UI/UX"],
  },
  {
    title: "Front-End Developer",
    company: "Mirum",
    period: "2019 Nov - 2020 Dec",
    description:
      "Developed responsive web applications using React and modern JavaScript.",
    tech: ["React", "JavaScript", "HTML/CSS"],
  },
];

const technicalSkills = [
  { name: "JavaScript [TypeScript]", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "React Native", level: "Advanced" },
  { name: "Redux", level: "Advanced" },
  { name: "Figma", level: "Advanced" },
  { name: "HTML/CSS", level: "Expert" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Azure", level: "Intermediate" },
];
const projects = [
  {
    title: "Ecommerce Web App",
    tech: ["React", "Redux Saga", "Tailwind CSS"],
    description:
      "A full-featured ecommerce platform with product filtering, cart management, and seamless checkout process.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    link: "https://market-square-web.netlify.app/",
  },
  {
    title: "Covid-19 Data Tracker",
    tech: ["React", "Material UI", "Redux", "D3.js"],
    description:
      "Real-time COVID-19 statistics visualization with interactive charts and country-specific data analysis.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
    link: "https://github.com/nerdychap/covid-19-viz",
  },
  {
    title: "Weather Dashboard",
    tech: ["React", "TypeScript", "OpenWeather API"],
    description:
      "Modern weather application with location-based forecasts and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    link: "https://weather-ang.netlify.app/",
  },
  {
    title: "Shopping Cart PWA",
    tech: ["React", "PWA", "IndexedDB"],
    description:
      "Progressive Web App with offline support, push notifications, and seamless mobile experience.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    link: "https://shopping-kart.netlify.app/",
  },
];
function App() {
  // Social media links
  const SOCIAL_LINKS = {
    github: "https://github.com/nerdychap",
    linkedin: "https://www.linkedin.com/in/siyabonga-hlengwa-4552a087/",
    email: "mailto:HLNSIY007@myuct.ac.za",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 mb-6">
              <Globe size={16} />
              <span>Available for Remote Work</span>
            </div>
            <h1 className="text-6xl font-bold mb-4 text-white">
              Siyabonga Emmanuel Hlengwa
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Crafting exceptional digital experiences with React & React Native
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg transition font-medium"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href={SOCIAL_LINKS.github}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition text-white"
              >
                <Github size={20} />
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="text-blue-600" size={24} />,
              title: "Web Applications",
              desc: "Built 8+ production apps",
            },
            {
              icon: <Smartphone className="text-blue-600" size={24} />,
              title: "Mobile Development",
              desc: "3+ React Native apps",
            },
            {
              icon: <Palette className="text-blue-600" size={24} />,
              title: "UI/UX Design",
              desc: "Advanced Figma",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                {stat.icon}
                <div>
                  <h3 className="font-semibold text-gray-900">{stat.title}</h3>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        {/* About Section */}
        <section className="mb-24">
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
            <UserCircle2 size={20} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Transforming Ideas into Digital Reality
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                I am a Front-End Developer with expertise in JavaScript,
                specializing in crafting dynamic web and mobile applications
                using React and React Native. Holding a Bachelor of Science in
                Mechatronics Engineering from the University of Cape Town, I
                have honed my passion for coding since my first introduction to
                programming during university.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Recently, I have expanded my skill set into UX/UI design,
                mastering design tools like Figma for prototyping and
                wireframing. This dual expertise allows me to create intuitive
                and visually appealing experiences for users, blending technical
                prowess with design sensibility.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  <Github size={20} />
                  Github Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
            <GraduationCap size={20} />
            <span>EDUCATION</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Academic Background
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    BSc(Eng) - Mechatronics Engineering
                  </h3>
                  <div className="text-blue-600 font-medium mt-2">
                    University of Cape Town
                  </div>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">2014 - 2018</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    NSC - Grade 12
                  </h3>
                  <div className="text-blue-600 font-medium mt-2">
                    Umkhumbi High School
                  </div>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">2009 - 2013</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
            <Briefcase size={20} />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Professional Journey
          </h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="text-blue-600 font-medium mt-1">
                      {job.company}
                    </div>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">{job.period}</div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                {job.tech && (
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
            <Code size={20} />
            <span>SKILLS</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group"
              >
                <div className="flex flex-col h-full">
                  <div className="text-gray-900 font-medium mb-2">
                    {skill.name}
                  </div>
                  <div className="text-blue-600 text-sm mt-auto group-hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-1">
                      {skill.level}
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
            <Sparkles size={20} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400">
                Open for exciting opportunities and collaborations
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <a
                href={SOCIAL_LINKS.email}
                className="text-white hover:text-blue-400 transition"
              >
                <Mail size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Siyabonga Hlengwa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
