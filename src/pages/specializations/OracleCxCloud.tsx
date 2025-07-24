import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Users, Heart, TrendingUp, Star, BarChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/oracle-cx-cloud-hero.jpg';
import dashboardImage from '@/assets/customer-experience-dashboard.jpg';
const OracleCxCloud = () => {
  const {
    language
  } = useLanguage();
  const content = {
    titleEn: 'Oracle CX Cloud',
    titleAr: 'Oracle CX Cloud: بناء علاقات قوية وتجارب عملاء استثنائية',
    descriptionEn: 'Customer experience transformation through Oracle CX Cloud solutions for sales, marketing, and service excellence.',
    descriptionAr: 'في السوق التنافسي اليوم، أصبحت تجربة العميل هي الفارق الحاسم. تقدم RALY حلول Oracle CX Cloud لمساعدتك على فهم عملائك بشكل أعمق، تخصيص تفاعلاتك معهم، وتقديم تجارب استثنائية تعزز الولاء وتدفع النمو.',
    detailedContentAr: 'تعتبر Oracle CX Cloud مجموعة متكاملة من التطبيقات السحابية المصممة لإدارة وتحسين كل نقطة اتصال في رحلة العميل، من التسويق والمبيعات إلى الخدمة والدعم. في RALY، نمتلك الخبرة اللازمة لتصميم، تطبيق، وتخصيص حلول Oracle CX Cloud التي تتناسب تمامًا مع استراتيجية تجربة العملاء الخاصة بك. نحن نساعدك على توحيد بيانات العملاء، أتمتة عمليات التسويق والمبيعات، وتقديم خدمة عملاء استباقية وشخصية.',
    benefitsEn: ['Oracle Marketing Cloud', 'Oracle Sales Cloud', 'Oracle Service Cloud', 'Oracle Commerce Cloud', 'Customer Experience Analytics'],
    benefitsAr: ['Oracle Marketing Cloud: أتمتة التسويق، إدارة الحملات، وتحليل سلوك العملاء', 'Oracle Sales Cloud: إدارة علاقات العملاء (CRM)، أتمتة المبيعات، وتحسين أداء فريق المبيعات', 'Oracle Service Cloud: إدارة خدمة العملاء، الدعم متعدد القنوات، وحلول الخدمة الذاتية', 'Oracle Commerce Cloud: بناء تجارب تجارة إلكترونية مخصصة وجذابة', 'تحليلات تجربة العملاء: توفير رؤى عميقة حول سلوك العملاء وتفضيلاتهم لتحسين الاستراتيجيات'],
    ctaEn: 'Request CX Consultation',
    ctaAr: 'اطلب استشارة حول Oracle CX Cloud',
    whyChooseAr: 'نحن نجمع بين الخبرة التقنية العميقة في Oracle CX Cloud والفهم الشامل لمتطلبات تجربة العملاء، لتقديم حلول متكاملة تمكنك من بناء علاقات قوية ومربحة مع عملائك.'
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/201553040088', '_blank');
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
            <div className="absolute inset-0 bg-background/30 dark:bg-background/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Heart className="w-10 h-10 text-white" />
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
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تحسن رضا العملاء' : 'Customer Satisfaction'}
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">40%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'زيادة المبيعات' : 'Sales Increase'}
                  </div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">4.8/5</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تقييم العملاء' : 'Customer Rating'}
                  </div>
                </div>
                <div className="text-center">
                  <BarChart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">65%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تحسن الولاء' : 'Loyalty Improvement'}
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
                  {language === 'ar' ? 'اجعل كل تفاعل مع العملاء لا يُنسى' : 'Make Every Customer Interaction Memorable'}
                </h2>
                {language === 'ar' && <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {content.detailedContentAr}
                  </p>}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {language === 'ar' ? 'إدارة العملاء' : 'Customer Management'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? '360 درجة' : '360° View'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {language === 'ar' ? 'تجربة مخصصة' : 'Personalized Experience'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? 'لكل عميل' : 'For Each Customer'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={dashboardImage} alt="Customer Experience Dashboard" className="rounded-xl shadow-2xl w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {language === 'ar' ? 'ما نقدمه في Oracle CX Cloud:' : 'What We Offer in Oracle CX Cloud:'}
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(language === 'ar' ? content.benefitsAr : content.benefitsEn).map((benefit, index) => <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl service-card-enhanced relative overflow-hidden">
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

          {/* Final CTA Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="absolute inset-0 bg-primary/70 dark:bg-primary/80"></div>
            </div>
            
            <div className="relative z-10 text-center p-12 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل أنت مستعد لرفع مستوى تجربة عملائك؟' : 'Ready to Elevate Your Customer Experience?'}
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {language === 'ar' ? 'تواصل مع RALY اليوم لاستكشاف كيف يمكن لحلول Oracle CX Cloud أن تحدث فرقًا في علاقاتك مع العملاء.' : 'Contact RALY today to explore how Oracle CX Cloud solutions can make a difference in your customer relationships.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 font-semibold">
                  {language === 'ar' ? content.ctaAr : content.ctaEn}
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="text-lg px-8 py-3 border-white bg-transparent text-zinc-950 text-center">
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
export default OracleCxCloud;