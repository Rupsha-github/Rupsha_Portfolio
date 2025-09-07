import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_dun6x2a',    // Replace with your EmailJS service ID
        'template_j3o1xin',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Rupsha Saha',
        },
        'zAQsHNP-T8oLH2k41'     // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-amber-50/50 to-yellow-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Contact <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-yellow-200/50 dark:border-gray-700/50">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                  <Mail className="text-yellow-600 dark:text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">rupshasaha3002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-yellow-200/50 dark:border-gray-700/50">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                  <MapPin className="text-yellow-600 dark:text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-yellow-200/50 dark:border-gray-700/50">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                  <Phone className="text-yellow-600 dark:text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 86xxx xxx62</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 dark:border-gray-700/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-yellow-400 dark:border-yellow-500 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-yellow-400 dark:border-yellow-500 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-yellow-400 dark:border-yellow-500 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-yellow-400 dark:border-yellow-500 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:scale-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-800 dark:text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;