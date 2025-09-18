import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Index: React.FC = () => {
  useEffect(() => {
    // Enhanced logging for debugging deployment issues
    console.log('Index page accessed, redirecting to home', {
      currentPath: window.location.pathname,
      currentSearch: window.location.search,
      currentHash: window.location.hash,
      timestamp: new Date().toISOString()
    });
    
    // Update document title immediately for better SEO
    document.title = 'Yash Jain | AI/ML Engineer Portfolio';
    
    // Add comprehensive meta tags for better SEO and deployment compatibility
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
    addMetaTag('description', 'Yash Jain - AI/ML Engineer Portfolio showcasing projects, publications, and expertise in artificial intelligence and machine learning.');
    addMetaTag('keywords', 'AI, ML, Machine Learning, Artificial Intelligence, Portfolio, Yash Jain, Engineer, Projects, Publications, Deep Learning, Data Science');
    addMetaTag('author', 'Yash Jain');
    addMetaTag('robots', 'index, follow');
    addMetaTag('theme-color', '#3b82f6');
    
    // Viewport meta if missing (crucial for mobile deployment)
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
      document.head.appendChild(meta);
    }

    // Open Graph tags for better social sharing
    addPropertyTag('og:title', 'Yash Jain | AI/ML Engineer Portfolio');
    addPropertyTag('og:description', 'Explore innovative AI/ML projects and research by Yash Jain');
    addPropertyTag('og:type', 'website');
    addPropertyTag('og:url', window.location.href);
    addPropertyTag('og:site_name', 'Yash Jain Portfolio');

    // Twitter Card tags
    addMetaTag('twitter:card', 'summary_large_image');
    addMetaTag('twitter:title', 'Yash Jain | AI/ML Engineer Portfolio');
    addMetaTag('twitter:description', 'Explore innovative AI/ML projects and research by Yash Jain');

    // Add canonical link for SEO
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/');

    // Preload critical resources for better performance
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/';
    preloadLink.as = 'document';
    document.head.appendChild(preloadLink);

  }, []);

  // Use replace to avoid adding to browser history
  // This prevents back button issues in deployment
  return <Navigate to="/" replace />;
};

export default Index;