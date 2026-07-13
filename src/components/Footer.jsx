import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: "https://github.com/Vikas84214", 
      label: "GitHub",
      color: "hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900"
    },
    { 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/vikas-verma-214bb6366/", 
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      icon: <SiLeetcode />, 
      link: "https://leetcode.com/u/VIKAS9891/", 
      label: "LeetCode",
      color: "hover:bg-amber-500 hover:text-white"
    },
    { 
      icon: <SiHackerrank />, 
      link: "https://www.hackerrank.com/profile/vikas2227031583", 
      label: "HackerRank",
      color: "hover:bg-emerald-600 hover:text-white"
    },
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-600 dark:text-gray-400 border-t border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
      
      {/* Dynamic Ambient Background Glow Elements */}
      <div className="absolute w-72 h-72 bg-purple-300/10 dark:bg-purple-900/5 rounded-full filter blur-2xl -top-20 left-1/4 animate-subtle-blob pointer-events-none"></div>
      <div className="absolute w-72 h-72 bg-blue-300/10 dark:bg-blue-900/5 rounded-full filter blur-2xl -bottom-20 right-1/4 animate-subtle-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center space-y-8 relative z-10 animate-fade-in">
        
        {/* Navigation Grid Setup */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base font-semibold tracking-wide uppercase">
          {["Home", "About", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="relative group hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Refined Developer Network Targets */}
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`p-3.5 bg-white/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300 text-xl transform hover:-translate-y-1 hover:shadow-md ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Dynamic Graphic Decorative Divider */}
        <div className="flex items-center justify-center gap-2 max-w-xs mx-auto opacity-60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-400"></div>
        </div>

        {/* Copyright Matrix Footer */}
        <div className="space-y-1 text-sm tracking-wide opacity-90">
          <p className="text-gray-800 dark:text-gray-300">
            &copy; {currentYear} <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Vikas Verma</span>. All rights reserved.[cite: 1]
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
            Engineered with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Local Stylings Architecture */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes subtle-blob {
            0% { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(20px, -20px) scale(1.05); }
          }
          .animate-subtle-blob {
            animation: subtle-blob 8s infinite alternate ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;