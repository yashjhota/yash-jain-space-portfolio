import React from 'react';
import Change from '@/components/Change';
import SpaceThemed from '@/components/Space-themed';

const Index = () => {
  return (
    <>
      <SpaceThemed 
        dotCount={80}
        connectionDistance={120}
        speed={0.2}
        className="z-[-2]"
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-heading font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            Welcome to the Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            Experience the beauty of animated backgrounds with our immersive space-themed visuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h3 className="text-xl font-heading font-semibold mb-4 text-secondary">
                Cosmic Connections
              </h3>
              <p className="text-muted-foreground">
                Watch as stars move across the screen with realistic physics and smooth animations
              </p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
                Stellar Network
              </h3>
              <p className="text-muted-foreground">
                Stars connect when they're close, creating a beautiful constellation effect
              </p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h3 className="text-xl font-heading font-semibold mb-4 text-secondary">
                Fully Customizable
              </h3>
              <p className="text-muted-foreground">
                Adjust star count, speed, and connection distance to create your perfect cosmic atmosphere
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;