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
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom text-center">
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
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 shadow-inner relative group">
                <img
                  src="/profile-photo.jpg"
                  alt="Mrityunjay - Backend Engineer"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to initial design if image doesn't exist
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">M</span>
                </div>
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            Mrityunjay
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-gradient"
          >
            Backend Developer | Microservices | Java + Spring Boot Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate backend engineer with hands-on experience in building robust Java Spring Boot applications, 
            APIs, and microservices. I love crafting scalable solutions and turning complex problems into elegant code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
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
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://linkedin.com/in/man-s-8757a5204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:mrityunjayeng720@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
