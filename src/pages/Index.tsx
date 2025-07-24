import { ArrowRight, Target, TrendingUp, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedHero from '@/components/AnimatedHero';
import ModernSections from '@/components/ModernSections';

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const whyRaly = [
    { icon: <Target className="w-6 h-6" />, title: "Trusted Managed Services", description: "Reliable 24/7 support" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Real Business Impact", description: "Measurable results" },
    { icon: <Settings className="w-6 h-6" />, title: "Custom-Built Solutions", description: "Tailored to your needs" },
    { icon: <Users className="w-6 h-6" />, title: "Long-term Partnerships", description: "Growing together" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-scroll-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Modern Sections with Scroll Animation */}
      <ModernSections />

      {/* Why RALY Section - Dark Background for Dramatic Effect */}
      <section id="why-raly" data-scroll-section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className={`space-y-8 ${
              visibleSections.has('why-raly') ? 'scroll-slide-left visible' : 'scroll-slide-left'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Why Choose RALY
              </h2>
              <div className="space-y-6">
                {whyRaly.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-4 ${
                      visibleSections.has('why-raly') ? 'scroll-fade-in visible' : 'scroll-fade-in'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-lg bg-brand-teal/20 text-brand-teal flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-white">{item.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${
              visibleSections.has('why-raly') ? 'scroll-slide-right visible' : 'scroll-slide-right'
            }`}>
              <div className="relative">
                {/* Visual Chart/Graph Element */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">Business Impact</h4>
                      <p className="text-white/70">Measurable Results</p>
                    </div>
                    
                    {/* Animated Progress Bars */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/90">Efficiency Boost</span>
                          <span className="text-brand-teal">85%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-teal to-secondary rounded-full w-[85%] transition-all duration-1000 ease-out"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/90">Cost Reduction</span>
                          <span className="text-brand-teal">70%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-teal to-secondary rounded-full w-[70%] transition-all duration-1000 ease-out"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/90">Client Satisfaction</span>
                          <span className="text-brand-teal">95%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-teal to-secondary rounded-full w-[95%] transition-all duration-1000 ease-out"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" data-scroll-section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              visibleSections.has('clients') ? 'scroll-fade-in visible' : 'scroll-fade-in'
            }`}>
              Trusted by Leaders in Every Sector
            </h2>
            <p className={`text-xl mb-12 max-w-2xl mx-auto text-white/90 ${
              visibleSections.has('clients') ? 'scroll-fade-in visible' : 'scroll-fade-in'
            }`} style={{ transitionDelay: '0.2s' }}>
              Join hundreds of successful companies that trust RALY for their IT needs
            </p>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto ${
              visibleSections.has('clients') ? 'scroll-fade-in visible' : 'scroll-fade-in'
            }`} style={{ transitionDelay: '0.4s' }}>
              {["25+", "500+", "1000+", "100+"].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat}</div>
                  <div className="text-white/80 text-sm">
                    {["Years Experience", "Projects Completed", "Students Trained", "Enterprise Clients"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" data-scroll-section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${
            visibleSections.has('contact') ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}>
            Let's Build Your Solution Together
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto text-muted-foreground ${
            visibleSections.has('contact') ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`} style={{ transitionDelay: '0.2s' }}>
            Ready to transform your business with cutting-edge IT solutions?
          </p>
          <Button size="lg" className={`hover-lift text-lg px-8 py-4 ${
            visibleSections.has('contact') ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`} style={{ transitionDelay: '0.4s' }}>
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;