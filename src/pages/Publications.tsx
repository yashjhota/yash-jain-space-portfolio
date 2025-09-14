import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PublicationCard from '@/components/PublicationCard'

const Publications = () => {
  useEffect(() => {
    document.title = 'Publications | Yash Jain Portfolio'
  }, [])

  const publications = [
    {
      title: "Deep Learning in Ophthalmology: A Novel Approach for Retinal Condition Prediction",
      authors: "Jain, Y. and Suriya Prakash J.",
      conference: "Accepted for presentation at NMITCON-2025",
      status: "To be published",
      year: "2025",
      abstract: "This research presents a novel deep learning approach for early detection and prediction of retinal conditions using convolutional neural networks. By analyzing fundus images and optical coherence tomography (OCT) scans, our model achieves significant improvements in accuracy and sensitivity compared to existing methods. The study demonstrates the potential for AI-assisted diagnosis in ophthalmology, particularly for conditions like diabetic retinopathy and age-related macular degeneration."
    },
    {
      title: "Advancing Intrusion Detection Systems: A Comparative Analysis of Algorithms on the Kyoto 2015 Benchmark Dataset",
      authors: "Jain, Y. and Suriya Prakash J.",
      conference: "Accepted for presentation at NMITCON-2025",
      status: "To be published",
      year: "2025",
      abstract: "This paper presents a comprehensive comparative analysis of machine learning and deep learning algorithms for network intrusion detection using the Kyoto 2015 benchmark dataset. We evaluate the performance of traditional algorithms like Random Forest and SVM against deep learning approaches including LSTM and CNN-based models. Our findings reveal significant improvements in detection accuracy and reduced false positive rates with hybrid approaches that combine feature engineering with deep learning architectures, offering valuable insights for developing more robust cybersecurity systems."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader 
          title="Publications" 
          description="Research papers and academic publications in the fields of AI, Machine Learning, and Computer Science."
        />
        
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <PublicationCard
                  key={index}
                  title={publication.title}
                  authors={publication.authors}
                  conference={publication.conference}
                  status={publication.status}
                  year={publication.year}
                  abstract={publication.abstract}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Publications