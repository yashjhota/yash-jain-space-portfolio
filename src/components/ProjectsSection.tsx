import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Brain, ExternalLink, Github, Kaggle, MessageSquare, Scan } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  date: string
  tags: string[]
  link: string
  githubLink?: string
  liveLink?: string
  isLoading?: boolean
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate data loading with proper error handling
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // Simulate API call delay - reduced for better UX
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const projectData: Project[] = [
          {
            id: "poof40",
            title: "Poof40 - Real-Time Vanishing Chat App",
            description: "Self-expiring chat system using AI-assisted development and prompt engineering, leveraging Supabase Realtime API and Using-GSQL triggers for message deletion.",
            icon: <MessageSquare className="h-10 w-10 text-secondary" />,
            date: "April 2025",
            tags: ["AI-Assisted", "Supabase", "Real-time", "GSQL"],
            link: "/projects",
            githubLink: "https://github.com/yashjhota/Poof40Chatapp",
            liveLink: "https://jhotapoof40.netlify.app/"
          },
          {
            id: "fras",
            title: "FRAS: Face Recognition Attendance System",
            description: "System that reduced manual attendance efforts by 80% using face recognition technology with feature extraction methods (LBP, PCA) to achieve 95% accuracy.",
            icon: <Scan className="h-10 w-10 text-accent" />,
            date: "Aug 2024",
            tags: ["Face Recognition", "LBP", "PCA", "Excel Integration"],
            link: "/projects",
            githubLink: "https://github.com/yashjjota/fras"
          },
          {
            id: "brainscannet",
            title: "BrainScanNet: Brain Tumor Classification",
            description: "Brain tumor classification system using EfficientNetB2 and custom MRI preprocessing, achieving 99.84% accuracy across 3 public MRI datasets.",
            icon: <Brain className="h-10 w-10 text-secondary" />,
            date: "July 2024",
            tags: ["EfficientNetB2", "MRI", "Transfer Learning", "Grad-CAM"],
            link: "/projects",
            githubLink: "https://github.com/yashjjota/brainscannet"
          }
        ]
        
        setProjects(projectData)
      } catch (err) {
        setError('Failed to load projects. Please try again later.')
        console.error('Error loading projects:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  const handleRetry = () => {
    setProjects([])
    setError(null)
    // Trigger reload
    window.location.reload()
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold font-heading mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={handleRetry} variant="outline">
                Try Again
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

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
          <h2 className="text-3xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects showcasing my skills in AI, Machine Learning, and Software Development.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card animate-pulse">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-muted rounded mb-2"></div>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-20"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map((tagIndex) => (
                        <div key={tagIndex} className="h-6 bg-muted rounded w-16"></div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-10 bg-muted rounded w-full"></div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card hover:shadow-md transition-all duration-300 hover:border-secondary/50 overflow-hidden group">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="mb-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.div>
                    <CardTitle className="font-heading">{project.title}</CardTitle>
                    <CardDescription className="text-xs">{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="default" size="sm" className="w-full gap-2">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a 
                        href={project.title === "BrainScanNet: Enhanced Brain Tumor Classification" ? "https://www.kaggle.com/code/yashjhotajain/brain-tumor-detection-comparative-study-of-models" : project.title === "FRAS: Face Recognition Attendance System" ? "https://github.com/yashjhota/Facial_Attendance_System" : project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          {project.title === "BrainScanNet: Enhanced Brain Tumor Classification" ? "Kaggle" : "GitHub"} {project.title === "BrainScanNet: Enhanced Brain Tumor Classification" ? <Kaggle className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                        </Button>
                      </motion.a>
                    )}
                    {!project.liveLink && !project.githubLink && (
                      <Link to={project.link} className="w-full">
                        <Button variant="ghost" className="w-full justify-start group-hover:text-secondary transition-colors">
                          View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection