import React, { useEffect, useState } from 'react';
import { Cloud, Database, CheckCircle, BarChart3, GraduationCap, Settings, Users, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import professionalTeam from '@/assets/professional-team-collaboration.jpg';
// Using the uploaded image from public folder
const ralyDynamicDesign = '/lovable-uploads/31e12c2a-24b5-4bae-98c3-19fafabbf144.png';
const ModernSections = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const services = [{
    icon: <Settings className="w-6 h-6" />,
    title: "Implementations",
    description: "Custom tech solutions"
  }, {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Audit & Health Check",
    description: "System analysis"
  }, {
    icon: <Database className="w-6 h-6" />,
    title: "Data Migration",
    description: "Seamless transitions"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Support",
    description: "24/7 assistance"
  }, {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Predictive Analysis",
    description: "Data insights"
  }, {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Workshops",
    description: "Skill development"
  }, {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Computing",
    description: "Scalable infrastructure"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "SaaS Solutions",
    description: "Software as a service"
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('[data-scroll-section]').forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return <div className="modern-sections">
      {/* Who We Are Section - Simple Dark Background */}
      <section 
        id="who-we-are" 
        data-scroll-section 
        className="py-20 text-white"
        style={{ backgroundColor: '#0A192F' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className={`${visibleSections.has('who-we-are') ? 'scroll-slide-left visible' : 'scroll-slide-left'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Who We Are
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">We are innovators and strategists dedicated to transforming your ideas into powerful digital solutions. Our team combines deep technical expertise with creative problem-solving to deliver exceptional results</p>
              <p className="text-lg text-white/80 leading-relaxed">From concept to implementation, we partner with you to build technology that drives your business forward and creates lasting value for your organization</p>
            </div>
            <div className={`${visibleSections.has('who-we-are') ? 'scroll-slide-right visible' : 'scroll-slide-right'}`}>
              <img src={professionalTeam} alt="Professional team collaborating in modern office" className="floating-image w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - White Background with Enhanced Cards */}
      <section id="what-we-do" data-scroll-section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient ${visibleSections.has('what-we-do') ? 'scroll-fade-in visible' : 'scroll-fade-in'}`}>
              What We Do
            </h2>
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${visibleSections.has('what-we-do') ? 'scroll-fade-in visible' : 'scroll-fade-in'}`} style={{
            transitionDelay: '0.2s'
          }}>
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => <div key={index} className={`service-card-enhanced ${visibleSections.has('what-we-do') ? 'scroll-fade-in visible' : 'scroll-fade-in'}`} style={{
            transitionDelay: `${0.4 + index * 0.1}s`
          }}>
                <div className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 service-icon">
                    {React.cloneElement(service.icon, {
                  className: "w-8 h-8"
                })}
                  </div>
                  <h3 className="font-bold text-xl mb-3 service-title">{service.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default ModernSections;