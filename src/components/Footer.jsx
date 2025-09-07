import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Rupsha-github"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-yellow-500 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:[box-shadow:0_0_20px_6px_rgba(234,179,8,0.6)] hover:shadow-yellow-500/40"
            >
              <Github size={24} className="group-hover:text-white" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/rupsha-saha-a74391290"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-yellow-500 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:[box-shadow:0_0_20px_6px_rgba(234,179,8,0.6)] hover:shadow-yellow-500/40"
            >
              <Linkedin size={24} className="group-hover:text-white" />
            </a>
            
            <a
              href="mailto:rupshasaha30002@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Rupsha,%0D%0AI%20would%20like%20to%20connect%20with%20you%20regarding..."
              className="group bg-white/10 hover:bg-yellow-500 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:[box-shadow:0_0_20px_6px_rgba(234,179,8,0.6)] hover:shadow-yellow-500/40"
            >
              <Mail size={24} className="group-hover:text-white" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              © 2025 <span className="font-semibold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Rupsha Saha</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Crafted with &#x1F49B; and lots of code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;