import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Cleaned repository routing array mapped cleanly to your profile namespace
const projects = [
  {
    title: "Diabetes Care with AI",
    description:
      "An ML-powered diabetes prediction system with a Gemini API chatbot, lifestyle suggestions, and visual health insights.",
    techStack: ["ML", "AI", "Gemini API", "Flask", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://diabetes-care-with-ai-5-nd7x.onrender.com/",
    github: "https://github.com/Vikas84214/Diabetes-care-with-AI",
    image: "https://diabetes-care-with-ai-5-nd7x.onrender.com/static/doctor.png",
  },
  {
    title: "AI Crop Disease Detection Agent",
    description:
      "AI Crop Doctor leverages computer vision pipelines to target, classify, and isolate active leaf infections efficiently.",
    techStack: ["Python", "Flask", "TensorFlow", "Firebase", "Google Cloud"],
    github: "https://github.com/Vikas84214/ai-crop-disease-detection-agent",
    liveDemo: "https://ai-crop-doctor-app.onrender.com/",
    image: "https://media.istockphoto.com/id/1496224767/vector/vector-cute-farmer-robot-cartoon-illustration-isolated.jpg?s=1024x1024&w=is&k=20&c=Q96xOCkdNNc8-NwUVzO1Ka0CSxIfKxv7z5rKch2rAuo=",
  },
  {
    title: "GUI Devcation Showcase",
    description:
      "An ultra-premium frontend layout project presenting cutting-edge landing sections and component metrics.",
    techStack: ["React.js", "Tailwind CSS", "UI/UX Architecture"],
    liveDemo: "https://devcation-2025-one.vercel.app/",
    github: "https://github.com/Vikas84214/Devcation-2025",
    image: "https://placehold.co/600x400/A2D2FF/333?text=Frontend+Site",
  },
];

const Projects = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Fluid Vector Layers */}
      <div className="absolute w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full filter blur-3xl top-10 left-10 animate-blob pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full filter blur-3xl bottom-10 right-10 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Core Header Formatting */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-900/30 px-3 py-1 rounded-full uppercase mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white text-center mb-4 tracking-tight">
            Selected Engineering Works
          </h2>
          <span className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-sm"></span>
        </div>

        {/* Dynamic Project Cards Loop Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between bg-white/60 dark:bg-gray-800/40 border border-white/80 dark:border-gray-700/40 rounded-3xl shadow-xl p-5 backdrop-blur-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 ${
                inView ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div>
                {/* Visual Image Banner Frame with Zoom Effects */}
                {project.image && (
                  <div className="mb-5 rounded-2xl overflow-hidden shadow-md h-48 relative bg-gray-100 dark:bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/600x400?text=System+Snapshot";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Info Text Nodes */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Micro TechBadges List Grid Array */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100/80 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-purple-200/30 dark:border-purple-800/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Custom CTA Anchor Action Links Layout */}
                <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700/50 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    >
                      <FaGithub className="text-base" /> Repository
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 ml-auto"
                    >
                      Deployment <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled Entry Motion Engines */}
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(30px, -30px) scale(1.05); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 10s infinite alternate ease-in-out; }
          .animation-delay-2000 { animation-delay: 3s; }
        `}
      </style>
    </section>
  );
};

export default Projects;