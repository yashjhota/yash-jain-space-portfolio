import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

// Enhanced error fallback component with better UX
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen flex items-center justify-center p-4 bg-background"
    >
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 max-w-md backdrop-blur-sm">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-destructive">Section Error</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {error.message || 'A component failed to load properly. This might be a temporary issue.'}
          </p>
          <div className="flex gap-2">
            <button 
              onClick={resetErrorBoundary}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Retry
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm"
            >
              Refresh
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Enhanced loading component for sections
const SectionLoader = ({ message = "Loading..." }: { message?: string }) => (
  <div className="flex justify-center items-center py-20">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-8 w-8 border border-primary opacity-20"></div>
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
    </div>
  </div>
)

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    about: false,
    projects: false,
    skills: false,
    publications: false,
    contact: false
  });
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Enhanced document setup with comprehensive meta tags
    document.title = 'Yash Jain | AI/ML Engineer Portfolio'
    
    // Add comprehensive meta tags for better deployment compatibility and SEO
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const addPropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Essential meta tags
    addMetaTag('description', 'Yash Jain - AI/ML Engineer Portfolio showcasing innovative projects, research publications, and expertise in artificial intelligence and machine learning.');
    addMetaTag('keywords', 'AI, ML, Machine Learning, Artificial Intelligence, Portfolio, Yash Jain, Engineer, Projects, Publications, Deep Learning, Data Science, GenAI');
    addMetaTag('author', 'Yash Jain');
    addMetaTag('robots', 'index, follow');
    addMetaTag('theme-color', '#3b82f6');
    addMetaTag('msapplication-TileColor', '#3b82f6');

    // Open Graph tags for better social sharing
    addPropertyTag('og:title', 'Yash Jain | AI/ML Engineer Portfolio');
    addPropertyTag('og:description', 'Explore innovative AI/ML projects and research by Yash Jain');
    addPropertyTag('og:type', 'website');
    addPropertyTag('og:url', window.location.href);
    addPropertyTag('og:site_name', 'Yash Jain Portfolio');
    addPropertyTag('og:locale', 'en_US');

    // Twitter Card tags
    addMetaTag('twitter:card', 'summary_large_image');
    addMetaTag('twitter:title', 'Yash Jain | AI/ML Engineer Portfolio');
    addMetaTag('twitter:description', 'Explore innovative AI/ML projects and research by Yash Jain');
    addMetaTag('twitter:creator', '@yashjjota');

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yash Jain",
      "jobTitle": "AI/ML Engineer",
      "description": "AI/ML Engineer specializing in machine learning, deep learning, and generative AI",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/yashjhota",
        "https://linkedin.com/in/yashjjota"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    // Initialize loading sequence with progress tracking
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      setLoadingProgress(100);
    }, 100);

    // Simulate progressive loading
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 50);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const handleSectionLoad = (section: keyof typeof sectionsLoaded) => {
    setSectionsLoaded(prev => ({ ...prev, [section]: true }));
    console.log(`Section ${section} loaded successfully`);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <SectionLoader message="Initializing portfolio..." />
          <div className="w-64 bg-muted rounded-full h-2">
            <motion.div 
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-muted-foreground">{loadingProgress}%</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback} 
      onReset={() => {
        setIsLoaded(false);
        setSectionsLoaded({
          hero: false,
          about: false,
          projects: false,
          skills: false,
          publications: false,
          contact: false
        });
        setLoadingProgress(0);
        setTimeout(() => setIsLoaded(true), 100);
      }}
      onError={(error) => {
        console.error('Home page error:', error);
      }}
    >
      <div className="min-h-screen text-foreground relative bg-background">
        {/* Background Animation with error boundary */}
        <ErrorBoundary 
          FallbackComponent={() => <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />}
          onReset={() => window.location.reload()}
        >
          <SpaceThemed 
            dotCount={100}
            connectionDistance={150}
            speed={0.3}
            className="fixed inset-0 z-0"
          />
        </ErrorBoundary>

        <div className="relative z-10">
          {/* Navigation with error boundary */}
          <ErrorBoundary 
            FallbackComponent={() => (
              <div className="h-16 bg-background/80 backdrop-blur-sm border-b border-border flex items-center justify-center">
                <div className="text-sm text-muted-foreground">Navigation temporarily unavailable</div>
              </div>
            )}
            onReset={() => window.location.reload()}
          >
            <Navbar />
          </ErrorBoundary>

          <main>
            {/* Hero Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('hero')}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  onAnimationComplete={() => handleSectionLoad('hero')}
                >
                  <HeroSection />
                </motion.div>
              </AnimatePresence>
            </ErrorBoundary>

            {/* About Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('about')}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-card/10 backdrop-blur-sm"
                onAnimationComplete={() => handleSectionLoad('about')}
              >
                <AboutSection />
              </motion.div>
            </ErrorBoundary>

            {/* Projects Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('projects')}
              key="projects-section"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                onAnimationComplete={() => handleSectionLoad('projects')}
              >
                <ProjectsSection />
              </motion.div>
            </ErrorBoundary>

            {/* Skills Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('skills')}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-card/10 backdrop-blur-sm"
                onAnimationComplete={() => handleSectionLoad('skills')}
              >
                <SkillsSection />
              </motion.div>
            </ErrorBoundary>

            {/* Publications Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('publications')}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                onAnimationComplete={() => handleSectionLoad('publications')}
              >
                <PublicationsSection />
              </motion.div>
            </ErrorBoundary>

            {/* Contact Section */}
            <ErrorBoundary 
              FallbackComponent={ErrorFallback} 
              onReset={() => handleSectionLoad('contact')}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="bg-card/10 backdrop-blur-sm"
                onAnimationComplete={() => handleSectionLoad('contact')}
              >
                <ContactSection />
              </motion.div>
            </ErrorBoundary>
          </main>

          {/* Footer with error boundary */}
          <ErrorBoundary 
            FallbackComponent={() => (
              <div className="h-16 bg-background/80 backdrop-blur-sm border-t border-border flex items-center justify-center">
                <p className="text-sm text-muted-foreground">© 2024 Yash Jain. All rights reserved.</p>
              </div>
            )}
            onReset={() => window.location.reload()}
          >
            <Footer />
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Home