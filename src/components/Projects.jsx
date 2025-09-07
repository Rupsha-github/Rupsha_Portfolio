import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import WhatsUp from '/src/assets/WhatsUp.png';
import DormQuest from '/src/assets/DormQuest.png';
import ChoreStack from '/src/assets/ChoreStack.png';
import Resumind from '/src/assets/Resumind.png';
import SimonSays from '/src/assets/SimonSays.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: 'DormQuest - Dorm finding Web Application',
      description: 'A full-stack website for users to find dorms in specific cities and even lets them add their own dorms',
      techStack: ['JavaScript', 'MongoDB', 'Bootstrap', 'Cloudinary', 'Passport.js'],
      image: DormQuest,
      liveUrl: 'https://dormquest-find-your-space.onrender.com/listings',
    },
    {
      title: 'WhatsUp - Video Call Web Application',
      description: 'A full-stack video call website with screen sharing and chatting area features during video call',
      techStack: ['React', 'MongoDB', 'WebRTC', 'Socket.io'],
      image: WhatsUp,
      liveUrl: 'https://whatsup-frontend-mf9p.onrender.com/',
    },
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'A full-stack e-commerce solution with payment integration',
    //   techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   liveUrl: 'https://example.com/ecommerce',
    // },
    {
      title: 'ChoreStack - Task Management Application ',
      description: 'A full-stack productivity app with task editing, priority tagging, deadlines and motivating analytics dashboard features',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: ChoreStack,
      liveUrl: 'https://chorestack-frontend.onrender.com/',
    },
    {
      title: 'Resumind - AI Resume Analyzer ',
      description: 'A resume analysis tool that tracks submissions and delivers AI-powered feedback with ratings and suggestions for improvement',
      techStack: ['React Router v7', 'Puter.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      image: Resumind,
      liveUrl: 'https://ai-resume-analyzer-plum.vercel.app/',
    },
    {
      title: 'Simon Says Game',
      description: 'A memory sharpening game',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: SimonSays,
      liveUrl: 'https://simon-says-game-murex-five.vercel.app/',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Beautiful weather app with location-based forecasts',
    //   techStack: ['JavaScript', 'CSS', 'Weather API'],
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   liveUrl: 'https://example.com/weather',
    // },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Dashboard for tracking social media performance',
    //   techStack: ['Python', 'React', 'MySQL', 'Chart.js'],
    //   image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   liveUrl: 'https://example.com/analytics',
    // },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextProject, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-yellow-50/50 to-amber-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Project Slider */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative cursor-pointer group"
                  onClick={() => handleProjectClick(project.liveUrl)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 md:h-[540px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/60 transition-all duration-300">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 
                      opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg mb-6 text-center max-w-md">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-yellow-400">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full text-sm border border-yellow-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Live Link Button */}
                      <div>
                        <div className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                          <ExternalLink size={20} />
                          <span>View Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-800 dark:text-white" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-800 dark:text-white" />
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-yellow-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-yellow-300 dark:hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;