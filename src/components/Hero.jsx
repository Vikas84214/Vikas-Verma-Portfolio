import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    "Full Stack Software Engineer",
    "GenAI Automation & Data Analyst",
    "Java Developer & Problem Solver"
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const handleType = () => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    };

    const timer = setTimeout(handleType, typingSpeed);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-6 md:p-12 font-sans overflow-hidden transition-colors duration-300">
      
      {/* Background Micro-Interactive Ambient Glow Elements */}
      <div className="absolute w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full filter blur-3xl top-10 left-[-5%] animate-blob pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full filter blur-3xl bottom-10 right-[-5%] animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* Left Layout Column Block: Bio Summary */}
        <div className="w-full md:w-3/5 text-center md:text-left animate-fade-in-down">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100/60 dark:bg-purple-900/30 border border-purple-200/40 dark:border-purple-800/40 rounded-full mb-4 uppercase">
            🚀 Welcome to my portfolio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
              Vikas Verma
            </span>
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-mono mb-6 h-8 flex items-center justify-center md:justify-start">
            <span>I am an&nbsp;</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-blink-cursor">
              {displayText}
            </span>
          </div>

          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 font-medium">
            Aspiring Software Engineer specialized in structural core Java logic, Data Structures, and Algorithms[cite: 1]. Experienced in designing responsive client interfaces and building automated data dashboards using GenAI integrations and Power BI workflows[cite: 1, 2].
          </p>

          {/* Action Call Grid Wrapper */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-purple-600 framework to-indigo-600 rounded-xl shadow-md hover:shadow-[0_8px_20px_rgba(99,102,241,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started <FaArrowRight className="text-sm" />
            </Link>

            <a 
              href="https://drive.google.com/file/d/1UwDRDNgEdUaGxyEUa6kw4XUoIp_yGsSo/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-lg font-medium transition-all"
            >
              View Resume
            </a>

            <a
              href="https://github.com/Vikas84214" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-bold text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-xl shadow-sm hover:bg-gray-800 dark:hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </div>
        </div>

        {/* Right Layout Column Block: Dynamic Profile Image Container */}
        <div className="w-4/5 sm:w-2/3 md:w-2/5 flex justify-center md:justify-end animate-fade-in-right">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] p-2 bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 shadow-2xl transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1">
            
            {/* Ambient decorative glowing back drop layer */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            
            <div className="w-full h-full overflow-hidden rounded-[2.2rem] bg-white dark:bg-gray-800 ring-4 ring-white dark:ring-gray-900">
              <img
                src="C:\Users\vikas\OneDrive\Desktop\New folder\my-portfolio\public\Vikas.jpeg"
                alt="Vikas Verma Profile Showcase"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://acehacker.com/img/codess.png"; 
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Layout CSS Keyframes Styling Matrix */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-right {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(30px, -30px) scale(1.08); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }
          
          .animate-fade-in-down {
            animation: fade-in-down 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-fade-in-right {
            animation: fade-in-right 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.15s;
          }
          .animate-blob {
            animation: blob 8s infinite alternate ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 3s;
          }
          .animate-blink-cursor {
            animation: blink 0.75s step-end infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;