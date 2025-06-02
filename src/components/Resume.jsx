import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, Star, Award, Code, Briefcase } from 'lucide-react'

const Resume = () => {
  const resumeHighlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Java, Spring Boot, Microservices, API Development"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certifications",
      description: "HackerRank certified in Java, SQL, and Problem Solving"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "8.3 GPA in Computer Science Engineering"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Project Experience",
      description: "Multiple production-ready backend systems"
    }
  ]

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    // For now, we'll create a placeholder action
    const link = document.createElement('a')
    link.href = '/resume.pdf' // This should point to your actual resume file
    link.download = 'Mrityunjay_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewResume = () => {
    // Open resume in new tab for viewing
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Mrityunjay</h3>
                    <p className="text-blue-100">Backend Developer Resume</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Last Updated</p>
                  <p className="font-semibold">December 2024</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Resume Highlights */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                      <span className="text-primary-600 dark:text-primary-400">
                        {highlight.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Resume Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl mb-8"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What's Inside My Resume
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Professional Summary</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Technical Skills</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Project Experience</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Education Details</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Certifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Contact Information</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="inline-flex items-center justify-center space-x-2 btn-primary text-lg px-8 py-3"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewResume}
                  className="inline-flex items-center justify-center space-x-2 btn-secondary text-lg px-8 py-3"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Online</span>
                </motion.button>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Resume is available in PDF format • Last updated December 2024
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                  For any questions about my experience, feel free to reach out via the contact section
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { number: "8.3", label: "GPA", sublabel: "Academic Excellence" },
              { number: "3+", label: "Projects", sublabel: "Production Ready" },
              { number: "19th", label: "National Rank", sublabel: "Oxyopia Competition" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
