import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import PublicationsSection from '@/components/PublicationsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SpaceThemed from '@/components/Space-themed'
import { ErrorBoundary } from 'react-error-boundary'

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 max-w-md backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
        <button 
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

const Home = () => {
  useEffect(() => {
    document.title = 'Yash Jain | AI/ML Engineer Portfolio'
  }, [])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <div className="min-h-screen text-foreground relative bg-background">
        <SpaceThemed 
          dotCount={100}
          connectionDistance={150}
          speed={0.3}
          className="fixed inset-0 z-0"
        />
        <div className="relative z-10">
          <Navbar />
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <HeroSection />
              </motion.div>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/10 backdrop-blur-sm"
              >
                <AboutSection />
              </motion.div>
            </ErrorBoundary>
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => window.location.reload()}
              key="projects-section"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ProjectsSection />
              </motion.div>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/10 backdrop-blur-sm"
              >
                <SkillsSection />
              </motion.div>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <PublicationsSection />
              </motion.div>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/10 backdrop-blur-sm"
              >
                <ContactSection />
              </motion.div>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Home