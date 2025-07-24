import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Award, ArrowLeft, CheckCircle, Star, Calendar, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
const CourseDetail = () => {
  const {
    courseId
  } = useParams();
  const navigate = useNavigate();
  const [stickyButton, setStickyButton] = useState(false);
  const courses = [{
    id: 'it-database-diploma',
    title: "IT & Database Administration Diploma",
    description: "Comprehensive diploma program covering modern IT administration and database management",
    fullDescription: "Master the fundamentals of IT infrastructure and database administration with our comprehensive 12-month diploma program. This course combines theoretical knowledge with hands-on practice to prepare you for a successful career in IT.",
    duration: "12 Months",
    students: "25+ Students",
    level: "Professional",
    price: "Free",
    rating: 4.9,
    image: "/lovable-uploads/8132ebd7-af03-45d0-9134-81727eed1e1a.png",
    modules: [{
      title: "Foundation Skills",
      lessons: ["English for IT Professionals", "ICDL Certification", "Professional Communication", "Technical Writing"]
    }, {
      title: "Operating Systems",
      lessons: ["Linux+ Fundamentals", "System Administration", "Shell Scripting", "Performance Tuning"]
    }, {
      title: "Database Management",
      lessons: ["SQL Fundamentals", "Database Design", "PL/SQL Programming", "Database Administration (DBA)"]
    }, {
      title: "IT Infrastructure",
      lessons: ["CompTIA IT Fundamentals", "Hardware & Software", "A+ Certification Prep", "Troubleshooting"]
    }, {
      title: "Networking",
      lessons: ["Network+ Fundamentals", "TCP/IP", "Network Security", "Wireless Technologies"]
    }, {
      title: "Security & Web Development",
      lessons: ["Security+ Fundamentals", "WebLogic Administration", "Oracle APEX Development", "Web Applications"]
    }],
    features: ["Free", "Hands-on Labs", "Industry Certified", "Job Placement Support"],
    outcomes: ["Administer Linux and Windows systems professionally", "Design and manage complex databases", "Implement network security best practices", "Develop web applications using Oracle APEX", "Earn industry-recognized certifications", "Secure job placement assistance"],
    instructors: [{
      name: "Ahmed Mahmoud",
      title: "Senior Database Administrator",
      experience: "10+ years"
    }, {
      name: "Sara Hassan",
      title: "IT Infrastructure Specialist",
      experience: "8+ years"
    }],
    testimonials: [{
      name: "Mohamed Ali",
      role: "Graduate 2024",
      text: "This program completely transformed my career. I went from entry-level to Senior DBA in just 6 months after graduation."
    }, {
      name: "Fatima Ahmed",
      role: "Graduate 2023",
      text: "The hands-on approach and expert instructors made all the difference. Highly recommended!"
    }]
  }, {
    id: 'cybersecurity-fundamentals',
    title: "Cybersecurity Fundamentals",
    description: "Learn the essential skills to protect organizations from cyber threats",
    fullDescription: "Develop expertise in cybersecurity with our comprehensive 6-month program. Learn to identify, prevent, and respond to cyber threats using industry-standard tools and methodologies.",
    duration: "6 Months",
    students: "30+ Students",
    level: "Intermediate",
    price: "$1,200",
    rating: 4.8,
    modules: [{
      title: "Security Fundamentals",
      lessons: ["Cybersecurity Basics", "Threat Landscape", "Risk Assessment", "Security Frameworks"]
    }, {
      title: "Network Security",
      lessons: ["Firewalls & IDS", "VPN Technologies", "Network Monitoring", "Incident Response"]
    }, {
      title: "Ethical Hacking",
      lessons: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering", "Web Application Security"]
    }, {
      title: "Digital Forensics",
      lessons: ["Evidence Collection", "Forensic Tools", "Incident Investigation", "Legal Aspects"]
    }],
    features: ["Certification Prep", "Real-world Projects", "Expert Instructors", "Career Guidance"],
    outcomes: ["Implement comprehensive security strategies", "Conduct professional penetration testing", "Handle security incidents effectively", "Understand compliance requirements"],
    instructors: [{
      name: "Omar Khalil",
      title: "Cybersecurity Consultant",
      experience: "12+ years"
    }],
    testimonials: [{
      name: "Layla Ibrahim",
      role: "Graduate 2024",
      text: "Excellent program with real-world scenarios. Now working as a Security Analyst!"
    }]
  }, {
    id: 'cloud-computing-essentials',
    title: "Cloud Computing Essentials",
    description: "Master cloud technologies with AWS, Azure, and Google Cloud platforms",
    fullDescription: "Become a cloud expert with our multi-cloud training program. Learn to design, deploy, and manage cloud solutions across major platforms.",
    duration: "8 Months",
    students: "20+ Students",
    level: "Advanced",
    price: "$1,500",
    rating: 4.9,
    modules: [{
      title: "Cloud Fundamentals",
      lessons: ["Cloud Computing Basics", "Service Models", "Deployment Models", "Cloud Economics"]
    }, {
      title: "AWS Platform",
      lessons: ["EC2 & Storage", "Networking & Security", "Serverless Computing", "DevOps on AWS"]
    }, {
      title: "Microsoft Azure",
      lessons: ["Azure Services", "Identity Management", "Monitoring & Security", "Azure DevOps"]
    }, {
      title: "Google Cloud",
      lessons: ["GCP Services", "Data Analytics", "Machine Learning", "Kubernetes Engine"]
    }],
    features: ["Multi-Cloud Training", "Practical Labs", "Industry Projects", "Certification Support"],
    outcomes: ["Design scalable cloud architectures", "Implement DevOps practices", "Optimize cloud costs", "Manage multi-cloud environments"],
    instructors: [{
      name: "Youssef Nasser",
      title: "Cloud Solutions Architect",
      experience: "9+ years"
    }],
    testimonials: [{
      name: "Karim Farouk",
      role: "Graduate 2023",
      text: "Comprehensive coverage of all major cloud platforms. Now I'm a Cloud Architect!"
    }]
  }, {
    id: 'web-development-bootcamp',
    title: "Web Development Bootcamp",
    description: "Full-stack web development from frontend to backend technologies",
    fullDescription: "Transform into a full-stack developer with our intensive 10-month bootcamp. Learn modern web technologies and build real-world projects.",
    duration: "10 Months",
    students: "35+ Students",
    level: "Beginner to Advanced",
    price: "$1,800",
    rating: 4.8,
    modules: [{
      title: "Frontend Development",
      lessons: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Responsive Design"]
    }, {
      title: "Backend Development",
      lessons: ["Node.js", "Express.js", "RESTful APIs", "Authentication & Authorization"]
    }, {
      title: "Database & DevOps",
      lessons: ["MongoDB & SQL", "Git & GitHub", "Docker Basics", "CI/CD Pipelines"]
    }, {
      title: "Advanced Topics",
      lessons: ["Testing", "Performance Optimization", "Security Best Practices", "Deployment"]
    }],
    features: ["Portfolio Projects", "Mentorship", "Job Ready Skills", "Industry Connections"],
    outcomes: ["Build modern web applications", "Work with databases effectively", "Implement testing strategies", "Deploy applications professionally"],
    instructors: [{
      name: "Nour Hassan",
      title: "Senior Full-Stack Developer",
      experience: "7+ years"
    }],
    testimonials: [{
      name: "Sara Ibrahim",
      role: "Graduate 2023",
      text: "Amazing bootcamp! Landed my dream job as a Full-Stack Developer."
    }]
  }];
  const course = courses.find(c => c.id === courseId);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setStickyButton(scrollPosition > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!course) {
    return <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/courses')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-8 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <Button variant="outline" onClick={() => navigate('/courses')} className="mb-4 text-white border-white/30 hover:bg-white hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 -mr-3 relative z-10 px-[27px] py-[16px] my-[21px]">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-white/20 text-white border-white/30">{course.level}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6 text-white/90">{course.fullDescription}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs opacity-90">Duration</div>
                  <div className="font-semibold text-sm">{course.duration}</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs opacity-90">Students</div>
                  <div className="font-semibold text-sm">{course.students}</div>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs opacity-90">Rating</div>
                  <div className="font-semibold text-sm">{course.rating}/5</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs opacity-90">Level</div>
                  <div className="font-semibold text-sm">{course.level}</div>
                </div>
              </div>
              
              <Button size="lg" className="text-primary bg-[#063a4d] w-full">
                Enroll Now - {course.price}
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </div>
            
            <div className="relative -ml-3">
              {course.image && <img src={course.image} alt={course.title} className="rounded-lg shadow-2xl w-full" />}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gradient">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-brand-blue text-slate-500">{outcome}</span>
                  </div>)}
              </div>
            </section>

            {/* Course Content */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gradient">Course Content</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {course.modules.map((module, index) => <AccordionItem key={index} value={`module-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary">
                      <div className="flex items-center gap-3">
                        <Play className="w-5 h-5" />
                        <span className="font-semibold">{module.title}</span>
                        <Badge variant="outline">{module.lessons.length} lessons</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 mt-4">
                        {module.lessons.map((lesson, lessonIndex) => <div key={lessonIndex} className="flex items-center gap-3 py-2">
                            <Play className="w-4 h-4 text-brand-teal" />
                            <span className="text-brand-blue">{lesson}</span>
                          </div>)}
                      </div>
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </section>

            {/* Instructors */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gradient">Meet Your Instructors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {course.instructors.map((instructor, index) => <Card key={index} className="course-card">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{instructor.name}</CardTitle>
                      <p className="text-primary font-medium">{instructor.title}</p>
                      <p className="text-sm text-muted-foreground">{instructor.experience} experience</p>
                    </CardHeader>
                  </Card>)}
              </div>
            </section>

            {/* Student Testimonials */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gradient">Student Success Stories</h2>
              <div className="space-y-6">
                {course.testimonials.map((testimonial, index) => <Card key={index} className="course-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="mb-4 text-lg leading-relaxed">"{testimonial.text}"</p>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="course-card sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Course Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.features.map((feature, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal" />
                    <span className="text-brand-blue">{feature}</span>
                  </div>)}
                
                <div className="pt-6 border-t">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Start Date: Flexible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Certificate: Yes</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-primary text-primary-foreground hover-lift">
                  Enroll Now - {course.price}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Sticky Enroll Button */}
      {stickyButton && <div className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="bg-primary text-primary-foreground shadow-2xl hover-lift">
            Enroll Now - {course.price}
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Button>
        </div>}

      <Footer />
    </div>;
};
export default CourseDetail;