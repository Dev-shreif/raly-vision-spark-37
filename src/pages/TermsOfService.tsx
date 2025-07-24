import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Users, Shield, AlertTriangle, Scale, RefreshCw, Globe, Ban } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: January 2024",
      intro: "These Terms of Service govern your use of RALY's website and services. By accessing or using our services, you agree to be bound by these terms.",
      sections: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Acceptance of Terms",
          content: [
            "By accessing and using RALY's services, you accept and agree to be bound by these Terms of Service.",
            "If you do not agree to these terms, please do not use our services.",
            "We reserve the right to change these terms at any time with notice.",
            "Continued use of our services after changes constitutes acceptance of new terms."
          ]
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Permitted Use",
          content: [
            "You may use our website and services for lawful purposes only.",
            "You must not use our services for any illegal or unauthorized purpose.",
            "Commercial use requires prior written permission from RALY.",
            "You are responsible for maintaining the confidentiality of your account credentials."
          ]
        },
        {
          icon: <Ban className="w-6 h-6" />,
          title: "Prohibited Activities",
          content: [
            "Reselling, redistributing, or sublicensing our content or services without permission.",
            "Using our services to transmit spam, viruses, or malicious code.",
            "Attempting to gain unauthorized access to our systems or user accounts.",
            "Impersonating RALY or any of our employees, partners, or affiliates.",
            "Violating any applicable laws or regulations while using our services."
          ]
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Intellectual Property",
          content: [
            "All content on our website, including text, graphics, logos, and software, is owned by RALY.",
            "You may not reproduce, distribute, or create derivative works without our permission.",
            "Course materials and training content are for personal use only.",
            "RALY respects intellectual property rights and expects users to do the same."
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Service Availability",
          content: [
            "We strive to maintain service availability but cannot guarantee uninterrupted access.",
            "Services may be temporarily unavailable due to maintenance or technical issues.",
            "We reserve the right to modify or discontinue services with reasonable notice.",
            "RALY is not liable for any downtime or service interruptions."
          ]
        },
        {
          icon: <AlertTriangle className="w-6 h-6" />,
          title: "Limitation of Liability",
          content: [
            "RALY provides services 'as is' without warranties of any kind.",
            "We are not responsible for any indirect, incidental, or consequential damages.",
            "Our total liability shall not exceed the amount paid for our services.",
            "Users assume full responsibility for their use of our services.",
            "Some jurisdictions do not allow certain liability limitations."
          ]
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "Governing Law",
          content: [
            "These terms are governed by the laws of Jordan.",
            "Any disputes will be resolved in the courts of Amman, Jordan.",
            "If any provision is found unenforceable, the remaining terms remain in effect.",
            "These terms constitute the entire agreement between you and RALY."
          ]
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: "Modifications",
          content: [
            "RALY reserves the right to modify these terms at any time.",
            "We will provide notice of significant changes via email or website notification.",
            "Your continued use of services after changes indicates acceptance.",
            "It is your responsibility to review terms periodically for updates."
          ]
        }
      ],
      contact: {
        title: "Questions About Terms",
        description: "If you have questions about these Terms of Service, please contact us:",
        email: "legal@raly.com",
        phone: "+962 6 123 4567"
      }
    },
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: يناير 2024",
      intro: "تحكم شروط الخدمة هذه استخدامك لموقع RALY وخدماته. من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط.",
      sections: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "قبول الشروط",
          content: [
            "من خلال الوصول إلى خدمات RALY واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه.",
            "إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.",
            "نحتفظ بالحق في تغيير هذه الشروط في أي وقت مع إشعار مسبق.",
            "استمرار استخدام خدماتنا بعد التغييرات يشكل قبولاً للشروط الجديدة."
          ]
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "الاستخدام المسموح",
          content: [
            "يمكنك استخدام موقعنا وخدماتنا للأغراض المشروعة فقط.",
            "يجب عدم استخدام خدماتنا لأي غرض غير قانوني أو غير مصرح به.",
            "الاستخدام التجاري يتطلب إذناً مكتوباً مسبقاً من RALY.",
            "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك."
          ]
        },
        {
          icon: <Ban className="w-6 h-6" />,
          title: "الأنشطة المحظورة",
          content: [
            "إعادة بيع أو إعادة توزيع أو ترخيص المحتوى أو الخدمات دون إذن.",
            "استخدام خدماتنا لإرسال رسائل مزعجة أو فيروسات أو رموز ضارة.",
            "محاولة الحصول على وصول غير مصرح به إلى أنظمتنا أو حسابات المستخدمين.",
            "انتحال شخصية RALY أو أي من موظفينا أو شركائنا أو الشركات التابعة لنا.",
            "انتهاك أي قوانين أو لوائح معمول بها أثناء استخدام خدماتنا."
          ]
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "الملكية الفكرية",
          content: [
            "جميع المحتويات على موقعنا، بما في ذلك النصوص والرسومات والشعارات والبرامج، مملوكة لـ RALY.",
            "لا يجوز لك إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة دون إذننا.",
            "مواد الدورات ومحتوى التدريب للاستخدام الشخصي فقط.",
            "تحترم RALY حقوق الملكية الفكرية وتتوقع من المستخدمين فعل الشيء نفسه."
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "توفر الخدمة",
          content: [
            "نسعى للحفاظ على توفر الخدمة لكن لا يمكننا ضمان الوصول دون انقطاع.",
            "قد تكون الخدمات غير متاحة مؤقتاً بسبب الصيانة أو المشاكل التقنية.",
            "نحتفظ بالحق في تعديل أو إيقاف الخدمات مع إشعار معقول.",
            "RALY غير مسؤولة عن أي توقف أو انقطاع في الخدمة."
          ]
        },
        {
          icon: <AlertTriangle className="w-6 h-6" />,
          title: "تحديد المسؤولية",
          content: [
            "تقدم RALY الخدمات 'كما هي' دون ضمانات من أي نوع.",
            "نحن لسنا مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية.",
            "إجمالي مسؤوليتنا لن يتجاوز المبلغ المدفوع مقابل خدماتنا.",
            "يتحمل المستخدمون المسؤولية الكاملة عن استخدام خدماتنا.",
            "بعض الولايات القضائية لا تسمح بقيود مسؤولية معينة."
          ]
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "القانون الحاكم",
          content: [
            "تخضع هذه الشروط لقوانين الأردن.",
            "سيتم حل أي نزاعات في محاكم عمان، الأردن.",
            "إذا تبين أن أي بند غير قابل للتنفيذ، تبقى الشروط المتبقية سارية.",
            "تشكل هذه الشروط الاتفاقية الكاملة بينك وبين RALY."
          ]
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: "التعديلات",
          content: [
            "تحتفظ RALY بالحق في تعديل هذه الشروط في أي وقت.",
            "سنقدم إشعاراً بالتغييرات المهمة عبر البريد الإلكتروني أو إشعار الموقع.",
            "استمرار استخدامك للخدمات بعد التغييرات يشير إلى القبول.",
            "تقع على عاتقك مسؤولية مراجعة الشروط بشكل دوري للتحديثات."
          ]
        }
      ],
      contact: {
        title: "أسئلة حول الشروط",
        description: "إذا كان لديك أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:",
        email: "legal@raly.com",
        phone: "+962 6 123 4567"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-white/90 mb-4">
              {currentContent.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.intro}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <Card className="mt-12 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Scale className="w-6 h-6" />
                  </div>
                  {currentContent.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {currentContent.contact.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{currentContent.contact.email}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{currentContent.contact.phone}</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button>
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Legal Team'}
                    <Scale className="w-4 h-4 ml-2" />
                  </Button>
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

export default TermsOfService;