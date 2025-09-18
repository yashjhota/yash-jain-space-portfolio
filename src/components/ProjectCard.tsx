import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  image?: string
  demoLink?: string
  liveLink?: string
  githubLink?: string
  icon?: React.ReactNode
}

const ProjectCard = ({
  title,
  description,
  date,
  tags,
  image,
  demoLink,
  liveLink,
  githubLink,
  icon
}: ProjectCardProps) => {
  // Determine the correct links based on project title
  const getProjectLinks = () => {
    if (title === "Poof40 - Real-Time Vanishing Chat App") {
      return {
        github: "https://github.com/yashjhota/Poof40Chatapp",
        live: "https://jhotapoof40.netlify.app/"
      }
    }
    if (title === "FRAS: Face Recognition Attendance System") {
      return {
        github: "https://github.com/yashjhota/Facial_Attendance_System",
        live: liveLink || demoLink
      }
    }
    if (title === "BrainScanNet: Brain Tumor Classification" || 
        title === "BrainScanNet: Enhanced Brain Tumor Classification") {
      return {
        github: "https://github.com/yashjjota/brainscannet",
        live: liveLink || demoLink
      }
    }
    return {
      github: githubLink,
      live: liveLink || demoLink
    }
  }

  const { github, live } = getProjectLinks()

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-secondary/50 overflow-hidden group">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <motion.img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        )}
        <CardHeader className="pb-4">
          {icon && (
            <motion.div 
              className="mb-2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
          )}
          <CardTitle className="font-heading text-lg leading-tight">{title}</CardTitle>
          <CardDescription className="text-xs font-medium">{date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-secondary/10 text-secondary hover:bg-secondary/20 text-xs"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 pt-4">
          {live && (
            <motion.a 
              href={title === "BrainScanNet: Enhanced Brain Tumor Classification" ? "https://www.kaggle.com/code/yashjhotajain/brain-tumor-detection-comparative-study-of-models" : live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="default" size="sm" className="w-full gap-2 text-xs">
                {title === "BrainScanNet: Enhanced Brain Tumor Classification" ? "Kaggle" : "Live Demo"} <ExternalLink className="h-3 w-3" />
              </Button>
            </motion.a>
          )}
          {github && (
            
          )}
          {!live && !github && (
            <motion.div 
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="ghost" size="sm" className="w-full text-xs" disabled>
                Coming Soon
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default ProjectCard