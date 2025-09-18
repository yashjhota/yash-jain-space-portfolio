import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { cn } from "@/lib/utils";

const New = () => {
  const upcomingProjects = [
    {
      id: 1,
      title: "Predictive Healthcare Analytics Platform",
      description: "Developing a machine learning system that predicts patient readmission risks by analyzing electronic health records. The platform will use natural language processing to extract insights from clinical notes and combine them with structured data to provide actionable intelligence for healthcare providers.",
      technologies: ["Python", "PyTorch", "NLP", "AWS", "React"],
      timeline: "Q3 2023 - Q1 2024",
      status: "Research Phase"
    },
    {
      id: 2,
      title: "Financial Market Sentiment Analyzer",
      description: "Creating an advanced sentiment analysis tool that processes financial news, social media, and earnings calls to predict market movements. This project will incorporate transformer-based language models to capture nuanced market sentiment and provide trading signals with confidence intervals.",
      technologies: ["Python", "TensorFlow", "BERT", "Time Series Analysis", "D3.js"],
      timeline: "Q4 2023 - Q2 2024",
      status: "Data Collection"
    },
    {
      id: 3,
      title: "Sustainable Supply Chain Optimization",
      description: "Building a reinforcement learning system that optimizes supply chain logistics while minimizing carbon footprint. The project will create digital twins of supply networks and simulate various scenarios to find optimal routing and inventory management strategies that balance cost and environmental impact.",
      technologies: ["Python", "Reinforcement Learning", "Graph Neural Networks", "Optimization", "Tableau"],
      timeline: "Q1 2024 - Q3 2024",
      status: "Planning"
    },
    {
      id: 4,
      title: "Multimodal Recommendation Engine",
      description: "Developing a next-generation recommendation system that combines text, image, and user behavior data to provide highly personalized suggestions. The system will leverage contrastive learning to create unified embeddings across different data modalities.",
      technologies: ["Python", "PyTorch", "Computer Vision", "NLP", "Redis"],
      timeline: "Q2 2024 - Q4 2024",
      status: "Concept Development"
    },
    {
      id: 5,
      title: "Automated Scientific Literature Review Tool",
      description: "Creating an AI assistant that helps researchers navigate scientific literature by automatically extracting key findings, identifying methodological strengths and weaknesses, and suggesting relevant papers. The tool will use knowledge graphs to represent relationships between research concepts.",
      technologies: ["Python", "Transformers", "Knowledge Graphs", "Neo4j", "Vue.js"],
      timeline: "Q3 2024 - Q1 2025",
      status: "Initial Research"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHeader
          title="Upcoming Works"
          description="A preview of data science projects currently in development"
        />

        <section className="container py-12 md:py-16">
          <div className="space-y-12">
            {upcomingProjects.map((project) => (
              <div 
                key={project.id} 
                className={cn(
                  "group relative rounded-lg border border-border bg-card p-6 shadow-md transition-all",
                  "hover:border-accent hover:shadow-lg"
                )}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Timeline:</span> {project.timeline}
                    </div>
                    <div className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default New;