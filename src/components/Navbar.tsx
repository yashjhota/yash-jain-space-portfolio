import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Change from '@/components/Change'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <Change 
        starCount={50}
        connectionDistance={100}
        starSpeed={0.15}
        className="z-[-2] opacity-30"
      />
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 relative',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              YASH JAIN
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary relative',
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-foreground/70'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/yashjjota"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub" className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/yashjjota"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="hover:bg-accent/10 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="mailto:jhotayash@gmail.com"
              aria-label="Email"
            >
              <Button variant="ghost" size="icon" aria-label="Email" className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu" className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-border">
              <div className="absolute inset-0 overflow-hidden">
                <Change 
                  starCount={30}
                  connectionDistance={80}
                  starSpeed={0.1}
                  className="opacity-20"
                />
              </div>
              <nav className="flex flex-col gap-4 mt-8 relative z-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-secondary px-2 py-2 rounded-md relative',
                      location.pathname === link.path
                        ? 'bg-muted text-secondary'
                        : 'text-foreground/70'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-r-full" />
                    )}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4 px-2">
                  <a
                    href="https://github.com/yashjjota"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Button variant="ghost" size="icon" aria-label="GitHub" className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://linkedin.com/in/yashjjota"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Button variant="ghost" size="icon" aria-label="LinkedIn" className="hover:bg-accent/10 hover:text-accent transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="mailto:jhotayash@gmail.com"
                    aria-label="Email"
                  >
                    <Button variant="ghost" size="icon" aria-label="Email" className="hover:bg-secondary/10 hover:text-secondary transition-colors">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}

export default Navbar