import React, { useState, useEffect } from "react";

// ====== Social Media Icons (Clean Minimal SVG Wrappers) ======
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.47c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.1-1.45c-.9-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.15 2.15 0 0 0 2.92.84 2.15 2.15 0 0 1 .64-1.34c-2.22-.25-4.56-1.12-4.56-5a3.92 3.92 0 0 1 1.05-2.7 3.64 3.64 0 0 1 .1-2.66s.84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03a3.64 3.64 0 0 1 .1 2.66A3.92 3.92 0 0 1 19 11.5c0 3.9-2.34 4.74-4.57 5a2.4 2.4 0 0 1 .68 1.85v2.75c0 .27.18.59.69.48A10 10 0 0 0 12 2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ====== Refined Profile Target Coordinates ======
const socialLinks = [
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/vikas-verma-214bb6366/", label: "LinkedIn" },
  { icon: GitHubIcon, url: "https://github.com/Vikas84214", label: "GitHub" },
];

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const handleHireMeClick = () => {
    window.location.href =
      "mailto:vikas2227031583@gmail.com?subject=Technical%20Opportunity%20-%20Hiring%20Inquiry";
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-purple-50 via-indigo-50/30 to-blue-50 
      font-sans min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Blur Vectors */}
      <div className="absolute w-96 h-96 bg-purple-200/40 rounded-full filter blur-3xl -top-20 -left-20 animate-blob pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-blue-200/40 rounded-full filter blur-3xl -bottom-20 -right-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div
        className={`container mx-auto px-6 max-w-6xl relative z-10 transition-all duration-1000 transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {/* Heading Hierarchy */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 animate-fade-in-down">
            Let's Work Together
          </h2>
          <span className="block h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-sm"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card Module 1: Contact Channels */}
          <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl p-8 lg:p-12 flex flex-col justify-between animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📬</span> Contact Info
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                I am actively pursuing innovative engineering tracks and application development opportunities. Let's start a conversation!
              </p>

              {/* Verified Primary Email Channel */}
              <div className="flex items-center gap-4 text-gray-700 mb-8 p-4 bg-white/60 rounded-2xl border border-gray-100 group hover:border-purple-300 transition-colors duration-300">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                  <EmailIcon />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Me</span>
                  <a
                    href="mailto:vikas2227031583@gmail.com"
                    className="text-base md:text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors truncate"
                  >
                    vikas2227031583@gmail.com[cite: 2]
                  </a>
                </div>
              </div>
            </div>

            {/* Social Network Array Block */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Connect on Platforms</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3.5 bg-white border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card Module 2: Professional Action Channel */}
          <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl p-8 lg:p-12 text-center flex flex-col justify-center items-center animate-slide-in-right hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner animate-pulse">
              💼
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Looking for a Developer?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-sm leading-relaxed">
              Open to talk about full-stack engineering, interface designing, or automated cloud systems.
            </p>
            <button
              onClick={handleHireMeClick}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
              text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)]
              hover:scale-[1.03] active:scale-[0.98] transform transition-all duration-300 cursor-pointer"
            >
              Get In Touch Directly
            </button>
          </div>

        </div>
      </div>

      {/* Styled Micro-Animations Engine */}
      <style>
        {`
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(40px, -40px) scale(1.1); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-slide-in-left { animation: slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-slide-in-right { animation: slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          
          .animate-blob { animation: blob 10s infinite alternate ease-in-out; }
          .animation-delay-2000 { animation-delay: 3s; }
        `}
      </style>
    </section>
  );
};

export default Contact;