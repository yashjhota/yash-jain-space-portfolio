import { useEffect } from 'react'
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 max-w-md">
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
      <div className="min-h-screen text-foreground relative">
        <div className="relative z-10">
          <Navbar />
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <HeroSection />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <AboutSection />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <ProjectsSection />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <SkillsSection />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <PublicationsSection />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
              <ContactSection />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Home