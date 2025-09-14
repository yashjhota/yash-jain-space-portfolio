import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProjectCard from '@/components/ProjectCard'
import { Brain, MessageSquare, Scan } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  icon: React.ReactNode
  githubLink?: string
  liveLink?: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Projects | Yash Jain Portfolio'
  }, [])

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const projectData: Project[] = [
          {
            id: "poof40",
            title: "Poof40 - Real-Time Vanishing Chat App",
            description: "Designed self-expiring chat system using AI-assisted development and prompt engineering, leveraging Supabase Realtime API and Using-GSQL triggers for message deletion. Focused on logic and system flow using no-code/low-code UI tools guided by AI prompts; deployed the app via Netlify with CI/CD integration.",
            date: "April 2025",
            tags: ["AI-Assisted", "Supabase", "Real-time", "GSQL", "Netlify", "CI/CD"],
            icon: <MessageSquare className="h-10 w-10 text-secondary" />,
            githubLink: "https://github.com/yashjhota/Poof40Chatapp",
            liveLink: "https://jhotapoof40.netlify.app/"
          },
          {
            id: "fras",
            title: "FRAS: Face Recognition Attendance System",
            description: "Built system that reduced manual attendance efforts by 80% using face recognition technology. Implemented feature extraction methods (LBP, PCA) to achieve 95% accuracy; Deployed Excel-integrated tracking, automating attendance data storage and validation.",
            date: "Aug 2024",
            tags: ["Face Recognition", "LBP", "PCA", "Excel Integration", "Python", "OpenCV"],
            icon: <Scan className="h-10 w-10 text-accent" />,
            githubLink: "https://github.com/yashjjota/fras"
          },
          {
            id: "brainscannet",
            title: "BrainScanNet: Enhanced Brain Tumor Classification",
            description: "Led team to develop brain tumor classification system using EfficientNetB2 and custom MRI preprocessing (homomorphic filtering, contrast enhancement, cropping), achieving 99.84% accuracy across 3 public MRI datasets. Applied image augmentation, transfer learning, Grad-CAM explainability, threshold tuning, and evaluated via confusion matrix and F1-score.",
            date: "July 2024",
            tags: ["EfficientNetB2", "MRI", "Transfer Learning", "Grad-CAM", "Deep Learning", "TensorFlow"],
            icon: <Brain className="h-10 w-10 text-secondary" />,
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
    setIsLoading(true)
    // Trigger reload of projects
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader 
          title="Projects" 
          description="Explore my portfolio of AI/ML and software development projects showcasing my technical skills and problem-solving abilities."
        />
        
        <section className="py-16">
          <div className="container mx-auto">
            {error ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-md mx-auto">
                  <h3 className="text-lg font-semibold mb-4">Unable to Load Projects</h3>
                  <p className="text-destructive mb-6">{error}</p>
                  <Button onClick={handleRetry} variant="outline">
                    Retry Loading
                  </Button>
                </div>
              </motion.div>
            ) : isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 animate-pulse"
                  >
                    <div className="w-10 h-10 bg-muted rounded mb-4"></div>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-20 mb-4"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[1, 2, 3, 4].map((tagIndex) => (
                        <div key={tagIndex} className="h-6 bg-muted rounded w-16"></div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-muted rounded flex-1"></div>
                      <div className="h-8 bg-muted rounded flex-1"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : projects.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => {
                  // Update GitHub link for FRAS project
                  const updatedProject = project.title === "FRAS: Face Recognition Attendance System" 
                    ? { ...project, githubLink: "https://github.com/yashjhota/Facial_Attendance_System" }
                    : project;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={updatedProject.title}
                        description={updatedProject.description}
                        date={updatedProject.date}
                        tags={updatedProject.tags}
                        icon={updatedProject.icon}
                        githubLink={updatedProject.githubLink}
                        liveLink={updatedProject.liveLink}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <h3 className="text-lg font-semibold mb-4">No Projects Found</h3>
                <p className="text-muted-foreground mb-6">
                  Projects are currently being loaded. Please check back later.
                </p>
                <Button onClick={handleRetry} variant="outline">
                  Refresh Page
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projects