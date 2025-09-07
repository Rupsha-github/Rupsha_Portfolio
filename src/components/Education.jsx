import React, { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
 const sectionRef = useRef(null);
 const timelineRef = useRef(null);

 const educationData = [
  {
   degree: 'Master of Computer Applications (MCA)',
   institution: 'Jadavpur University',
   duration: 'Sept 2024 - July 2026',
   cgpa: '8.76',
   status: 'Currently Pursuing',
   icon: '🎓'
  },
  {
   degree: 'B.Sc. in Computer Science Honours',
   institution: 'Vivekananda College, Thakurpukur',
   duration: 'Sept 2020 - July 2023',
   cgpa: '8.817',
   status: 'Completed',
   icon: '🖥️'
  },
  {
   degree: 'ISC (Class XII)',
   institution: 'Shaw Public School',
   duration: '2020',
   cgpa: '91.8%',
   status: 'Completed',
   icon: '📚'
  },
  {
   degree: 'ICSE (Class X)',
   institution: 'Shaw Public School',
   duration: '2018',
   cgpa: '95.4%',
   status: 'Completed',
   icon: '🏆'
  }
 ];

 useEffect(() => {
  const handleScroll = () => {
   if (sectionRef.current && timelineRef.current) {
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    
    let progress = 0;
    if (sectionTop < windowHeight && sectionBottom > 0) {
     // More sensitive scroll calculation
     const sectionHeight = rect.height;
     const viewportCenter = windowHeight / 2;
     
     if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
      // Calculate how far we've scrolled through the section
      const scrolledIntoView = viewportCenter - sectionTop;
      const totalScrollDistance = sectionHeight - windowHeight / 2;
      progress = Math.max(0, Math.min(1, scrolledIntoView / totalScrollDistance));
     } else if (sectionBottom < viewportCenter) {
      // Section has been fully scrolled past
      progress = 1;
     }
    }
    
    setScrollProgress(progress);
   }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call
  
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
  <section id="education" ref={sectionRef} className="py-20 px-4 min-h-screen">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
     <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
      My <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Education</span>
     </h2>
     <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      My academic journey
     </p>
    </div>

    <div className="relative" ref={timelineRef}>
     {/* Animated Timeline Line */}
     <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full rounded-full">
      <div 
       className="w-full bg-gradient-to-b from-yellow-500 to-amber-500 rounded-full transition-all duration-300 ease-out"
       style={{
        height: `${scrollProgress * 100}%`,
       }}
      />
     </div>

     {/* Education Items */}
     <div className="space-y-12">
      {educationData.map((edu, index) => (
       <div
        key={index}
        className={`relative flex items-center ${
         index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex-col md:flex-row`}
        style={{
         opacity: scrollProgress * educationData.length > index ? 1 : 0.4,
         transform: `translateY(${scrollProgress * educationData.length <= index ? '30px' : '0'})`,
         transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
       >
        {/* Timeline Node */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-yellow-500 rounded-full shadow-lg z-10">
         <div className="absolute inset-1 bg-yellow-500 rounded-full animate-pulse" />
        </div>

        {/* Content Card */}
        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} pl-20 md:pl-0`}>
         <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center mb-4">
           <span className="text-3xl mr-3">{edu.icon}</span>
           <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            edu.status === 'Currently Pursuing' 
             ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' 
             : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
           }`}>
           {edu.status}
           </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
           {edu.degree}
          </h3>
          
          <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
           {edu.institution}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
           {edu.duration}
          </p>
          
          <div className="flex items-center">
           <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            {edu.cgpa}
           </span>
           <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
            {edu.degree.includes('Class') ? 'Score' : 'CGPA'}
           </span>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
};

export default Education;