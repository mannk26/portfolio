import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy, Star } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "National Ranking",
      description: "Ranked 19th nationally in All-India Proficiency Oxyopia",
      highlight: "Top 20 Nationally"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "HackerRank Certified",
      description: "Certified in Java, SQL, and Problem Solving",
      highlight: "Triple Certified"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      title: "Academic Excellence",
      description: "B.E. in Computer Science with 8.3 GPA",
      highlight: "8.3 GPA"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driven by passion for backend development and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col items-center space-y-6"
          >
            {/* Professional Profile Photo */}
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-500 via-purple-500 to-indigo-600 p-1 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-inner relative group">
                  <img
                    src="/profile-photo-professional.jpg"
                    alt="Mrityunjay - Professional Backend Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient background if image doesn't exist
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">M</div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">Professional Photo</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Add your photo as<br/>/public/profile-photo-professional.jpg</p>
                    </div>
                  </div>
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl w-full max-w-sm"
            >
              <div className="text-center space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gradient">8.3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">19th</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">National Rank</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Backend Specialist</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Java • Spring Boot • Microservices</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              My Journey in Software Development
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate backend developer with a strong foundation in Computer Science from 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Gurukul Kangri Vishwavidyalaya</span>, 
              where I graduated with an impressive 8.3 GPA.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise lies in building robust, scalable backend systems using 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Java and Spring Boot</span>. 
              I specialize in microservices architecture, RESTful APIs, and database design, 
              always focusing on clean code and best practices.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What drives me is the challenge of solving complex problems and the satisfaction 
              of seeing well-architected systems come to life. I believe in continuous learning 
              and staying updated with the latest technologies in the backend development ecosystem.
            </p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-3">
                <GraduationCap className="w-6 h-6 text-primary-600" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Bachelor of Engineering</span> in Computer Science
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Gurukul Kangri Vishwavidyalaya • GPA: 8.3/10
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                          {achievement.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-primary-600" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Core Strengths</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Java & Spring Boot', 'Microservices', 'API Development', 'Problem Solving'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
