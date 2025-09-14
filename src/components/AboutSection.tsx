import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Database, Code, Cpu } from 'lucide-react'
import { useState, useEffect } from 'react'

const AboutSection = () => {
  // Add state to track component loading
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate component loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    {
      icon: <Brain className="h-6 w-6 text-secondary" />,
      title: "Machine Learning",
      description: "Experience with supervised and unsupervised learning algorithms, model evaluation, and deployment."
    },
    {
      icon: <Cpu className="h-6 w-6 text-accent" />,
      title: "Deep Learning",
      description: "Proficient in neural networks, CNNs, RNNs, and transfer learning techniques."
    },
    {
      icon: <Code className="h-6 w-6 text-secondary" />,
      title: "Software Development",
      description: "Strong foundation in Python, C++, SQL, Java and Cloud Technologies."
    },
    {
      icon: <Database className="h-6 w-6 text-accent" />,
      title: "Data Engineering",
      description: "Experience in data pipelines, ETL workflows, and database optimization."
    }
  ]

  // If component hasn't loaded yet, show minimal placeholder
  if (!isLoaded) {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-[20vh]">
            <div className="animate-pulse w-full max-w-2xl h-8 bg-muted/20 rounded backdrop-blur-sm"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dynamic and passionate Computer Science graduate with strong foundation in Software Development, 
            Machine Learning, Deep Learning, GenAI and Data Engineering. Experience designing high-quality, 
            efficient, and scalable software solutions in fast-paced environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:border-secondary/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="p-3 rounded-full bg-muted/50 backdrop-blur-sm mb-4"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/50"
          >
            <h3 className="text-2xl font-bold font-heading mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Education</h3>
            <ul className="space-y-4">
              <motion.li 
                className="border-l-2 border-secondary pl-4 py-1"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="font-medium">Jain University</p>
                <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science</p>
                <p className="text-xs text-muted-foreground">Sep 2022 - Present | Bangalore, Karnataka</p>
              </motion.li>
              <motion.li 
                className="border-l-2 border-accent pl-4 py-1"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="font-medium">Guhan School</p>
                <p className="text-sm text-muted-foreground">Higher Secondary in Computer Science</p>
                <p className="text-xs text-muted-foreground">Apr 2021 - May 2022 | Madurai, Tamil Nadu</p>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/50"
          >
            <h3 className="text-2xl font-bold font-heading mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Experience</h3>
            <ul className="space-y-4">
              <motion.li 
                className="border-l-2 border-secondary pl-4 py-1"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="font-medium">UptoSkills</p>
                <p className="text-sm text-muted-foreground">Data Analyst Intern</p>
                <p className="text-xs text-muted-foreground">Jan 2025 - April 2025 | Remote</p>
              </motion.li>
              <motion.li 
                className="border-l-2 border-accent pl-4 py-1"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="font-medium">HubbleMind Pvt Ltd</p>
                <p className="text-sm text-muted-foreground">SQL Intern</p>
                <p className="text-xs text-muted-foreground">Oct 2024 - Nov 2024 | Remote</p>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection