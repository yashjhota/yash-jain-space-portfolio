import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  useEffect(() => {
    // Enhanced document setup for 404 page
    document.title = '404 - Page Not Found | Yash Jain Portfolio';
    
    // Add meta tags for better SEO handling of 404 pages
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('description', '404 - The requested page was not found. Return to Yash Jain\'s AI/ML Engineer Portfolio.');
    addMetaTag('robots', 'noindex, nofollow');

    // Log 404 for debugging deployment issues
    console.warn('404 Page accessed:', {
      path: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <motion.div 
        className="text-center max-w-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number with animation */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.h1 
            className="text-9xl md:text-[12rem] font-bold text-secondary/20 select-none"
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            404
          </motion.h1>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              404
            </div>
          </motion.div>
        </motion.div>

        {/* Error message */}
        <motion.div variants={itemVariants} className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            This might be due to a broken link or a mistyped URL.
          </p>
        </motion.div>

        {/* Current path info for debugging */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 p-4 bg-muted/50 rounded-lg border border-border"
        >
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Requested path:</strong>
          </p>
          <code className="text-sm bg-background px-2 py-1 rounded border">
            {window.location.pathname}
          </code>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="gap-2 min-w-[160px]">
                <Home className="h-4 w-4" /> 
                Back to Home
              </Button>
            </motion.div>
          </Link>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="gap-2 min-w-[160px]"
            >
              <ArrowLeft className="h-4 w-4" /> 
              Go Back
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={() => window.location.reload()}
              className="gap-2 min-w-[160px]"
            >
              <RefreshCw className="h-4 w-4" /> 
              Refresh
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional help */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/projects">
              <Button variant="link" size="sm">Projects</Button>
            </Link>
            <Link to="/resume">
              <Button variant="link" size="sm">Resume</Button>
            </Link>
            <Link to="/publications">
              <Button variant="link" size="sm">Publications</Button>
            </Link>
            <Link to="/contact">
              <Button variant="link" size="sm">Contact</Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;