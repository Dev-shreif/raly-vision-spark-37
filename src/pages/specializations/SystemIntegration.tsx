import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Network, Workflow, Database, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/system-integration-hero.jpg';
import enterpriseImage from '@/assets/enterprise-integration.jpg';

const SystemIntegration = () => {
  const { language } = useLanguage();

  const content = {
    titleEn: 'System Integration',
    titleAr: 'تكامل الأنظمة: توحيد بيئتك التقنية لتعزيز الكفاءة والابتكار',
    descriptionEn: 'Comprehensive system integration services to connect disparate systems and create unified business processes.',
    descriptionAr: 'في بيئة الأعمال المعاصرة، غالبًا ما تعمل المؤسسات بأنظمة وتطبيقات متعددة ومتباينة. تقدم RALY خدمات تكامل الأنظمة لربط هذه المكونات المختلفة بسلاسة، مما يخلق بيئة تقنية موحدة ومتماسكة تعزز تدفق المعلومات، وتحسن الكفاءة التشغيلية، وتدعم اتخاذ القرارات المستنيرة.',
    detailedContentAr: 'تكامل الأنظمة هو مفتاح التخلص من الصوامع المعلوماتية وتحقيق رؤية شاملة لعملياتك. في RALY، نمتلك الخبرة المنهجية والتقنية لتصميم وتنفيذ حلول تكامل معقدة، سواء كانت بين أنظمة داخلية (On-Premise) أو سحابية (Cloud-based)، أو مزيجًا منهما (Hybrid). نحن نساعدك على دمج أنظمة تخطيط موارد المؤسسات (ERP)، إدارة علاقات العملاء (CRM)، إدارة سلسلة التوريد (SCM)، وغيرها من التطبيقات الحيوية، لضمان تبادل البيانات بسلاسة ودون أخطاء.',
    benefitsEn: [
      'Enterprise Application Integration (EAI)',
      'Data Integration',
      'Cloud Integration',
      'API Integration',
      'Business Process Automation (BPA)',
      'Monitoring and Maintenance'
    ],
    benefitsAr: [
      'تكامل تطبيقات المؤسسات (EAI): ربط سلس بين تطبيقات الأعمال المختلفة داخل مؤسستك',
      'تكامل البيانات (Data Integration): مزامنة وتحويل البيانات بين الأنظمة لضمان الاتساق والدقة',
      'تكامل السحابة (Cloud Integration): ربط الأنظمة الداخلية مع التطبيقات والخدمات السحابية',
      'تكامل واجهات برمجة التطبيقات (API Integration): تصميم وتنفيذ واجهات برمجة تطبيقات لتمكين الاتصال بين الأنظمة',
      'أتمتة العمليات التجارية (BPA): أتمتة سير العمل المعقدة عبر الأنظمة المتكاملة',
      'المراقبة والصيانة: مراقبة مستمرة لحلول التكامل وتقديم الدعم الفني لضمان الأداء الأمثل'
    ],
    ctaEn: 'Request Integration Consultation',
    ctaAr: 'اطلب استشارة حول تكامل الأنظمة',
    whyChooseAr: 'نحن نقدم خبرة متخصصة في ربط الأنظمة المعقدة، مع التركيز على تقديم حلول قوية، آمنة، وفعالة تزيد من كفاءة عملياتك وتدعم نمو أعمالك.'
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/201553040088', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚙️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'ar' ? content.titleAr : content.titleEn}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'ar' ? content.descriptionAr : content.descriptionEn}
          </p>
        </div>

        {/* Detailed Content */}
        {language === 'ar' && (
          <Card className="service-card-enhanced mb-12">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {content.detailedContentAr}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Benefits Section */}
        <Card className="service-card-enhanced mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === 'ar' ? 'ما نقدمه في System Integration:' : 'What We Offer in System Integration:'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {(language === 'ar' ? content.benefitsAr : content.benefitsEn).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        {language === 'ar' && (
          <Card className="service-card-enhanced mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                لماذا تختار RALY لتكامل الأنظمة؟
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg text-center">
                {content.whyChooseAr}
              </p>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <Card className="service-card-enhanced text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'هل تعاني من تشتت أنظمتك؟' : 'Struggling with Fragmented Systems?'}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {language === 'ar' 
                ? 'تواصل مع RALY اليوم لاستكشاف كيف يمكن لحلول تكامل الأنظمة أن توحد بيئتك التقنية وتطلق العنان لإمكانياتك الكاملة.'
                : 'Contact RALY today to explore how system integration solutions can unify your technical environment and unleash your full potential.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="cta-button text-lg px-8 py-3">
                {language === 'ar' ? content.ctaAr : content.ctaEn}
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsApp}
                className="text-lg px-8 py-3 border-accent text-accent hover:bg-accent hover:text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Contact'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SystemIntegration;