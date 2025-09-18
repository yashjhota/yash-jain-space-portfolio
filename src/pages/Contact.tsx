import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ContactSection from '@/components/ContactSection'
import { toast } from 'sonner'

const Contact = () => {
  const [connectionError, setConnectionError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Contact | Yash Jain Portfolio'
    
    // Check for any connection issues on page load
    const checkPageConnectivity = async () => {
      try {
        // Check if we're online
        if (!navigator.onLine) {
          setConnectionError('You are currently offline. The contact form will work in offline mode.')
          toast.warning('Offline mode detected. Messages will be saved locally.')
          return
        }

        // Check for any stored offline messages
        const offlineSubmissions = JSON.parse(localStorage.getItem('offlineContactSubmissions') || '[]')
        if (offlineSubmissions.length > 0) {
          toast.info(`You have ${offlineSubmissions.length} offline message(s) that will be sent when connection is restored.`, {
            duration: 6000,
            action: {
              label: 'Clear',
              onClick: () => {
                localStorage.removeItem('offlineContactSubmissions')
                toast.success('Offline messages cleared.')
              }
            }
          })
        }

        // Clear any previous connection errors
        setConnectionError(null)
      } catch (error) {
        console.error('Page connectivity check failed:', error)
        setConnectionError('Connection check failed. Contact form may have limited functionality.')
      }
    }

    // Run connectivity check
    checkPageConnectivity()

    // Listen for online/offline events
    const handleOnline = () => {
      setConnectionError(null)
      toast.success('Connection restored!')
      
      // Check for offline messages to sync
      const offlineSubmissions = JSON.parse(localStorage.getItem('offlineContactSubmissions') || '[]')
      if (offlineSubmissions.length > 0) {
        toast.info(`Ready to sync ${offlineSubmissions.length} offline message(s).`)
      }
    }
    
    const handleOffline = () => {
      setConnectionError('You are currently offline. The contact form will work in offline mode.')
      toast.error('Connection lost. Contact form will work in offline mode.')
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Me" 
          description="Have a question or want to work together? Feel free to reach out to me."
        />
        {connectionError && (
          <div className="container mx-auto px-4 -mt-8 mb-8">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-amber-800 dark:text-amber-200">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="font-medium">Connection Notice:</span>
              </div>
              <p className="mt-1 text-sm">{connectionError}</p>
            </div>
          </div>
        )}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Contact