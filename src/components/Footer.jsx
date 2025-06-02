import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mannk26',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/man-s-8757a5204',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:mrityunjayeng720@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">
              Mrityunjay
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Backend Engineer passionate about building robust, scalable applications
              with Java Spring Boot and microservices architecture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <a 
                  href="mailto:mrityunjayeng720@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  mrityunjayeng720@gmail.com
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                <p>Available for:</p>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li>• Full-time opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Technical consultations</li>
                  <li>• Collaboration discussions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Mrityunjay. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and React</span>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-gray-400 text-sm"
            >
              <span>Built with:</span>
              <div className="flex space-x-2">
                {['React', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-800 dark:bg-gray-900 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
