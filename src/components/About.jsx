import React from "react";
import { 
  FaLightbulb, 
  FaGraduationCap, 
  FaProjectDiagram, 
  FaTrophy, 
  FaLaptopCode, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const milestones = [
    {
      title: "Foundations in Tech & AI",
      description:
        "Began my B.Tech journey at Galgotias College of Engineering and Technology, establishing an extensive baseline in Data Structures, Algorithms, Object-Oriented Programming, and Core Java.",
      icon: <FaGraduationCap className="text-white w-5 h-5" />,
    },
    {
      title: "GenAI Automation & Data Analytics",
      description:
        "Dived into advanced spaces, mastering structural relationships in Power BI at an IIT Guwahati workshop and actively prototyping autonomous workflows using OpenAI APIs.",
      icon: <FaLightbulb className="text-white w-5 h-5" />,
    },
    {
      title: "Full-Stack Development Focus",
      description:
        "Mastered building responsive client interfaces and modular server routing using Java stacks as well as frontend languages like HTML, CSS, and JavaScript.",
      icon: <FaLaptopCode className="text-white w-5 h-5" />,
    },
    {
      title: "Industry Experience",
      description:
        "Completed a 2-month Full Stack Developer internship at Digital Blink alongside an intensive AICTE Java Full Stack Developer program.",
      icon: <FaProjectDiagram className="text-white w-5 h-5" />,
    },
    {
      title: "Hackathons & Recognition",
      description:
        "Competed in over 10 national-level hackathons and earned official certifications from premium institutions like IIT Guwahati, IIT Ropar, AWS Academy, and Oracle.",
      icon: <FaTrophy className="text-white w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 tracking-tight">
          About Me
          <span className="block mt-3 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-sm"></span>
        </h2>
        
        {/* Location Subtitle */}
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-12 font-medium">
          <FaMapMarkerAlt className="text-purple-500 animate-pulse" />
          <span>Greater Noida, Uttar Pradesh, India</span>
        </div>

        {/* Profile + About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Profile Image with Modern Visual Effects */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="group relative w-72 h-72 rounded-3xl p-2 bg-gradient-to-tr from-purple-500 to-blue-500 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-2">
              <div className="w-full h-full overflow-hidden rounded-2xl bg-white ring-4 ring-white backdrop-blur-lg">
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src="public/Vikas.jpeg" 
                    alt="Vikas Verma" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                    Vikas Verma
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 transform hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hi, I'm Vikas Verma 👋
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I am an aspiring <strong>Software Engineer</strong> and <strong>Artificial Intelligence enthusiast</strong> currently pursuing my <strong>B.Tech in Computer Science and Artificial Intelligence</strong> at <strong>Galgotias College of Engineering and Technology</strong>. 
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                With real-world experience building scalable applications during my full-stack roles at <strong>Digital Blink</strong> and <strong>AICTE</strong>, I enjoy translating complex technical logic into responsive web user interfaces and robust server applications.
              </p>

              {/* Quick Contact Inline Info */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-gray-100 text-sm font-medium text-gray-600">
                <a href="mailto:vikas2227031583@gmail.com" className="flex items-center gap-2 hover:text-purple-600 transition-colors group">
                  <FaEnvelope className="text-purple-500 group-hover:scale-110 transition-transform" /> 
                  vikas2227031583@gmail.com
                </a>
                <a href="tel:+918471089518" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                  <FaPhoneAlt className="text-blue-500 group-hover:scale-110 transition-transform" /> 
                  +91 8471089518
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mt-24 relative">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16 relative inline-block left-1/2 transform -translate-x-1/2">
            My Journey
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>

          {/* Core Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-indigo-400 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center opacity-0 animate-fadeIn relative`}
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                {/* Visual Connector Ball for Desktop Layout */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-20 hidden md:block"></div>

                {/* Alternating Layout Content wrapper */}
                <div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:order-2"}`}>
                  <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-md group-hover:rotate-6 transition-transform">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                </div>

                {/* Empty Space Block filler for Desktop Balance grid symmetry */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Quote Banner */}
        <div className="mt-24 text-center max-w-3xl mx-auto px-4">
          <blockquote className="text-xl md:text-2xl italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
            "Technology is not just about writing code — it's about engineering intelligent solutions that build a smarter future."
          </blockquote>
        </div>

        {/* Refined Custom Profile Action Grid Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-5">
          <a
            href="https://github.com/Vikas84214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-200"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/VIKAS9891/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-200"
          >
            <SiLeetcode className="text-lg" /> LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-verma-214bb6366/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-200"
          >
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
          <a
            href="https://www.hackerrank.com/profile/vikas2227031583"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-200"
          >
            <span className="text-base select-none">🏆</span> HackerRank
          </a>
        </div>
      </div>

      {/* Decorative Blur Ambient Vector Blobs */}
      <div className="absolute w-96 h-96 bg-purple-300/30 rounded-full filter blur-3xl top-10 left-[-10%] animate-blob pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl bottom-10 right-[-10%] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute w-64 h-64 bg-pink-200/20 rounded-full filter blur-2xl top-1/2 left-1/3 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Keyframe Styling Injections */}
      <style>
        {`
          .animate-blob {
            animation: blob 10s infinite alternate ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 2.5s;
          }
          .animation-delay-4000 {
            animation-delay: 5s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -60px) scale(1.15); }
            66% { transform: translate(-30px, 40px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
    </section>
  );
};

export default About;