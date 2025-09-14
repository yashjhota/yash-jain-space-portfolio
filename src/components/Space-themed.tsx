import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface SpaceThemedProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  dotCount?: number;
  connectionDistance?: number;
  dotSize?: number;
  speed?: number;
}

const SpaceThemed = ({
  className,
  dotColor = "rgba(255, 255, 255, 0.7)",
  lineColor = "rgba(255, 255, 255, 0.2)",
  dotCount = 100,
  connectionDistance = 150,
  dotSize = 2,
  speed = 0.5,
}: SpaceThemedProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create dots
    interface Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * dotSize + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Move dot
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        
        // Connect dots
        for (let j = i + 1; j < dots.length; j++) {
          const dot2 = dots[j];
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5 * (1 - distance / connectionDistance);
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [dotColor, lineColor, dotCount, connectionDistance, dotSize, speed]);

  return (
    <div className={cn("fixed inset-0 -z-10 bg-gradient-to-br from-purple-950 to-slate-900", className)}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default SpaceThemed;