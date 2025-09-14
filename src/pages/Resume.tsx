import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react'

const Resume = () => {
  useEffect(() => {
    document.title = 'Resume | Yash Jain Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader 
          title="Resume" 
          description="My professional experience, education, skills, and certifications."
        />
        
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex justify-center mb-8">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Experience Section */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Briefcase className="h-6 w-6 text-secondary" />
                      <h2 className="text-2xl font-bold font-heading">Experience</h2>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="border-l-2 border-secondary pl-6 relative">
                        <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-xl font-semibold font-heading">Data Analyst Intern</h3>
                        <p className="text-secondary font-medium">UptoSkills</p>
                        <p className="text-sm text-muted-foreground mb-3">Jan 2025 - April 2025 | Remote</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Analyzing large datasets using SQL, Pandas, and Power BI, uncovering insights that improved business decisions</li>
                          <li>Built interactive dashboards that enhanced reporting efficiency by 25%</li>
                          <li>Conducted predictive analysis to forecast trends, leveraging machine learning models</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-accent pl-6 relative">
                        <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-xl font-semibold font-heading">SQL Intern</h3>
                        <p className="text-accent font-medium">HubbleMind Pvt Ltd</p>
                        <p className="text-sm text-muted-foreground mb-3">Oct 2024 - Nov 2024 | Remote</p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Developed optimized SQL queries, reducing execution time by 20%, improving database efficiency</li>
                          <li>Designed and integrated data pipelines for interactive Power BI dashboards, aiding decision-making</li>
                          <li>Automated ETL workflows, increasing data processing efficiency by 15%</li>
                          <li>Applied data warehousing techniques, ensuring smooth and scalable data retrieval</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Education Section */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                      <h2 className="text-2xl font-bold font-heading">Education</h2>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="border-l-2 border-secondary pl-6 relative">
                        <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-xl font-semibold font-heading">Bachelor of Technology in Computer Science</h3>
                        <p className="text-secondary font-medium">Jain University</p>
                        <p className="text-sm text-muted-foreground mb-3">Sep 2022 - Present | Bangalore, Karnataka</p>
                      </div>
                      
                      <div className="border-l-2 border-accent pl-6 relative">
                        <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                        <h3 className="text-xl font-semibold font-heading">Higher Secondary in Computer Science</h3>
                        <p className="text-accent font-medium">Guhan School</p>
                        <p className="text-sm text-muted-foreground mb-3">Apr 2021 - May 2022 | Madurai, Tamil Nadu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Relevant Coursework */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="h-6 w-6 text-secondary" />
                      <h2 className="text-2xl font-bold font-heading">Relevant Coursework</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Data Structures", 
                        "Algorithms Analysis", 
                        "Artificial Intelligence", 
                        "Deep Learning",
                        "Machine Learning", 
                        "Database Management", 
                        "OOPS", 
                        "Gen AI"
                      ].map((course, index) => (
                        <div 
                          key={index} 
                          className="bg-muted/50 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8">
                {/* Skills Section */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold font-heading mb-4">Technical Skills</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Python", "Java", "C++", "HTML/CSS", "SQL"].map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Developer Tools</h3>
                        <div className="flex flex-wrap gap-2">
                          {["VS Code", "Eclipse", "Google Cloud Platform", "PowerBI", "MongoDB", "MySQL"].map((tool, index) => (
                            <span 
                              key={index} 
                              className="bg-accent/10 text-accent px-3 py-1 rounded-md text-xs font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Technologies/Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Linux", "GitHub", "LangChain", "HuggingFace", "FastAPI", "GEN-AI"].map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Certifications Section */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="h-6 w-6 text-secondary" />
                      <h2 className="text-xl font-bold font-heading">Certifications</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</h3>
                        <p className="text-xs text-muted-foreground">Aug 2025 | Online</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold">Ubuntu Linux Professional Certificate by Canonical</h3>
                        <p className="text-xs text-muted-foreground">March 2025 | Canonical</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold">Google Data Analytics Professional Certificate</h3>
                        <p className="text-xs text-muted-foreground">Feb 2025 | Coursera, Online</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Leadership Section */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold font-heading mb-4">Leadership / Extracurricular</h2>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold">Mentor</h3>
                        <p className="text-xs text-muted-foreground">Guided junior students in Python & Machine Learning</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold">Force for Good Program</h3>
                        <p className="text-xs text-muted-foreground">Developed sustainable tech solution for non-profit organization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Resume