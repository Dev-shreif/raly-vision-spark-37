import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Link, Cloud, Zap, Shield, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/oracle-integration-cloud-hero.jpg';
import architectureImage from '@/assets/integration-architecture.jpg';

const OracleIntegrationCloud = () => {
  const { language } = useLanguage();

  const content = {
    titleEn: 'Oracle Integration Cloud',
    titleAr: 'تكامل Oracle السحابي: ربط أنظمتك لتعزيز الكفاءة والابتكار',
    descriptionEn: 'Seamless integration solutions connecting your Oracle systems with third-party applications and services.',
    descriptionAr: 'في بيئة الأعمال الحديثة، أصبح تكامل الأنظمة المتنوعة أمرًا حتميًا لتحقيق الكفاءة التشغيلية والابتكار. تقدم RALY حلول تكامل Oracle السحابي (OIC) لربط تطبيقاتك وبياناتك بسلاسة، سواء كانت داخلية أو سحابية، مما يضمن تدفق المعلومات بشكل موحد ويعزز قدرتك على اتخاذ قرارات مستنيرة.',
    detailedContentAr: 'تعتبر Oracle Integration Cloud (OIC) منصة قوية ومتكاملة توفر إمكانيات واسعة لتكامل التطبيقات، أتمتة العمليات، وإدارة واجهات برمجة التطبيقات (APIs). في RALY، نمتلك الخبرة اللازمة لتصميم وتنفيذ حلول OIC مخصصة تلبي احتياجات التكامل الفريدة لمؤسستك. سواء كنت تسعى لربط تطبيقات Oracle مع أنظمة طرف ثالث، أو أتمتة سير العمل بين الأقسام المختلفة، أو بناء واجهات برمجة تطبيقات قوية لتمكين الابتكار، فإن فريقنا سيضمن لك تكاملًا سلسًا وفعالًا.',
    benefitsEn: [
      'Application Integration',
      'Process Automation',
      'API Management',
      'Data Integration',
      'Monitoring and Support'
    ],
    benefitsAr: [
      'تكامل التطبيقات (Application Integration): ربط سلس بين تطبيقات Oracle وتطبيقات الطرف الثالث (سحابية أو داخلية)',
      'أتمتة العمليات (Process Automation): تصميم وأتمتة سير العمل المعقدة عبر مختلف الأنظمة والأقسام',
      'إدارة واجهات برمجة التطبيقات (API Management): بناء، نشر، وتأمين واجهات برمجة التطبيقات لتمكين التكامل والابتكار',
      'تكامل البيانات (Data Integration): مزامنة ونقل البيانات بين الأنظمة المختلفة بكفاءة ودقة',
      'المراقبة والدعم: مراقبة مستمرة لحلول التكامل وتقديم الدعم الفني لضمان الأداء الأمثل'
    ],
    ctaEn: 'Request Integration Consultation',
    ctaAr: 'اطلب استشارة حول تكامل Oracle السحابي',
    whyChooseAr: 'خبرتنا في OIC، وفهمنا العميق لمتطلبات التكامل، والتزامنا بتقديم حلول قوية وموثوقة، تجعلنا الشريك المثالي لتبسيط بيئة تكنولوجيا المعلومات المعقدة لديك وتعزيز كفاءة أعمالك.'
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/201553040088', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-[80vh] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-background/30 dark:bg-background/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Link className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {language === 'ar' ? content.titleAr : content.titleEn}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {language === 'ar' ? content.descriptionAr : content.descriptionEn}
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <Cloud className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'نظام متكامل' : 'Systems Integrated'}
                  </div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'معدل التشغيل' : 'Uptime Rate'}
                  </div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'الأمان المضمون' : 'Security Assured'}
                  </div>
                </div>
                <div className="text-center">
                  <Activity className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'المراقبة المستمرة' : 'Monitoring'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">

          {/* Overview Section with Image */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {language === 'ar' ? 'ربط أنظمتك بذكاء وكفاءة' : 'Connect Your Systems Intelligently'}
                </h2>
                {language === 'ar' && (
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {content.detailedContentAr}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {language === 'ar' ? 'تكامل سحابي' : 'Cloud Integration'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? 'ربط متقدم' : 'Advanced Connectivity'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {language === 'ar' ? 'أمان عالي' : 'High Security'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? 'حماية متقدمة' : 'Advanced Protection'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={architectureImage}
                  alt="Integration Architecture"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {language === 'ar' ? 'ما نقدمه في Oracle Integration Cloud:' : 'What We Offer in Oracle Integration Cloud:'}
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(language === 'ar' ? content.benefitsAr : content.benefitsEn).map((benefit, index) => (
                <Card 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl service-card-enhanced relative overflow-hidden"
                >
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
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-primary/70 dark:bg-primary/80"></div>
            </div>
            
            <div className="relative z-10 text-center p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل تواجه تحديات في تكامل أنظمتك؟' : 'Facing Challenges in System Integration?'}
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {language === 'ar' 
                  ? 'تواصل مع RALY اليوم لاستكشاف كيف يمكن لحلول Oracle Integration Cloud أن تربط عالمك الرقمي وتدفع أعمالك إلى الأمام.'
                  : 'Contact RALY today to explore how Oracle Integration Cloud solutions can connect your digital world and drive your business forward.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 font-semibold">
                  {language === 'ar' ? content.ctaAr : content.ctaEn}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Contact'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OracleIntegrationCloud;