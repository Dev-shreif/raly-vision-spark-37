import { useState, useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Trophy, Award, BookOpen, Code, Star } from 'lucide-react';

interface Graduate {
  name: string;
  specialization: string;
  year: string;
  achievement: string;
  image?: string;
}

interface GraduatesCarouselProps {
  graduates: Graduate[];
}

const GraduatesCarousel = ({ graduates }: GraduatesCarouselProps) => {
  const [selectedGraduate, setSelectedGraduate] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const handleGraduateSelect = (index: number) => {
    setSelectedGraduate(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Extended pause for better user experience
  };

  const currentGraduate = graduates[selectedGraduate];

  // Enhanced Auto-scroll functionality with smoother animation
  useEffect(() => {
    const startAutoScroll = () => {
      if (!scrollContainerRef.current || isHovered || isPaused) return;
      
      const container = scrollContainerRef.current;
      const scrollStep = 0.3; // Slower, smoother scroll speed
      let animationStartTime = 0;
      
      const smoothScroll = (timestamp: number) => {
        if (!animationStartTime) animationStartTime = timestamp;
        
        if (!isHovered && !isPaused && container) {
          // Apply easing for smoother animation
          const elapsed = timestamp - animationStartTime;
          const easedScrollStep = scrollStep * (1 + Math.sin(elapsed * 0.001) * 0.1);
          
          container.scrollLeft += easedScrollStep;
          
          // Smooth reset when reaching the end
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.style.scrollBehavior = 'smooth';
            container.scrollLeft = 0;
            setTimeout(() => {
              if (container) container.style.scrollBehavior = 'auto';
            }, 500);
          }
        }
        animationRef.current = requestAnimationFrame(smoothScroll);
      };
      
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    startAutoScroll();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isPaused]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="graduates-carousel-section">
      {/* Main Featured Graduate Display */}
      <div className="bg-background rounded-2xl overflow-hidden shadow-2xl mb-8 transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            {currentGraduate?.image ? (
              <img 
                key={selectedGraduate} // Force re-render for animation
                src={currentGraduate.image} 
                alt={currentGraduate.name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out animate-fade-in"
              />
            ) : (
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center animate-fade-in">
                <Trophy className="w-24 h-24 text-white" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          {/* Content Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-card">
            <div className="space-y-6 animate-fade-in" key={`content-${selectedGraduate}`}>
              <div>
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 transition-all duration-300">
                  {currentGraduate?.specialization}
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 transition-all duration-500">
                  {currentGraduate?.name}
                </h3>
                <p className="text-muted-foreground text-lg transition-all duration-500">
                  Class of {currentGraduate?.year}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary transition-all duration-500">Success Story</h4>
                <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-500">
                  {currentGraduate?.achievement}
                </p>
              </div>
              
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Graduates Thumbnails */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer and Edge */
          }}
        >
          <div className="flex gap-4 min-w-max">
            {graduates.map((graduate, index) => (
              <div
                key={index}
                onClick={() => handleGraduateSelect(index)}
                className={`
                  relative cursor-pointer group transition-all duration-500 rounded-xl overflow-hidden flex-shrink-0
                  w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36
                  ${selectedGraduate === index 
                    ? 'ring-4 ring-primary shadow-xl scale-110 z-10' 
                    : 'hover:scale-105 hover:shadow-lg hover:z-20'
                  }
                `}
                style={{
                  filter: selectedGraduate === index ? 'brightness(1.1)' : 'brightness(1)',
                }}
              >
                <div className="w-full h-full">
                  {graduate.image ? (
                    <img 
                      src={graduate.image} 
                      alt={graduate.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-white transition-all duration-300 group-hover:scale-125" />
                    </div>
                  )}
                </div>
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-2 md:p-3 text-white w-full">
                    <p className="font-semibold text-xs md:text-sm truncate drop-shadow-lg">{graduate.name}</p>
                    <p className="text-xs opacity-90 truncate drop-shadow-md">{graduate.specialization}</p>
                  </div>
                </div>
                
                {/* Enhanced Selected Indicator */}
                {selectedGraduate === index && (
                  <div className="absolute top-2 right-2 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                  </div>
                )}
                
                {/* Glow Effect for Selected */}
                {selectedGraduate === index && (
                  <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient fade effects on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default GraduatesCarousel;