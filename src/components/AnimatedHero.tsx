import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
// Dynamic cosmic backgrounds for RALY Hero Section
const heroCosmicDataGateway = '/lovable-uploads/f2cc4024-0cd7-4412-9bc2-46b3dcec5a18.png';
const heroTechInnovationPulse = '/lovable-uploads/bb2f4e70-e908-4ee6-af6f-f55603262c76.png';
const AnimatedHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(1);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    students: 0,
    clients: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const scrollableDistance = containerHeight - viewportHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollableDistance);
      setScrollProgress(progress);

      // Phase transitions
      if (progress < 0.3) {
        setCurrentPhase(1);
      } else if (progress >= 0.3 && progress < 0.7) {
        setCurrentPhase(2);
      } else {
        setCurrentPhase(3);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters when phase 2 starts
  useEffect(() => {
    if (currentPhase >= 2) {
      const targetValues = {
        years: 25,
        projects: 500,
        students: 1000,
        clients: 100
      };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        setCounters({
          years: Math.round(targetValues.years * easeOutProgress),
          projects: Math.round(targetValues.projects * easeOutProgress),
          students: Math.round(targetValues.students * easeOutProgress),
          clients: Math.round(targetValues.clients * easeOutProgress)
        });
        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
      return () => clearInterval(interval);
    }
  }, [currentPhase]);

  // Dynamic background image styles based on scroll
  const bg1Style = {
    backgroundImage: `url(${heroCosmicDataGateway})`,
    opacity: currentPhase === 1 ? 1 : 0,
    transform: `scale(${1 + scrollProgress * 0.1})`,
    filter: 'brightness(0.7)' // For better text readability
  };
  const bg2Style = {
    backgroundImage: `url(${heroTechInnovationPulse})`,
    opacity: currentPhase >= 2 ? 1 : 0,
    transform: `scale(${1 + scrollProgress * 0.05})`,
    mixBlendMode: 'overlay' as const // Blend with brand colors
  };
  return <div ref={containerRef} className="hero-pin-container">
      <div className="hero-pin-content">
        {/* Dynamic Background Layers */}
        <div className="hero-background hero-bg-1" style={bg1Style}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-brand-blue/60"></div>
        </div>
        <div className="hero-background hero-bg-2" style={bg2Style}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-600/40"></div>
        </div>

        {/* Phase 1: Hero Section */}
        <div className={`hero-content-phase ${currentPhase === 1 ? 'hero-phase-1' : 'hero-phase-2'}`}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              {/* Text Content - Pure White on Dark Overlay */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{
                color: '#FFFFFF'
              }}>
                  The Expertise You Need.<br />
                  <span style={{
                  color: '#FFFFFF'
                }}>The Career You Want.</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                  Advance your career with specialized training programs in Oracle, cloud computing, and IT solutions.
                </p>
                <div className="flex justify-center">
                  {/* Geometric Shape - Dark Blue Rectangle */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-blue/20 rounded-2xl blur-xl"></div>
                    <Button size="lg" className="relative hover-lift text-lg px-8 py-4 bg-white text-brand-blue hover:bg-white/90 hover:scale-105 transition-all duration-300">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Build Next */}
        <div className={`hero-content-phase text-white ${currentPhase >= 2 ? 'hero-phase-1' : 'hero-phase-2'}`}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">     RΛLY Technologies        Build Next </h1>
              <div className="text-2xl md:text-3xl mb-8">
                <span className={currentPhase >= 2 ? 'typing-text' : ''}>Where Vision Meets Execution

              </span>
              </div>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/90">
                Transforming ideas into digital reality through innovation and expertise
              </p>
              
              {/* Animated Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 counter-number">
                    {counters.years}+
                  </div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 counter-number">
                    {counters.projects}+
                  </div>
                  <div className="text-white/80 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 counter-number">
                    {counters.students}+
                  </div>
                  <div className="text-white/80 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 counter-number">
                    {counters.clients}+
                  </div>
                  <div className="text-white/80 text-sm">Enterprise Clients</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {currentPhase === 1 && <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white scroll-indicator">
            <ChevronDown className="w-8 h-8" />
          </div>}
      </div>
    </div>;
};
export default AnimatedHero;