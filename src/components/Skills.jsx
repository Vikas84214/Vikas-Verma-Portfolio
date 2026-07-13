import React from 'react';

const allSkills = [
  { name: 'React.js', textColor: 'text-cyan-500', proficiency: 90 },
  { name: 'Tailwind CSS', textColor: 'text-teal-400', proficiency: 98 },
  { name: 'JavaScript', textColor: 'text-yellow-500', proficiency: 95 },
  { name: 'HTML', textColor: 'text-orange-500', proficiency: 100 },
  { name: 'CSS', textColor: 'text-blue-500', proficiency: 95 },
  { name: 'MERN Stack', textColor: 'text-emerald-500', proficiency: 85 },
  { name: 'Node.js', textColor: 'text-green-600', proficiency: 80 },
  { name: 'Express.js', textColor: 'text-gray-600 dark:text-gray-300', proficiency: 85 },
  { name: 'Python', textColor: 'text-blue-600', proficiency: 90 },
  { name: 'Django', textColor: 'text-green-800', proficiency: 85 },
  { name: 'Flask', textColor: 'text-gray-700 dark:text-gray-400', proficiency: 85 },
  { name: 'Scikit-learn', textColor: 'text-orange-400', proficiency: 95 },
  { name: 'TensorFlow', textColor: 'text-orange-600', proficiency: 85 },
  { name: 'PyTorch', textColor: 'text-red-500', proficiency: 75 },
  { name: 'MongoDB', textColor: 'text-green-500', proficiency: 70 },
  { name: 'PostgreSQL', textColor: 'text-blue-400', proficiency: 75 },
  { name: 'Git & GitHub', textColor: 'text-orange-600', proficiency: 88 },
  { name: 'Docker', textColor: 'text-blue-500', proficiency: 70 },
  { name: 'AWS', textColor: 'text-amber-600', proficiency: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Minimalist Section Title */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-2">
            Expertise Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white text-center mb-4">
            My Technical Skills
          </h2>
          <span className="h-1 w-16 bg-purple-600 rounded-full"></span>
        </div>

        {/* Clean 2-Column Grid Layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {allSkills.map((skill, index) => (
            <div key={index} className="w-full">
              
              {/* Name & Percentage Info Wrapper */}
              <div className="flex justify-between items-end mb-2">
                <span className={`text-base font-semibold ${skill.textColor}`}>
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Track Line Component */}
              <div className="w-full bg-gray-200 dark:bg-gray-800 h-[3px] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;