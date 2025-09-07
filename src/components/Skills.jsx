import React from 'react';


const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/html-5.png" alt="html-5"/>
    },
    {
      name: "CSS",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/css3.png" alt="css3"/>
    },
    {
      name: "Tailwind CSS",
      icon: <img width="80" height="80" src="https://img.icons8.com/fluency/96/tailwind_css.png" alt="tailwind_css"/>
    },
    {
      name: "Bootstrap",
      icon: <img width="80" height="80" src="https://img.icons8.com/color-glass/96/bootstrap.png" alt="bootstrap"/>
    },
    
    {
      name: "JavaScript",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    },
    {
      name: "React",
      icon: <img width="80" height="80" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
    },
    {
      name: "Node.js",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
    },
    {
      name: "Express.js",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
    },
    {
      name: "MongoDB",
      icon: <img width="80" height="80" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo"/>
    },
    {
      name: "MySQL",
      icon: <img width="80" height="80" src="https://img.icons8.com/fluency/96/mysql-logo.png" alt="mysql-logo"/>
    },    
    {
      name: "Java",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
    },
    {
      name: "Python",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/python.png" alt="python"/>
    },
    {
      name: "C++",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
    },
    {
      name: "C",
      icon: <img width="80" height="80" src="https://img.icons8.com/color/96/c-programming.png" alt="c-programming"/>
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 border border-yellow-200/50 dark:border-gray-700/50 hover:border-yellow-400 dark:hover:border-yellow-400"
              style={{
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  <div className="flex justify-center">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                  {skill.name}
                </h3>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  padding: '2px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;