import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Shield, Clock, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const OracleCloudManagedServices = () => {
  const {
    language
  } = useLanguage();
  const content = {
    titleEn: 'Oracle Cloud Managed Services',
    titleAr: 'خدمات Oracle السحابية المُدارة: أداء لا مثيل له، راحة بال تامة',
    descriptionEn: 'Complete Oracle Cloud management services to optimize performance, enhance security, and reduce operational costs through our expertise.',
    descriptionAr: 'في عالم يتسارع فيه التحول الرقمي، أصبحت السحابة هي المحرك الأساسي للابتكار. تقدم RALY خدمات Oracle السحابية المُدارة لتمكين مؤسستك من الاستفادة القصوى من قوة Oracle Cloud، مع ضمان الأداء الأمثل، الأمان الفائق، والتوافر المستمر، كل ذلك بينما نتحمل عنك عبء الإدارة اليومية.',
    detailedContentAr: 'تتطلب إدارة بيئات Oracle السحابية المعقدة خبرة متخصصة ومراقبة مستمرة لضمان تحقيق أقصى استفادة من استثماراتك. في RALY، نقدم حزمة شاملة من خدمات الإدارة المُدارة التي تغطي جميع جوانب بيئة Oracle السحابية الخاصة بك، من البنية التحتية (IaaS) إلى المنصات (PaaS) والتطبيقات (SaaS). يركز فريقنا من المهندسين والخبراء المعتمدين على توفير حلول استباقية تضمن استقرار أنظمتك، وتحسين أدائها، وتأمين بياناتك، مما يتيح لفريقك التركيز على الابتكار ونمو الأعمال.',
    benefitsEn: ['24/7 proactive monitoring and support', 'Cloud infrastructure management', 'Performance and cost optimization', 'Patch and update management', 'Backup and recovery management', 'Security and compliance management'],
    benefitsAr: ['المراقبة الاستباقية والدعم على مدار الساعة: مراقبة مستمرة لأنظمتك السحابية والكشف عن أي مشكلات وحلها فورًا', 'إدارة البنية التحتية السحابية: إدارة شاملة للخوادم، التخزين، والشبكات في بيئة Oracle Cloud', 'تحسين الأداء والتكلفة: تحليل مستمر لتحسين أداء تطبيقاتك وتقليل التكاليف التشغيلية السحابية', 'إدارة التصحيحات والتحديثات: تطبيق التحديثات الأمنية والتصحيحات بانتظام لضمان أمان واستقرار الأنظمة', 'إدارة النسخ الاحتياطي والاستعادة: خطط قوية للنسخ الاحتياطي والاستعادة لضمان حماية بياناتك', 'إدارة الأمن والامتثال: تطبيق أفضل ممارسات الأمن السحابي وضمان الامتثال للمعايير واللوائح'],
    ctaEn: 'Request Cloud Services Consultation',
    ctaAr: 'اطلب استشارة حول خدمات Oracle السحابية المُدارة',
    whyChooseAr: 'نحن نقدم لك الخبرة، التكنولوجيا، والالتزام لضمان أن بيئة Oracle السحابية الخاصة بك تعمل بأقصى كفاءة وأمان، مما يحرر مواردك الداخلية للتركيز على الأهداف الاستراتيجية.'
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/201553040088', '_blank');
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Hero Section with Parallax Background */}
        <div className="relative min-h-[80vh] flex items-center">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(/lovable-uploads/51cc1635-443b-40c0-a48b-1aac60d50cf2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
            <div className="absolute inset-0 bg-background/40 dark:bg-background/50"></div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              {/* Oracle Managed Services Logo */}
              <div className="flex justify-center mb-8">
                
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {language === 'ar' ? content.titleAr : content.titleEn}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {language === 'ar' ? content.descriptionAr : content.descriptionEn}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'مراقبة مستمرة' : 'Monitoring'}
                  </div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'وقت التشغيل' : 'Uptime'}
                  </div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'عميل راضي' : 'Happy Clients'}
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'توفير التكلفة' : 'Cost Savings'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Oracle Partnership Section with Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <img src="/lovable-uploads/545ff129-4ec1-4c44-9a2f-628e3c015719.png" alt="Oracle Reseller & Approved Education Center" className="h-16 object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === 'ar' ? 'شريك Oracle معتمد' : 'Certified Oracle Partner'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'ar' ? 'نحن شريك معتمد من Oracle ومركز تعليم معتمد، مما يضمن حصولك على أعلى مستويات الخدمة والخبرة في إدارة بيئات Oracle السحابية.' : 'As a certified Oracle partner and approved education center, we ensure you receive the highest levels of service and expertise in managing Oracle Cloud environments.'}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img src="/lovable-uploads/999b04d1-24c3-4842-8d68-6217a3fcfd24.png" alt="Oracle Technology" className="w-full h-auto rounded-lg shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Detailed Content with Image Overlay */}
          {language === 'ar' && <div className="relative mb-20">
              <div className="absolute inset-0 opacity-5">
                <img src="/lovable-uploads/51cc1635-443b-40c0-a48b-1aac60d50cf2.png" alt="Background" className="w-full h-full object-cover" />
              </div>
              <Card className="service-card-enhanced relative z-10">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                    لماذا تحتاج إلى خدمات Oracle السحابية المُدارة؟
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {content.detailedContentAr}
                  </p>
                </CardContent>
              </Card>
            </div>}

          {/* Interactive Benefits Cards */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {language === 'ar' ? 'ما نقدمه في Oracle Cloud Managed Services:' : 'What We Offer in Oracle Cloud Managed Services:'}
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(language === 'ar' ? content.benefitsAr : content.benefitsEn).map((benefit, index) => <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl service-card-enhanced relative overflow-hidden">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {benefit}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Why Choose Us with Split Layout */}
          {language === 'ar' && <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  لماذا تختار RALY لخدمات Oracle السحابية المُدارة؟
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {content.whyChooseAr}
                </p>
                
                {/* Trust Indicators */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">خبراء معتمدون من Oracle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">أكثر من 10 سنوات خبرة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">دعم على مدار الساعة</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg"></div>
                <Card className="service-card-enhanced relative bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                      <div className="text-muted-foreground mb-4">معدل الثقة من العملاء</div>
                      <div className="text-sm text-muted-foreground">
                        "RALY تقدم خدمات استثنائية في إدارة Oracle Cloud بمستوى احترافي عالي"
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>}

          {/* CTA Section with Background Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{
            backgroundImage: 'url(/lovable-uploads/51cc1635-443b-40c0-a48b-1aac60d50cf2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="absolute inset-0 bg-primary/50 dark:bg-primary/60"></div>
            </div>
            
            <div className="relative z-10 text-center p-12 md:p-16 bg-[#2b425a]">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل تبحث عن شريك موثوق لإدارة بيئتك السحابية؟' : 'Looking for a Trusted Partner to Manage Your Cloud Environment?'}
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {language === 'ar' ? 'تواصل معنا اليوم لمعرفة كيف يمكن لـ RALY أن تبسط إدارة Oracle Cloud وتضمن لك راحة البال.' : 'Contact us today to learn how RALY can simplify Oracle Cloud management and give you peace of mind.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="text-lg px-8 py-3 font-semibold bg-transparent text-slate-50">
                  {language === 'ar' ? content.ctaAr : content.ctaEn}
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="text-lg px-8 py-3 border-white text-white hover:text-primary bg-transparent rounded">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Contact'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default OracleCloudManagedServices;