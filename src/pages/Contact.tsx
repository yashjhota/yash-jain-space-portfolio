import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ContactSection from '@/components/ContactSection'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Yash Jain Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Me" 
          description="Have a question or want to work together? Feel free to reach out to me."
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Contact