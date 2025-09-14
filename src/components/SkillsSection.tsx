import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Java", level: 75 },
    { name: "C++", level: 70 },
    { name: "GenAI", level: 80 },
    { name: "Data Engineering", level: 75 }
  ]

  const tools = [
    "VS Code", "Eclipse", "Google Cloud Platform", "PowerBI", 
    "MongoDB", "MySQL", "Linux", "GitHub", "LangChain", 
    "HuggingFace", "FastAPI"
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in various programming languages, frameworks, and tools for AI/ML development and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6">Programming & Technologies</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" 
                    indicatorClassName={`bg-gradient-to-r from-secondary to-accent`} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold font-heading mb-6">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-muted rounded-md text-sm font-medium border border-border hover:border-secondary/50 transition-colors"
                >
                  {tool}
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold font-heading mb-6">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-secondary mr-3"></div>
                  <div>
                    <p className="font-medium">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</p>
                    <p className="text-sm text-muted-foreground">Aug 2025 | Online</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-accent mr-3"></div>
                  <div>
                    <p className="font-medium">Ubuntu Linux Professional Certificate by Canonical</p>
                    <p className="text-sm text-muted-foreground">March 2025 | Canonical</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 mt-2 rounded-full bg-secondary mr-3"></div>
                  <div>
                    <p className="font-medium">Google Data Analytics Professional Certificate</p>
                    <p className="text-sm text-muted-foreground">Feb 2025 | Coursera, Online</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection