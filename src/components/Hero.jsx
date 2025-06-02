import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-200 dark:text-gray-700"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Small accent elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-4 h-4 bg-primary-400 rounded-full opacity-60"
        ></motion.div>
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 right-32 w-8 h-8 bg-indigo-400 rounded-full opacity-30"
        ></motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/30"></div>

      {/* Main Content */}
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mx-auto mb-8"
          >
            <div className="relative">
              {/* Animated ring around profile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-indigo-500 p-1 opacity-80"
              ></motion.div>
              
              <div className="relative w-52 h-52 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden shadow-inner">
                  <img
                    src="/profile.jpg"
                    alt="Mrityunjay Profile"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 hover:scale-110"
                    style={{
                      imageRendering: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name with enhanced styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          >
            Mrityunjay
          </motion.h1>

          {/* Enhanced Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Backend Engineer | Microservices | Java + Spring Boot
          </motion.h2>

          {/* Description with better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Passionate backend engineer with hands-on experience in building robust Java Spring Boot applications, 
            APIs, and microservices. I love crafting scalable solutions and turning complex problems into elegant code.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/mannk26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://linkedin.com/in/man-s-8757a5204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:mrityunjayeng720@gmail.com"
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('#about')}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ArrowDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
