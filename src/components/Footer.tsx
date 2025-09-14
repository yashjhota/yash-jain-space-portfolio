import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
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
      <footer className="text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-[10vh]">
            <div className="animate-pulse w-full max-w-md h-4 bg-muted rounded"></div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="text-card-foreground py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              YASH JAIN
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              AI/ML Engineer with expertise in Software Development, Machine Learning, 
              Deep Learning, GenAI and Data Engineering.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yashjhota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yashjjota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jhotayash@gmail.com"
                className="text-foreground/70 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:7339615381"
                className="text-foreground/70 hover:text-secondary transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/70 hover:text-secondary transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-foreground/70 hover:text-secondary transition-colors text-sm">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-foreground/70 hover:text-secondary transition-colors text-sm">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>jhotayash@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>7339615381</span>
              </li>
              <li className="text-sm text-foreground/70 mt-2">
                Bangalore, Karnataka
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yash Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer