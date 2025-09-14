import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Projects from '@/pages/Projects'
import Resume from '@/pages/Resume'
import Contact from '@/pages/Contact'
import Publications from '@/pages/Publications'
import { Suspense, useEffect } from 'react'

// Add loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
  </div>
)

function App() {
  // Add error handling for route changes
  useEffect(() => {
    const handleRouteError = (event: ErrorEvent) => {
      console.error('Routing error:', event.error);
      // Prevent the default browser error handling
      event.preventDefault();
    };

    window.addEventListener('error', handleRouteError);
    
    return () => {
      window.removeEventListener('error', handleRouteError);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  )
}

export default App