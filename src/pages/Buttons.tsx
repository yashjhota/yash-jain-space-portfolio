import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Buttons = () => {
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
  const [ripplePositions, setRipplePositions] = useState<{[key: string]: {x: number, y: number}}>({});

  const handleButtonClick = (buttonId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setRipplePositions(prev => ({
      ...prev,
      [buttonId]: { x, y }
    }));
    
    setClickedButtons(prev => new Set(prev).add(buttonId));
    
    setTimeout(() => {
      setClickedButtons(prev => {
        const newSet = new Set(prev);
        newSet.delete(buttonId);
        return newSet;
      });
    }, 300);
  };

  const buttonVariants = [
    {
      id: 'primary',
      name: 'Primary Button',
      className: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      description: 'Main call-to-action button with gradient background'
    },
    {
      id: 'secondary',
      name: 'Secondary Button',
      className: 'bg-card text-card-foreground border border-border hover:bg-muted hover:border-secondary transition-all duration-300',
      description: 'Secondary action button with subtle styling'
    },
    {
      id: 'accent',
      name: 'Accent Button',
      className: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300',
      description: 'Accent button for special actions'
    },
    {
      id: 'outline',
      name: 'Outline Button',
      className: 'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground transition-all duration-300',
      description: 'Outlined button with hover fill effect'
    },
    {
      id: 'ghost',
      name: 'Ghost Button',
      className: 'text-foreground hover:bg-muted hover:text-secondary transition-all duration-300',
      description: 'Minimal button with subtle hover effect'
    },
    {
      id: 'destructive',
      name: 'Destructive Button',
      className: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-all duration-300',
      description: 'Warning button for destructive actions'
    },
    {
      id: 'gradient',
      name: 'Gradient Button',
      className: 'bg-gradient-to-r from-secondary to-accent text-white hover:from-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      description: 'Eye-catching gradient button'
    },
    {
      id: 'animated',
      name: 'Animated Button',
      className: 'bg-card text-card-foreground border border-border hover:border-accent relative overflow-hidden group transition-all duration-300',
      description: 'Button with sliding background animation'
    }
  ];

  const sizeVariants = [
    { id: 'sm', name: 'Small', className: 'px-3 py-1.5 text-sm' },
    { id: 'md', name: 'Medium', className: 'px-4 py-2 text-base' },
    { id: 'lg', name: 'Large', className: 'px-6 py-3 text-lg' },
    { id: 'xl', name: 'Extra Large', className: 'px-8 py-4 text-xl' }
  ];

  const iconButtons = [
    { id: 'heart', icon: '❤️', name: 'Heart' },
    { id: 'star', icon: '⭐', name: 'Star' },
    { id: 'thumbs', icon: '👍', name: 'Thumbs Up' },
    { id: 'fire', icon: '🔥', name: 'Fire' },
    { id: 'rocket', icon: '🚀', name: 'Rocket' },
    { id: 'lightning', icon: '⚡', name: 'Lightning' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader 
        title="Button Showcase" 
        description="Interactive button components with various styles and animations"
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Button Variants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Button Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buttonVariants.map((variant) => (
              <div key={variant.id} className="bg-card rounded-lg border border-border p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold font-heading mb-2 text-secondary">{variant.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{variant.description}</p>
                <div className="flex justify-center">
                  <button
                    onClick={(e) => handleButtonClick(variant.id, e)}
                    className={`px-6 py-3 rounded-lg font-medium relative overflow-hidden ${variant.className} ${
                      clickedButtons.has(variant.id) ? 'animate-pulse' : ''
                    }`}
                  >
                    {variant.id === 'animated' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                    )}
                    <span className="relative z-10">Click Me</span>
                    {ripplePositions[variant.id] && (
                      <div
                        className="absolute bg-white/30 rounded-full animate-ping"
                        style={{
                          left: ripplePositions[variant.id].x - 10,
                          top: ripplePositions[variant.id].y - 10,
                          width: 20,
                          height: 20,
                        }}
                      />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Variants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Button Sizes
          </h2>
          <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {sizeVariants.map((size) => (
                <div key={size.id} className="text-center">
                  <button
                    onClick={(e) => handleButtonClick(`size-${size.id}`, e)}
                    className={`bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${size.className} ${
                      clickedButtons.has(`size-${size.id}`) ? 'animate-bounce' : ''
                    }`}
                  >
                    {size.name}
                    {ripplePositions[`size-${size.id}`] && (
                      <div
                        className="absolute bg-white/30 rounded-full animate-ping"
                        style={{
                          left: ripplePositions[`size-${size.id}`].x - 8,
                          top: ripplePositions[`size-${size.id}`].y - 8,
                          width: 16,
                          height: 16,
                        }}
                      />
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">{size.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Icon Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
            Icon Buttons
          </h2>
          <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {iconButtons.map((icon) => (
                <div key={icon.id} className="text-center">
                  <button
                    onClick={(e) => handleButtonClick(`icon-${icon.id}`, e)}
                    className={`w-16 h-16 bg-muted hover:bg-secondary hover:text-secondary-foreground rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg relative overflow-hidden ${
                      clickedButtons.has(`icon-${icon.id}`) ? 'animate-spin' : ''
                    }`}
                  >
                    {icon.icon}
                    {ripplePositions[`icon-${icon.id}`] && (
                      <div
                        className="absolute bg-white/30 rounded-full animate-ping"
                        style={{
                          left: ripplePositions[`icon-${icon.id}`].x - 6,
                          top: ripplePositions[`icon-${icon.id}`].y - 6,
                          width: 12,
                          height: 12,
                        }}
                      />
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Interactive Demo
          </h2>
          <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground">
                Try these interactive button effects and animations
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={(e) => handleButtonClick('demo-pulse', e)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none relative overflow-hidden"
                >
                  Pulsing Button
                  {ripplePositions['demo-pulse'] && (
                    <div
                      className="absolute bg-white/30 rounded-full animate-ping"
                      style={{
                        left: ripplePositions['demo-pulse'].x - 10,
                        top: ripplePositions['demo-pulse'].y - 10,
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </button>
                <button
                  onClick={(e) => handleButtonClick('demo-bounce', e)}
                  className={`px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 relative overflow-hidden ${
                    clickedButtons.has('demo-bounce') ? 'animate-bounce' : 'hover:animate-bounce'
                  }`}
                >
                  Bouncing Button
                  {ripplePositions['demo-bounce'] && (
                    <div
                      className="absolute bg-white/30 rounded-full animate-ping"
                      style={{
                        left: ripplePositions['demo-bounce'].x - 10,
                        top: ripplePositions['demo-bounce'].y - 10,
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </button>
                <button
                  onClick={(e) => handleButtonClick('demo-glow', e)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 relative overflow-hidden"
                >
                  Glowing Button
                  {ripplePositions['demo-glow'] && (
                    <div
                      className="absolute bg-white/30 rounded-full animate-ping"
                      style={{
                        left: ripplePositions['demo-glow'].x - 10,
                        top: ripplePositions['demo-glow'].y - 10,
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Button States Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Button States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg border border-border p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold font-heading mb-4 text-secondary">Normal</h3>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all duration-300">
                Normal State
              </button>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold font-heading mb-4 text-accent">Hover</h3>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 hover:scale-105 transition-all duration-300">
                Hover State
              </button>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold font-heading mb-4 text-muted-foreground">Disabled</h3>
              <button 
                disabled 
                className="px-6 py-3 bg-muted text-muted-foreground rounded-lg font-medium cursor-not-allowed opacity-50"
              >
                Disabled State
              </button>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold font-heading mb-4 text-accent">Loading</h3>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-border p-8 shadow-lg">
            <h2 className="text-2xl font-bold font-heading mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Choose your favorite button style and start building amazing interfaces
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={(e) => handleButtonClick('cta-primary', e)}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-medium hover:from-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                Get Started
                {ripplePositions['cta-primary'] && (
                  <div
                    className="absolute bg-white/30 rounded-full animate-ping"
                    style={{
                      left: ripplePositions['cta-primary'].x - 12,
                      top: ripplePositions['cta-primary'].y - 12,
                      width: 24,
                      height: 24,
                    }}
                  />
                )}
              </button>
              <button
                onClick={(e) => handleButtonClick('cta-secondary', e)}
                className="px-8 py-4 border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground rounded-lg font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                Learn More
                {ripplePositions['cta-secondary'] && (
                  <div
                    className="absolute bg-secondary/30 rounded-full animate-ping"
                    style={{
                      left: ripplePositions['cta-secondary'].x - 12,
                      top: ripplePositions['cta-secondary'].y - 12,
                      width: 24,
                      height: 24,
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Buttons;