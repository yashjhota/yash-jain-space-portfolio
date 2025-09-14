import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate component loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email",
      value: "jhotayash@gmail.com",
      link: "mailto:jhotayash@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      value: "7339615381",
      link: "tel:7339615381"
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Location",
      value: "Bangalore, Karnataka",
      link: null
    }
  ]

  // If component hasn't loaded yet, show minimal placeholder
  if (!isLoaded) {
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-[20vh]">
            <div className="animate-pulse w-full max-w-2xl h-8 bg-muted rounded"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-md transition-all duration-300 hover:border-secondary/50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-muted mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className={`bg-muted/50 ${formErrors.name ? 'border-destructive' : ''}`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-destructive mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className={`bg-muted/50 ${formErrors.email ? 'border-destructive' : ''}`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-destructive mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className={`bg-muted/50 ${formErrors.subject ? 'border-destructive' : ''}`}
                    />
                    {formErrors.subject && (
                      <p className="text-xs text-destructive mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      className={`min-h-[150px] bg-muted/50 ${formErrors.message ? 'border-destructive' : ''}`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-destructive mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection