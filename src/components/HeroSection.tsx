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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent"
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
              className="text-lg max-w-lg text-muted-foreground"
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="gap-2 bg-secondary/90 hover:bg-secondary backdrop-blur-sm">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild className="border-secondary/50 hover:border-secondary backdrop-blur-sm">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <motion.a 
                href="https://github.com/yashjhota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yashjjota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="mailto:jhotayash@gmail.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-secondary/30"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <motion.div 
                className="absolute inset-4 rounded-full border border-accent/30"
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <div className="absolute inset-8 rounded-full bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div 
                    className="font-mono text-sm mb-2 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {'<code>'}
                  </motion.div>
                  <motion.div 
                    className="font-heading text-xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    AI/ML Engineer
                  </motion.div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <motion.div 
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                      <span>Machine Learning</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                      <span>Deep Learning</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                      <span>GenAI</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                      <span>Data Engineering</span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="font-mono text-sm mt-2 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    {'</code>'}
                  </motion.div>
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