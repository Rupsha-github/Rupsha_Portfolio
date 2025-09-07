import React, { useState, useEffect, useRef } from 'react';
import profilePic from '/src/assets/photo.jpg';

const AboutMe = () => {
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [showRole, setShowRole] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const fullName = 'Rupsha Saha';
  const fullRole = 'I am a full stack developer';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let nameIndex = 0;
    const nameTyping = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameTyping);
        setShowRole(true);
      }
    }, 100);

    return () => clearInterval(nameTyping);
  }, [isVisible]);

  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!showRole) return;

    const phrases = ['I am a full stack developer', 'I am a programmer'];

    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        const currentPhrase = phrases[phraseIndexRef.current];
        const currentCharIndex = charIndexRef.current;

        if (currentCharIndex <= currentPhrase.length) {
          setRoleText(currentPhrase.slice(0, currentCharIndex));
          charIndexRef.current += 1;
        } else {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
            charIndexRef.current = 0;
            setRoleText('');
            startTyping(); // Start next phrase
          }, 1500);
        }
      }, 80);
    };

    startTyping();

    return () => {
      clearInterval(intervalRef.current); // Cleanup on unmount or re-render
    };
  }, [showRole]);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full relative">
              {/* Rotating border with comet effect */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-transparent bg-clip-border relative">
                  {/* Glowing comet head */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/80 animate-pulse"></div>
                </div>
              </div>
              {/* Static image container */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700 p-4">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full shadow-2xl shadow-yellow-400/30 dark:shadow-yellow-400/20 pointer-events-none"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Rupsha Saha
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium min-h-[3rem]">
              <span>{roleText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
            <p>
              With expertise spanning both frontend and backend technologies, I enjoy building 
              comprehensive applications that deliver exceptional user experiences.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;