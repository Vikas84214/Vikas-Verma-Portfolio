import React, { useEffect, useState } from "react";

// ===== ICONS =====
const icons = {
  Trophy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 9v14l6-4 6 4V9M10 11V5a2 2 0 1 1 4 0v6"></path>
    </svg>
  ),
  Certificate: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  ),
  Medal: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  Briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  Users: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
};

// ===== DATA MAPPED FROM YOUR PORTFOLIO PROFILE =====
const achievements = [
  { 
    id: 1, 
    title: "Official Hackathon Recognition", 
    org: "IIT Guwahati, IIT Ropar, & STPI", 
    date: "2024 - 2025", 
    type: "Innovation", 
    icon: "Trophy" 
  },
  { 
    id: 2, 
    title: "Global Coding Merit Certificate", 
    org: "Unstop", 
    date: "2025", 
    type: "Competitive Programming", 
    icon: "Medal" 
  },
  { 
    id: 3, 
    title: "AWS Academy Graduate - Cloud Foundations", 
    org: "Amazon Web Services (AWS)", 
    date: "Jun 2026", 
    type: "Cloud Infrastructure", 
    icon: "Certificate" 
  },
  { 
    id: 4, 
    title: "Technical Team Captain", 
    org: "State & National Hackathons", 
    date: "Ongoing", 
    type: "Leadership", 
    icon: "Users" 
  },
  { 
    id: 5, 
    title: "Database Programming & Design", 
    org: "Oracle", 
    date: "2025", 
    type: "Database Architecture", 
    icon: "Certificate" 
  },
  { 
    id: 6, 
    title: "Full-Stack Development Excellence", 
    org: "Digital Blink / AICTE Industry", 
    date: "Oct 2025 – Jan 2026", 
    type: "Professional Experience", 
    icon: "Briefcase" 
  },
];

const Achievements = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);
};

export default Achievements;