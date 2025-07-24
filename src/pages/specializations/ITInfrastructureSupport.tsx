import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ITInfrastructureSupport = () => {
  const { language } = useLanguage();

  const content = {
    titleEn: 'IT Infrastructure & Technical Support',
    titleAr: 'البنية التحتية لتكنولوجيا المعلومات والدعم الفني: أساس متين لعملياتك',
    descriptionEn: 'We provide specialized consulting in designing, implementing, and managing IT infrastructure, plus comprehensive technical support services to ensure business continuity and system efficiency.',
    descriptionAr: 'تعتبر البنية التحتية القوية والموثوقة لتكنولوجيا المعلومات هي العمود الفقري لأي عمل ناجح. تقدم RALY استشارات متخصصة وخدمات دعم فني شاملة لضمان أن تكون بنيتك التحتية قوية، آمنة، وفعالة، مما يضمن استمرارية عملك ويقلل من التوقفات غير المخطط لها.',
    detailedContentAr: 'في RALY، ندرك أن البنية التحتية لتقنية المعلومات تتجاوز مجرد الأجهزة والبرمجيات؛ إنها تتعلق بضمان بيئة عمل مستقرة، آمنة، وقابلة للتوسع تدعم أهدافك التجارية. يقدم فريقنا من الخبراء استشارات شاملة في تصميم، تنفيذ، وإدارة البنى التحتية المعقدة، بدءًا من الشبكات والخوادم وأنظمة التشغيل، وصولًا إلى حلول التخزين والنسخ الاحتياطي.',
    benefitsEn: [
      'Infrastructure consulting and design',
      'Hardware management',
      'Operating systems management',
      'Network design and management',
      'Troubleshooting',
      'End-user technical support',
      'Cybersecurity for infrastructure'
    ],
    benefitsAr: [
      'استشارات وتصميم البنية التحتية: تصميم حلول بنية تحتية مخصصة تلبي احتياجات عملك',
      'إدارة الأجهزة (Hardware Management): استشارات في اختيار، تركيب، وصيانة الخوادم، أجهزة التخزين، والمعدات الأخرى',
      'إدارة أنظمة التشغيل (Operating Systems Management): تركيب، تكوين، وتأمين أنظمة التشغيل (Windows, Linux, Unix)',
      'تصميم وإدارة الشبكات (Networking Basics): تصميم، تنفيذ، وإدارة الشبكات المحلية والواسعة، بما في ذلك أجهزة التوجيه والمحولات والجدران النارية',
      'استكشاف الأخطاء وإصلاحها (Troubleshooting): تحديد وحل المشكلات التقنية بسرعة وفعالية لتقليل وقت التوقف',
      'الدعم الفني للمستخدمين النهائيين: تقديم الدعم الفني المباشر للموظفين لحل مشاكلهم اليومية',
      'الأمن السيبراني للبنية التحتية: تطبيق أفضل ممارسات الأمن لحماية بنيتك التحتية من التهديدات'
    ],
    ctaEn: 'Request Infrastructure Consultation',
    ctaAr: 'اطلب استشارة حول البنية التحتية والدعم الفني',
    whyChooseAr: 'نحن نقدم خبرة متكاملة في بناء وإدارة البنى التحتية القوية، مع التزامنا بتقديم دعم فني موثوق يضمن استمرارية عملك وسلامة بياناتك.'
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
            <span className="text-4xl">🖥️</span>
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
              {language === 'ar' ? 'ما نقدمه في IT Infrastructure & Support:' : 'What We Offer in IT Infrastructure & Support:'}
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
                لماذا تختار RALY لـ IT Infrastructure & Support؟
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
              {language === 'ar' ? 'هل تبحث عن أساس تقني متين لعملياتك؟' : 'Looking for a Solid Technical Foundation for Your Operations?'}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {language === 'ar' 
                ? 'تواصل مع RALY اليوم للحصول على استشارة حول البنية التحتية لتكنولوجيا المعلومات والدعم الفني.'
                : 'Contact RALY today for consultation on IT infrastructure and technical support.'
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

export default ITInfrastructureSupport;