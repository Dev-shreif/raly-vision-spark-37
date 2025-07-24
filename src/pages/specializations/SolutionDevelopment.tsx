import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Code, Rocket, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/solution-development-hero.jpg';
import lifecycleImage from '@/assets/development-lifecycle.jpg';

const SolutionDevelopment = () => {
  const { language } = useLanguage();

  const content = {
    titleEn: 'Solution Development',
    titleAr: 'تطوير الحلول: بناء تطبيقات مبتكرة تدفع أعمالك إلى الأمام',
    descriptionEn: 'Custom solution development tailored to your business needs using the latest technologies and best practices.',
    descriptionAr: 'في RALY، نؤمن بأن الحلول البرمجية المخصصة هي مفتاح التميز في السوق التنافسي. نقدم خدمات تطوير حلول متكاملة، من الفكرة الأولية وحتى النشر والدعم، لإنشاء تطبيقات مبتكرة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك الاستراتيجية.',
    detailedContentAr: 'سواء كنت بحاجة إلى تطبيق ويب مخصص، تطبيق جوال، أو نظام مؤسسي معقد، فإن فريق RALY من المطورين والمهندسين ذوي الخبرة يمتلك القدرة على تحويل رؤيتك إلى واقع. نحن نتبع منهجيات تطوير رشيقة (Agile) تضمن المرونة، الشفافية، والتسليم المتكرر، مما يمكنك من متابعة التقدم وتقديم الملاحظات في كل مرحلة من مراحل المشروع.',
    benefitsEn: [
      'Web application development',
      'Mobile application development',
      'Enterprise systems development',
      'Database development',
      'API development',
      'Testing and quality assurance'
    ],
    benefitsAr: [
      'تطوير تطبيقات الويب: بناء تطبيقات ويب قوية ومتجاوبة باستخدام أحدث التقنيات',
      'تطوير تطبيقات الجوال: تصميم وتطوير تطبيقات جوال مبتكرة لأنظمة iOS و Android',
      'تطوير الأنظمة المؤسسية: بناء أنظمة معقدة لإدارة الموارد، العمليات، والبيانات',
      'تطوير قواعد البيانات: تصميم وتطوير قواعد بيانات قوية ومحسنة للأداء',
      'تطوير واجهات برمجة التطبيقات (APIs): بناء واجهات برمجة تطبيقات آمنة وقابلة للتوسع لتمكين التكامل',
      'اختبار وضمان الجودة: إجراء اختبارات شاملة لضمان جودة وأداء الحلول المطورة'
    ],
    ctaEn: 'Request Development Consultation',
    ctaAr: 'اطلب استشارة حول تطوير الحلول',
    whyChooseAr: 'نحن نجمع بين الإبداع التقني والفهم العميق للأعمال لتقديم حلول برمجية مخصصة لا تلبي توقعاتك فحسب، بل تتجاوزها، مما يمنحك الأدوات اللازمة للنجاح في العصر الرقمي.'
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
            <span className="text-4xl">💻</span>
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
              {language === 'ar' ? 'ما نقدمه في Solution Development:' : 'What We Offer in Solution Development:'}
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
                لماذا تختار RALY لتطوير الحلول؟
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
              {language === 'ar' ? 'هل لديك فكرة تحتاج إلى تحويلها لتطبيق؟' : 'Have an Idea That Needs to Be Turned into an Application?'}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {language === 'ar' 
                ? 'تواصل مع RALY اليوم لمناقشة مشروع تطوير الحلول الخاص بك والحصول على استشارة مجانية.'
                : 'Contact RALY today to discuss your solution development project and get a free consultation.'
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

export default SolutionDevelopment;