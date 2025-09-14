import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  // Add state to track component loading
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate component loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // If component hasn't loaded yet, show minimal placeholder
  if (!isLoaded) {
    return (
      <section className="hero-section min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="container mx-auto z-10 py-12">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="container mx-auto z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-secondary font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading"
              >
                Yash Jain
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-heading bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
              >
                AI/ML Engineer
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg max-w-lg"
            >
              Building the Future with AI and Code
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <a 
                href="https://github.com/yashjhota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yashjjota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:jhotayash@gmail.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border border-accent/30"></div>
              <div className="absolute inset-8 rounded-full bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-mono text-sm mb-2 text-muted-foreground">{'<code>'}</div>
                  <div className="font-heading text-xl font-bold mb-4">AI/ML Engineer</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-secondary"></span>
                      <span>Machine Learning</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                      <span>Deep Learning</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-secondary"></span>
                      <span>GenAI</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>
                      <span>Data Engineering</span>
                    </div>
                  </div>
                  <div className="font-mono text-sm mt-2 text-muted-foreground">{'</code>'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection