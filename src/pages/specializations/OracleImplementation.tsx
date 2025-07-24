import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Settings, Users, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const OracleImplementation = () => {
  const {
    language
  } = useLanguage();
  const benefits = ['التخطيط الشامل وإدارة المشاريع: وضع خطة تنفيذ مفصلة مع جدولة زمنية واضحة وإدارة احترافية للمشروع', 'التكوين والإعداد المخصص: ضبط أنظمة Oracle وفقاً لاحتياجات مؤسستك الخاصة وطبيعة عملياتها', 'ترحيل البيانات وتكامل الأنظمة: نقل البيانات بأمان وربط الأنظمة الجديدة مع البنية التقنية الموجودة', 'التدريب وإدارة التغيير: تدريب فرق العمل وإدارة عملية التحول لضمان التبني السلس للتقنيات الجديدة', 'تحسين الأداء والاختبار: ضمان الأداء الأمثل من خلال اختبارات شاملة وتحسينات مستمرة', 'الدعم بعد التنفيذ والصيانة: مرافقة مستمرة لضمان استقرار النظام وحل أي مشكلات قد تطرأ'];
  const handleWhatsApp = () => {
    window.open('https://wa.me/201553040088', '_blank');
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative overflow-hidden">
        <div className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
            <div className="absolute inset-0 bg-background/30 dark:bg-background/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {language === 'ar' ? 'تنفيذ وإطلاق أنظمة Oracle: رحلة نحو التحول الرقمي المتكامل' : 'Oracle Implementation & Deployment'}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {language === 'ar' ? 'في عصر التحول الرقمي، تعد أنظمة Oracle المحرك الأساسي للعديد من العمليات التجارية الحيوية. في RALY، نقدم خدمات تنفيذ وإطلاق أنظمة Oracle بخبرة متخصصة تضمن انتقالاً سلساً وفعالاً نحو حلول تقنية متطورة تواكب تطلعات مؤسستك.' : 'Expert Oracle implementation services to transform your business processes with seamless deployment and optimization.'}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <Settings className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
                  </div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'معدل النجاح' : 'Success Rate'}
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">60%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تحسن الكفاءة' : 'Efficiency Gain'}
                  </div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {language === 'ar' ? 'ما نقدمه في خدمات تنفيذ Oracle:' : 'What We Offer in Oracle Implementation:'}
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl service-card-enhanced relative overflow-hidden">
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

          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="absolute inset-0 bg-primary/70 dark:bg-primary/80"></div>
            </div>
            
            <div className="relative z-10 text-center p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل أنت مستعد لبدء رحلة التحول الرقمي؟' : 'Ready to Start Your Digital Transformation Journey?'}
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {language === 'ar' ? 'تواصل معنا اليوم واكتشف كيف يمكن لـ RALY أن تحول رؤيتك إلى واقع من خلال تنفيذ أنظمة Oracle بطريقة احترافية.' : 'Contact us today and discover how RALY can turn your vision into reality through professional Oracle implementation.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="text-lg px-8 py-3 font-semibold bg-transparent text-zinc-950">
                  {language === 'ar' ? 'اطلب استشارة حول تنفيذ أنظمة Oracle' : 'Request Oracle Implementation Consultation'}
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="px-8 py-3 border-white text-lg bg-transparent text-zinc-950">
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
export default OracleImplementation;