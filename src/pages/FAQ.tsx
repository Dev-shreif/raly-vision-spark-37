import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { HelpCircle, Search, ChevronDown, ChevronUp, Mail, Phone, MessageCircle, BookOpen, Settings, Users, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const FAQ = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about RALY's services",
      searchPlaceholder: "Search for answers...",
      categories: [
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "General Questions",
          faqs: [
            {
              question: "What is RALY?",
              answer: "RALY is a leading IT consulting, training, and solutions provider. We specialize in empowering businesses and professionals with cutting-edge technology expertise, offering comprehensive services from database administration to cloud computing."
            },
            {
              question: "Where is RALY located?",
              answer: "RALY is headquartered in Amman, Jordan, at 123 Tech Street. We serve clients locally and internationally, providing both on-site and remote services."
            },
            {
              question: "How long has RALY been in business?",
              answer: "RALY has been providing IT services for over 25 years, establishing ourselves as a trusted partner in the technology sector with extensive experience and proven track record."
            },
            {
              question: "What industries do you serve?",
              answer: "We serve a diverse range of industries including healthcare, finance, education, government, manufacturing, and startups. Our solutions are tailored to meet the specific needs of each sector."
            }
          ]
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Services & Solutions",
          faqs: [
            {
              question: "What IT services does RALY offer?",
              answer: "We offer comprehensive IT services including database administration, cloud computing, cybersecurity, web development, network management, IT consulting, system implementations, and data migration services."
            },
            {
              question: "Do you provide custom software development?",
              answer: "Yes, we specialize in custom software development tailored to your business needs. Our team can develop web applications, mobile apps, and enterprise solutions using the latest technologies."
            },
            {
              question: "What cloud platforms do you work with?",
              answer: "We work with major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and Oracle Cloud. We help businesses migrate, optimize, and manage their cloud infrastructure."
            },
            {
              question: "Do you offer 24/7 support?",
              answer: "Yes, we provide 24/7 support for critical systems and enterprise clients. Our support team is available around the clock to ensure your business operations run smoothly."
            }
          ]
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Training & Courses",
          faqs: [
            {
              question: "What training courses do you offer?",
              answer: "We offer a wide range of IT training courses including database management, cloud computing, cybersecurity, programming languages, project management, and professional certifications from leading technology vendors."
            },
            {
              question: "Are courses available online or in-person?",
              answer: "We offer both online and in-person training options. Our flexible approach allows you to choose the format that best suits your schedule and learning preferences."
            },
            {
              question: "Do you provide certification upon course completion?",
              answer: "Yes, all our courses come with completion certificates. We also prepare students for industry-standard certifications from vendors like Microsoft, Oracle, AWS, and Cisco."
            },
            {
              question: "Can you provide corporate training for teams?",
              answer: "Absolutely! We offer customized corporate training programs designed for teams and organizations. These can be delivered on-site or remotely based on your requirements."
            }
          ]
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Technical Support",
          faqs: [
            {
              question: "How can I get technical support?",
              answer: "You can reach our technical support team via email at support@raly.com, phone at +962 6 123 4567, or through our online support portal. We aim to respond to all inquiries within 2 hours during business hours."
            },
            {
              question: "What are your support hours?",
              answer: "Our standard support hours are Sunday to Thursday, 8:00 AM to 6:00 PM Jordan time. Premium support clients have access to 24/7 emergency support."
            },
            {
              question: "Do you offer remote troubleshooting?",
              answer: "Yes, we provide remote troubleshooting and support services. Our technicians can securely access your systems to diagnose and resolve issues quickly and efficiently."
            },
            {
              question: "What is your typical response time for issues?",
              answer: "Response times vary by service level: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), Low priority (48 hours). These times are for initial response during business hours."
            }
          ]
        }
      ],
      contactSection: {
        title: "Still Need Help?",
        description: "Can't find the answer you're looking for? Our team is here to help.",
        buttons: [
          { icon: <Mail className="w-4 h-4" />, text: "Email Support", action: "mailto:support@raly.com" },
          { icon: <Phone className="w-4 h-4" />, text: "Call Us", action: "tel:+96261234567" },
          { icon: <MessageCircle className="w-4 h-4" />, text: "Live Chat", action: "#" }
        ]
      }
    },
    ar: {
      title: "الأسئلة الشائعة",
      subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدمات RALY",
      searchPlaceholder: "ابحث عن الإجابات...",
      categories: [
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "أسئلة عامة",
          faqs: [
            {
              question: "ما هي RALY؟",
              answer: "RALY هي مزود رائد لخدمات الاستشارات التقنية والتدريب والحلول. نحن متخصصون في تمكين الشركات والمهنيين بخبرة تقنية متطورة، نقدم خدمات شاملة من إدارة قواعد البيانات إلى الحوسبة السحابية."
            },
            {
              question: "أين تقع RALY؟",
              answer: "يقع المقر الرئيسي لـ RALY في عمان، الأردن، في 123 شارع التقنية. نخدم العملاء محلياً ودولياً، نقدم خدمات في الموقع وعن بُعد."
            },
            {
              question: "منذ متى تعمل RALY؟",
              answer: "تقدم RALY خدمات تقنية المعلومات لأكثر من 25 عاماً، وقد رسخنا أنفسنا كشريك موثوق في قطاع التكنولوجيا بخبرة واسعة وسجل حافل."
            },
            {
              question: "ما هي الصناعات التي تخدمونها؟",
              answer: "نخدم مجموعة متنوعة من الصناعات بما في ذلك الرعاية الصحية والتمويل والتعليم والحكومة والتصنيع والشركات الناشئة. حلولنا مصممة لتلبية الاحتياجات الخاصة لكل قطاع."
            }
          ]
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "الخدمات والحلول",
          faqs: [
            {
              question: "ما هي خدمات تقنية المعلومات التي تقدمها RALY؟",
              answer: "نقدم خدمات تقنية شاملة بما في ذلك إدارة قواعد البيانات والحوسبة السحابية والأمن السيبراني وتطوير الويب وإدارة الشبكات والاستشارات التقنية وتنفيذ الأنظمة وخدمات ترحيل البيانات."
            },
            {
              question: "هل تقدمون تطوير برمجيات مخصصة؟",
              answer: "نعم، نحن متخصصون في تطوير البرمجيات المخصصة المصممة لاحتياجات عملك. يمكن لفريقنا تطوير تطبيقات الويب والتطبيقات المحمولة وحلول المؤسسات باستخدام أحدث التقنيات."
            },
            {
              question: "ما هي منصات السحابة التي تتعاملون معها؟",
              answer: "نعمل مع منصات السحابة الرئيسية بما في ذلك AWS وMicrosoft Azure وGoogle Cloud Platform وOracle Cloud. نساعد الشركات على الترحيل والتحسين وإدارة البنية التحتية السحابية."
            },
            {
              question: "هل تقدمون دعماً على مدار الساعة؟",
              answer: "نعم، نقدم دعماً على مدار الساعة للأنظمة الحرجة وعملاء المؤسسات. فريق الدعم لدينا متاح على مدار الساعة لضمان سير عمليات عملك بسلاسة."
            }
          ]
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "التدريب والدورات",
          faqs: [
            {
              question: "ما هي دورات التدريب التي تقدمونها؟",
              answer: "نقدم مجموعة واسعة من دورات التدريب التقني بما في ذلك إدارة قواعد البيانات والحوسبة السحابية والأمن السيبراني ولغات البرمجة وإدارة المشاريع والشهادات المهنية من كبار موردي التكنولوجيا."
            },
            {
              question: "هل الدورات متاحة عبر الإنترنت أم حضورياً؟",
              answer: "نقدم خيارات التدريب عبر الإنترنت وحضورياً. نهجنا المرن يتيح لك اختيار التنسيق الذي يناسب جدولك وتفضيلاتك في التعلم."
            },
            {
              question: "هل تقدمون شهادة عند إكمال الدورة؟",
              answer: "نعم، جميع دوراتنا تأتي مع شهادات إكمال. نحن أيضاً نعد الطلاب للشهادات المعيارية في الصناعة من موردين مثل Microsoft وOracle وAWS وCisco."
            },
            {
              question: "هل يمكنكم تقديم تدريب مؤسسي للفرق؟",
              answer: "بالتأكيد! نقدم برامج تدريب مؤسسية مخصصة مصممة للفرق والمنظمات. يمكن تقديمها في الموقع أو عن بُعد حسب متطلباتك."
            }
          ]
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "الدعم التقني",
          faqs: [
            {
              question: "كيف يمكنني الحصول على دعم تقني؟",
              answer: "يمكنك الوصول إلى فريق الدعم التقني لدينا عبر البريد الإلكتروني على support@raly.com أو الهاتف على +962 6 123 4567 أو من خلال بوابة الدعم الإلكترونية. نهدف للرد على جميع الاستفسارات خلال ساعتين في ساعات العمل."
            },
            {
              question: "ما هي ساعات الدعم لديكم؟",
              answer: "ساعات الدعم العادية لدينا من الأحد إلى الخميس، من 8:00 صباحاً إلى 6:00 مساءً بتوقيت الأردن. عملاء الدعم المميز لديهم وصول لدعم الطوارئ على مدار الساعة."
            },
            {
              question: "هل تقدمون استكشاف الأخطاء عن بُعد؟",
              answer: "نعم، نقدم خدمات استكشاف الأخطاء والدعم عن بُعد. يمكن لفنيينا الوصول الآمن إلى أنظمتك لتشخيص وحل المشاكل بسرعة وكفاءة."
            },
            {
              question: "ما هو وقت الاستجابة المعتاد للمشاكل؟",
              answer: "أوقات الاستجابة تختلف حسب مستوى الخدمة: المشاكل الحرجة (ساعة واحدة)، الأولوية العالية (4 ساعات)، الأولوية المتوسطة (24 ساعة)، الأولوية المنخفضة (48 ساعة). هذه الأوقات للاستجابة الأولية خلال ساعات العمل."
            }
          ]
        }
      ],
      contactSection: {
        title: "ما زلت تحتاج مساعدة؟",
        description: "لا تستطيع العثور على الإجابة التي تبحث عنها؟ فريقنا هنا للمساعدة.",
        buttons: [
          { icon: <Mail className="w-4 h-4" />, text: "دعم البريد الإلكتروني", action: "mailto:support@raly.com" },
          { icon: <Phone className="w-4 h-4" />, text: "اتصل بنا", action: "tel:+96261234567" },
          { icon: <MessageCircle className="w-4 h-4" />, text: "دردشة مباشرة", action: "#" }
        ]
      }
    }
  };

  const currentContent = content[language];

  // Filter FAQs based on search term
  const filteredCategories = currentContent.categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {currentContent.subtitle}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder={currentContent.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="overflow-hidden">
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {category.icon}
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 100 + faqIndex;
                        const isOpen = openItems.includes(globalIndex);
                        
                        return (
                          <Collapsible key={faqIndex} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                            <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors border-b border-border/50 last:border-b-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-left">{faq.question}</h3>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                                )}
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      })}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Contact Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{currentContent.contactSection.title}</h3>
                <p className="text-muted-foreground mb-8">{currentContent.contactSection.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {currentContent.contactSection.buttons.map((button, index) => (
                    <Button key={index} variant="outline" asChild>
                      <a href={button.action}>
                        {button.icon}
                        {button.text}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;