import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const PublicationsSection = () => {
  const publications = [
    {
      title: "Deep Learning in Ophthalmology: A Novel Approach for Retinal Condition Prediction",
      authors: "Jain, Y. and Suriya Prakash J.",
      conference: "Accepted for presentation at NMITCON-2025",
      status: "To be published",
      year: "2025"
    },
    {
      title: "Advancing Intrusion Detection Systems: A Comparative Analysis of Algorithms on the Kyoto 2015 Benchmark Dataset",
      authors: "Jain, Y. and Suriya Prakash J.",
      conference: "Accepted for presentation at NMITCON-2025",
      status: "To be published",
      year: "2025"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research papers and academic publications in the fields of AI, Machine Learning, and Computer Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover:shadow-md transition-all duration-300 hover:border-secondary/50 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="h-6 w-6 text-secondary" />
                    <span className="text-sm text-muted-foreground">{publication.year}</span>
                  </div>
                  <CardTitle className="font-heading text-lg">{publication.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-1">{publication.authors}</p>
                  <p className="text-sm font-medium">{publication.conference}</p>
                  <p className="text-xs text-muted-foreground mt-1">{publication.status}</p>
                </CardContent>
                <CardFooter>
                  <Link to="/publications" className="w-full">
                    <Button variant="ghost" className="w-full justify-start group-hover:text-secondary transition-colors">
                      View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/publications">
            <Button variant="outline" size="lg" className="gap-2">
              View All Publications <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PublicationsSection