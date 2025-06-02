import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  Monitor, 
  Users,
  Coffee,
  FileCode,
  Globe,
  Layers,
  GitBranch,
  Terminal
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Java", icon: <Coffee className="w-5 h-5" />, level: 95 },
        { name: "SQL", icon: <Database className="w-5 h-5" />, level: 90 },
        { name: "JavaScript", icon: <FileCode className="w-5 h-5" />, level: 85 },
        { name: "Python", icon: <Code className="w-5 h-5" />, level: 80 },
        { name: "C", icon: <Terminal className="w-5 h-5" />, level: 75 }
      ]
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Spring Boot", icon: <Server className="w-5 h-5" />, level: 95 },
        { name: "Jakarta EE", icon: <Globe className="w-5 h-5" />, level: 85 },
        { name: "React.js", icon: <Code className="w-5 h-5" />, level: 80 }
      ]
    },
    {
      title: "Technologies",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Servlets", icon: <Globe className="w-5 h-5" />, level: 90 },
        { name: "JSP", icon: <FileCode className="w-5 h-5" />, level: 85 },
        { name: "JavaFX", icon: <Monitor className="w-5 h-5" />, level: 80 },
        { name: "JDBC", icon: <Database className="w-5 h-5" />, level: 90 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "MySQL", icon: <Database className="w-5 h-5" />, level: 90 },
        { name: "SQLite", icon: <Database className="w-5 h-5" />, level: 85 },
        { name: "Maven", icon: <Wrench className="w-5 h-5" />, level: 85 },
        { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: 90 },
        { name: "Eclipse", icon: <Monitor className="w-5 h-5" />, level: 90 },
        { name: "IntelliJ", icon: <Monitor className="w-5 h-5" />, level: 95 },
        { name: "VSCode", icon: <Monitor className="w-5 h-5" />, level: 85 }
      ]
    }
  ]

  const softSkills = [
    { name: "Leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Strategic Problem-Solving", icon: <Code className="w-5 h-5" /> },
    { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
    { name: "Communication", icon: <Globe className="w-5 h-5" /> }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building robust backend solutions
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Essential interpersonal skills that complement technical expertise
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
              >
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <span className="text-primary-600 dark:text-primary-400">
                    {skill.icon}
                  </span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
