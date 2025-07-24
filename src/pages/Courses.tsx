import { Clock, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const navigate = useNavigate();
  const courses = [
    {
      id: 'it-database-diploma',
      title: "IT & Database Administration Diploma",
      description: "Comprehensive diploma program covering modern IT administration and database management",
      duration: "12 Months",
      students: "25+ Students",
      level: "Professional",
      image: "/lovable-uploads/8132ebd7-af03-45d0-9134-81727eed1e1a.png",
      modules: [
        "English & ICDL", "Linux+", "Soft Skills", "SQL", "IT (ITF)", "PL/SQL", 
        "A+", "DBA", "Network+", "WebLogic", "Security+", "APEX"
      ],
      features: ["Free", "Hands-on Labs", "Industry Certified", "Job Placement Support"]
    },
    {
      id: 'cybersecurity-fundamentals',
      title: "Cybersecurity Fundamentals",
      description: "Learn the essential skills to protect organizations from cyber threats",
      duration: "6 Months", 
      students: "30+ Students",
      level: "Intermediate",
      modules: [
        "Security Fundamentals", "Network Security", "Ethical Hacking", "Risk Assessment",
        "Incident Response", "Security Tools", "Compliance", "Digital Forensics"
      ],
      features: ["Certification Prep", "Real-world Projects", "Expert Instructors", "Career Guidance"]
    },
    {
      id: 'cloud-computing-essentials',
      title: "Cloud Computing Essentials",
      description: "Master cloud technologies with AWS, Azure, and Google Cloud platforms",
      duration: "8 Months",
      students: "20+ Students", 
      level: "Advanced",
      modules: [
        "Cloud Fundamentals", "AWS Core Services", "Azure Platform", "Google Cloud",
        "DevOps Integration", "Security in Cloud", "Cost Optimization", "Migration Strategies"
      ],
      features: ["Multi-Cloud Training", "Practical Labs", "Industry Projects", "Certification Support"]
    },
    {
      id: 'web-development-bootcamp',
      title: "Web Development Bootcamp",
      description: "Full-stack web development from frontend to backend technologies",
      duration: "10 Months",
      students: "35+ Students",
      level: "Beginner to Advanced", 
      modules: [
        "HTML/CSS/JavaScript", "React.js", "Node.js", "Database Design",
        "API Development", "DevOps Basics", "Testing", "Deployment"
      ],
      features: ["Portfolio Projects", "Mentorship", "Job Ready Skills", "Industry Connections"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-card-index]').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background dark-bg-stars">
      <Navigation />
      {/* Hero Section المحسن */}
      <section className="gradient-hero py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg dark:shadow-brand-teal/20">
              <BookOpen className="w-10 h-10 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
            Professional Training
            <span className="block text-gradient bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed">
            تطوير مهني متقدم مع برامج تدريبية رائدة في مجال تكنولوجيا المعلومات
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-teal to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Course - بتصميم ثلاثي الأبعاد */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">البرنامج المميز</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              برنامجنا الشامل الرائد في مجال إدارة تكنولوجيا المعلومات وقواعد البيانات
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-teal to-transparent rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="course-card course-card-float group relative overflow-hidden bg-gradient-to-br from-card to-card/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="md:flex relative z-10">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/8132ebd7-af03-45d0-9134-81727eed1e1a.png" 
                    alt="IT & Database Administration Diploma" 
                    className="course-image w-full h-80 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                <div className="md:w-1/2 p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-teal to-secondary text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
                      🌟 مميز
                    </Badge>
                    <Badge variant="outline" className="text-brand-teal border-brand-teal/30 bg-brand-teal/10 px-4 py-2 font-semibold">
                      مجاني
                    </Badge>
                  </div>
                  
                  <h3 className="course-title text-3xl font-bold mb-6 transition-all duration-300 leading-tight">
                    {courses[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {courses[0].description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 rounded-lg bg-muted/50 dark:bg-card-glow/20">
                      <Clock className="w-6 h-6 text-brand-teal mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">المدة</div>
                      <div className="font-semibold">{courses[0].duration}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50 dark:bg-card-glow/20">
                      <Users className="w-6 h-6 text-brand-teal mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">الطلاب</div>
                      <div className="font-semibold">{courses[0].students}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50 dark:bg-card-glow/20">
                      <Award className="w-6 h-6 text-brand-teal mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">المستوى</div>
                      <div className="font-semibold">{courses[0].level}</div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white hover:from-brand-teal hover:to-brand-blue transition-all duration-300 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 mb-6"
                    onClick={() => navigate(`/courses/${courses[0].id}`)}
                  >
                    سجل الآن
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                  
                  <div className="text-center pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">للاستفسار السريع عبر واتساب:</p>
                    <a 
                      href="https://wa.me/201553040088" 
                      className="text-brand-teal hover:text-brand-teal/80 font-medium text-sm hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      01553040088 📱
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses - تصميم متطور */}
      <section className="py-20 bg-muted dark:bg-gradient-night-section relative overflow-hidden">
        <div className="absolute inset-0 dark:dark-bg-stars"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">جميع البرامج التدريبية</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مجموعة متنوعة من البرامج التدريبية المتخصصة لتطوير مهاراتك التقنية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {courses.slice(1).map((course, index) => (
              <div
                key={index} 
                className={`course-card staggered-fade-in group ${visibleCards.has(index + 1) ? 'visible' : ''}`}
                data-card-index={index + 1}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative p-8 h-full">
                  {/* Floating elements background */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-teal/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-brand-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <Badge 
                        variant="outline" 
                        className="border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-3 py-1 font-semibold"
                      >
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          <Users className="w-4 h-4 text-brand-teal" />
                          <span className="font-medium">{course.students}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="course-title text-2xl font-bold mb-4 transition-all duration-300 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-lg">المواد الدراسية:</h4>
                      <div className="flex flex-wrap gap-3">
                        {course.modules.slice(0, 4).map((module, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs py-1 px-3 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors"
                          >
                            {module}
                          </Badge>
                        ))}
                        {course.modules.length > 4 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs py-1 px-3 border-dashed border-brand-teal/50 text-brand-teal"
                          >
                            +{course.modules.length - 4} مادة إضافية
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white hover:from-brand-teal hover:to-brand-blue transition-all duration-300 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                        onClick={() => navigate(`/courses/${course.id}`)}
                      >
                        سجل الآن
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                      
                      <div className="text-center pt-3 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-1">للاستفسار السريع عبر واتساب:</p>
                        <a 
                          href="https://wa.me/201553040088" 
                          className="text-brand-teal hover:text-brand-teal/80 font-medium text-xs hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          01553040088 📱
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - مجدد ومطور */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-teal/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient leading-tight">
              ابدأ رحلتك المهنية في تكنولوجيا المعلومات اليوم
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
              انضم إلى آلاف الخريجين الناجحين الذين غيروا مسارهم المهني مع برامج RALY التدريبية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                className="bg-gradient-to-r from-brand-blue to-brand-teal text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                تصفح جميع الكورسات
                <BookOpen className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-teal text-brand-teal bg-brand-teal/5 hover:bg-brand-teal hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                تواصل مع القبول
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </div>
            
            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-brand-teal mb-2">500+</div>
                <div className="text-muted-foreground">خريج ناجح</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-brand-teal mb-2">95%</div>
                <div className="text-muted-foreground">معدل التوظيف</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card/70 transition-all duration-300">
                <div className="text-3xl font-bold text-brand-teal mb-2">10+</div>
                <div className="text-muted-foreground">برنامج تدريبي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;