import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Server, Shield, Zap, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/oracle-cloud-infrastructure-hero.jpg';
import monitoringImage from '@/assets/cloud-infrastructure-monitoring.jpg';

const OracleCloudInfrastructure = () => {
  const { language } = useLanguage();

  const content = {
    titleEn: 'Oracle Cloud Infrastructure',
    titleAr: 'Oracle Cloud Infrastructure: قوة، أمان، ومرونة لا مثيل لها',
    descriptionEn: 'Complete Oracle Cloud Infrastructure consulting for scalable, secure, and high-performance cloud environments.',
    descriptionAr: 'في RALY، نساعدك على تسخير الإمكانيات الهائلة لـ Oracle Cloud Infrastructure (OCI) لبناء، نشر، وإدارة تطبيقاتك وبياناتك في بيئة سحابية عالية الأداء، آمنة، ومرنة. OCI توفر لك البنية التحتية القوية التي تحتاجها لدفع الابتكار وتحقيق أهدافك الرقمية.',
    detailedContentAr: 'تتميز Oracle Cloud Infrastructure بتقديم بنية تحتية سحابية من الجيل التالي، مصممة خصيصًا لتلبية متطلبات أحمال العمل الحرجة والأكثر تطلبًا. في RALY، نقدم استشارات متخصصة وخدمات تطبيق متكاملة لمساعدتك على الانتقال إلى OCI والاستفادة القصوى من ميزاتها الفريدة. سواء كنت تسعى لترحيل قواعد بيانات Oracle الحالية، أو بناء تطبيقات سحابية جديدة، أو تعزيز قدراتك على تحليل البيانات الضخمة، فإن فريقنا سيضمن لك بيئة سحابية محسنة وموثوقة.',
    benefitsEn: [
      'OCI design and architecture',
      'Workload migration to OCI',
      'Compute and storage resource management',
      'Cloud network design',
      'Security and compliance in OCI',
      'Cost and performance optimization'
    ],
    benefitsAr: [
      'تصميم وهندسة OCI: بناء بنية تحتية سحابية مخصصة تلبي متطلبات عملك',
      'ترحيل أحمال العمل إلى OCI: نقل سلس وآمن لقواعد البيانات والتطبيقات إلى بيئة OCI',
      'إدارة الموارد الحاسوبية والتخزينية: تحسين استخدام الخوادم الافتراضية، التخزين السحابي، والموارد الأخرى',
      'تصميم الشبكات السحابية: بناء شبكات سحابية آمنة وفعالة داخل OCI',
      'الأمن والامتثال في OCI: تطبيق سياسات أمنية قوية وضمان الامتثال للمعايير العالمية',
      'تحسين التكلفة والأداء: تحليل مستمر لتحسين أداء البنية التحتية وتقليل التكاليف التشغيلية'
    ],
    ctaEn: 'Request Infrastructure Consultation',
    ctaAr: 'اطلب استشارة حول Oracle Cloud Infrastructure',
    whyChooseAr: 'خبرتنا العميقة في OCI، ومنهجيتنا الشاملة، والتزامنا بتقديم حلول سحابية آمنة وعالية الأداء، تجعلنا الشريك الأمثل لرحلتك نحو السحابة.'
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
            <span className="text-4xl">🏗️</span>
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
              {language === 'ar' ? 'ما نقدمه في Oracle Cloud Infrastructure:' : 'What We Offer in Oracle Cloud Infrastructure:'}
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
                لماذا تختار RALY لـ Oracle Cloud Infrastructure؟
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
              {language === 'ar' ? 'هل أنت مستعد للانتقال إلى الجيل التالي من البنية التحتية السحابية؟' : 'Ready to Move to the Next Generation of Cloud Infrastructure?'}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {language === 'ar' 
                ? 'تواصل مع RALY اليوم لاستكشاف كيف يمكن لـ Oracle Cloud Infrastructure أن تدعم طموحاتك الرقمية.'
                : 'Contact RALY today to explore how Oracle Cloud Infrastructure can support your digital ambitions.'
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

export default OracleCloudInfrastructure;