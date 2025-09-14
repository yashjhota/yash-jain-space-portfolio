import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface ChangeProps {
  className?: string;
  starCount?: number;
  connectionDistance?: number;
  starSpeed?: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Change = ({
  className,
  starCount = 100,
  connectionDistance = 150,
  starSpeed = 0.3,
}: ChangeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [stars, setStars] = useState<Star[]>([]);
  
  // Initialize stars
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const { width, height } = canvas.getBoundingClientRect();
    setDimensions({ width, height });
    
    const newStars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * starSpeed,
        speedY: (Math.random() - 0.5) * starSpeed,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    setStars(newStars);
  }, [starCount, starSpeed]);
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const { width, height } = canvas.getBoundingClientRect();
      
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
      
      // Adjust star positions to new dimensions
      setStars(prev => prev.map(star => ({
        ...star,
        x: star.x > width ? Math.random() * width : star.x,
        y: star.y > height ? Math.random() * height : star.y
      })));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || stars.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw stars
      const updatedStars = stars.map(star => {
        // Move stars
        let x = star.x + star.speedX;
        let y = star.y + star.speedY;
        
        // Wrap around edges
        if (x < 0) x = dimensions.width;
        if (x > dimensions.width) x = 0;
        if (y < 0) y = dimensions.height;
        if (y > dimensions.height) y = 0;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        return { ...star, x, y };
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 170, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < updatedStars.length; i++) {
        for (let j = i + 1; j < updatedStars.length; j++) {
          const star1 = updatedStars[i];
          const star2 = updatedStars[j];
          
          const dx = star1.x - star2.x;
          const dy = star1.y - star2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(0, 255, 170, ${opacity * 0.2})`;
            
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.stroke();
          }
        }
      }
      
      setStars(updatedStars);
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions, stars, connectionDistance]);
  
  return (
    <div className={cn(
      "fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--card))] to-[hsl(var(--background))]",
      className
    )}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.1)_0%,transparent_70%)]" />
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--accent)/0.5) 1px, transparent 1px), 
                            linear-gradient(to bottom, hsl(var(--accent)/0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default Change;