import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Server, Shield, Database, Code, Layers, CheckCircle } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "HealthCore Backend System",
      description: "A comprehensive microservices-based healthcare management system built with Spring Boot and gRPC for high-performance inter-service communication.",
      longDescription: "Enterprise-grade healthcare backend featuring microservices architecture, API Gateway with Spring Cloud, Docker containerization, and robust security with Spring Security. Includes comprehensive integration testing and production-ready deployment configurations.",
      technologies: ["Spring Boot", "gRPC", "Spring Cloud", "Docker", "Spring Security", "MySQL", "Maven"],
      features: [
        "Microservices Architecture",
        "API Gateway Integration", 
        "Docker Containerization",
        "Spring Security Implementation",
        "Integration Testing",
        "Production-Ready Deployment"
      ],
      githubUrl: "https://github.com/mannk26",
      liveUrl: null,
      image: "/api/placeholder/600/400",
      status: "Production Ready",
      category: "Backend System"
    },
    {
      title: "PaySecure API",
      description: "Secure payment processing REST API with JWT authentication, role-based access control, and comprehensive financial transaction handling.",
      longDescription: "A robust payment processing system featuring JWT authentication, RBAC, Spring Security with BCrypt encryption, Swagger documentation, clean architecture principles, advanced tax calculation logic, and support for both MySQL and PostgreSQL databases.",
      technologies: ["Spring Boot", "JWT", "Spring Security", "BCrypt", "Swagger", "MySQL", "PostgreSQL"],
      features: [
        "JWT Authentication",
        "Role-Based Access Control",
        "BCrypt Password Encryption",
        "Swagger API Documentation",
        "Clean Architecture",
        "Multi-Database Support"
      ],
      githubUrl: "https://github.com/mannk26/Paysecure-API",
      liveUrl: null,
      image: "/api/placeholder/600/400",
      status: "Active Development",
      category: "API Development"
    },
    {
      title: "Student CRUD System",
      description: "Full-featured student management system with comprehensive CRUD operations, data validation, and robust error handling mechanisms.",
      longDescription: "A complete student management solution built with Spring Boot, MySQL, and JPA. Features full CRUD operations, comprehensive data validation, sophisticated error handling, and a clean, maintainable codebase following best practices.",
      technologies: ["Spring Boot", "MySQL", "JPA", "Hibernate", "Maven", "REST API"],
      features: [
        "Complete CRUD Operations",
        "Data Validation",
        "Error Handling",
        "JPA Integration",
        "RESTful API Design",
        "Clean Code Architecture"
      ],
      githubUrl: "https://github.com/mannk26/Student-Management-System-CRUD-",
      liveUrl: null,
      image: "/api/placeholder/600/400",
      status: "Completed",
      category: "Web Application"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Production Ready":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Active Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "Completed":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Backend System":
        return <Server className="w-4 h-4" />
      case "API Development":
        return <Code className="w-4 h-4" />
      case "Web Application":
        return <Layers className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world applications built with modern backend technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 m-1">
                    <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                      <div className="text-center">
                        <Server className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 btn-primary"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                  
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 btn-secondary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in My Work?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            These projects represent my passion for backend development and clean code. 
            I'm always working on new challenges and would love to discuss potential opportunities.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/mannk26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
