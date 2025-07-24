import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, UserCheck, Mail, Trash2, Server, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2024",
      intro: "At RALY, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and safeguard your data.",
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "What Data We Collect",
          content: [
            "Personal Information: Name, email address, phone number, and job title when you contact us or register for our services.",
            "Website Interaction: IP address, browser type, pages visited, and time spent on our website through cookies and analytics.",
            "Course Data: Training records, completion certificates, and assessment results for our educational programs.",
            "Communication Data: Messages, feedback, and support requests you send to us."
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "How We Use Your Data",
          content: [
            "Service Delivery: To provide IT consulting, training, and support services.",
            "Communication: To respond to inquiries, send course updates, and provide customer support.",
            "Marketing: To send newsletters and promotional materials (with your consent).",
            "Improvement: To analyze website usage and improve our services.",
            "Legal Compliance: To meet regulatory requirements and business obligations."
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Data Sharing & Third Parties",
          content: [
            "We do not sell or rent your personal information to third parties.",
            "Trusted Partners: We may share data with reliable service providers like Firebase for hosting and analytics.",
            "Legal Requirements: We may disclose information if required by law or to protect our rights.",
            "Business Transfers: Data may be transferred in case of merger or acquisition."
          ]
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Data Security",
          content: [
            "HTTPS Encryption: All data transmission is secured with SSL/TLS encryption.",
            "Secure Storage: Your data is stored on encrypted servers with restricted access.",
            "Access Controls: Only authorized personnel can access your personal information.",
            "Regular Audits: We conduct security assessments to maintain data protection standards."
          ]
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Your Rights",
          content: [
            "Access: Request a copy of your personal data we hold.",
            "Correction: Update or correct inaccurate information.",
            "Deletion: Request removal of your data (subject to legal requirements).",
            "Portability: Receive your data in a structured, machine-readable format.",
            "Withdraw Consent: Opt-out of marketing communications at any time."
          ]
        },
        {
          icon: <Trash2 className="w-6 h-6" />,
          title: "Data Retention & Deletion",
          content: [
            "We retain your data only as long as necessary for business purposes.",
            "Course records are kept for 7 years for certification purposes.",
            "Marketing data is deleted upon unsubscribe request.",
            "Account data is removed within 30 days of deletion request."
          ]
        }
      ],
      contact: {
        title: "Contact Us About Privacy",
        description: "If you have questions about this privacy policy or want to exercise your data rights, please contact us:",
        email: "privacy@raly.com",
        phone: "+962 6 123 4567",
        address: "123 Tech Street, Amman, Jordan"
      }
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يناير 2024",
      intro: "في RALY، نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية بياناتك.",
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "البيانات التي نجمعها",
          content: [
            "المعلومات الشخصية: الاسم وعنوان البريد الإلكتروني ورقم الهاتف والمسمى الوظيفي عند التواصل معنا أو التسجيل في خدماتنا.",
            "تفاعل الموقع: عنوان IP ونوع المتصفح والصفحات المزارة والوقت المقضي على موقعنا من خلال ملفات تعريف الارتباط والتحليلات.",
            "بيانات الدورات: سجلات التدريب وشهادات الإكمال ونتائج التقييم لبرامجنا التعليمية.",
            "بيانات التواصل: الرسائل والتعليقات وطلبات الدعم التي ترسلها إلينا."
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "كيف نستخدم بياناتك",
          content: [
            "تقديم الخدمات: لتوفير خدمات الاستشارات التقنية والتدريب والدعم.",
            "التواصل: للرد على الاستفسارات وإرسال تحديثات الدورات وتقديم دعم العملاء.",
            "التسويق: لإرسال النشرات الإخبارية والمواد الترويجية (بموافقتك).",
            "التحسين: لتحليل استخدام الموقع وتحسين خدماتنا.",
            "الامتثال القانوني: لتلبية المتطلبات التنظيمية والتزامات العمل."
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "مشاركة البيانات والأطراف الثالثة",
          content: [
            "لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة.",
            "الشركاء الموثوقون: قد نشارك البيانات مع مقدمي خدمات موثوقين مثل Firebase للاستضافة والتحليلات.",
            "المتطلبات القانونية: قد نكشف المعلومات إذا تطلب القانون ذلك أو لحماية حقوقنا.",
            "التحويلات التجارية: قد يتم نقل البيانات في حالة الاندماج أو الاستحواذ."
          ]
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "أمان البيانات",
          content: [
            "تشفير HTTPS: جميع عمليات نقل البيانات محمية بتشفير SSL/TLS.",
            "التخزين الآمن: يتم تخزين بياناتك على خوادم مشفرة مع وصول محدود.",
            "ضوابط الوصول: فقط الموظفون المخولون يمكنهم الوصول إلى معلوماتك الشخصية.",
            "المراجعات المنتظمة: نجري تقييمات أمنية للحفاظ على معايير حماية البيانات."
          ]
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "حقوقك",
          content: [
            "الوصول: طلب نسخة من بياناتك الشخصية التي نحتفظ بها.",
            "التصحيح: تحديث أو تصحيح المعلومات غير الدقيقة.",
            "الحذف: طلب إزالة بياناتك (وفقاً للمتطلبات القانونية).",
            "النقل: استلام بياناتك بتنسيق منظم قابل للقراءة آلياً.",
            "سحب الموافقة: إلغاء الاشتراك في التواصل التسويقي في أي وقت."
          ]
        },
        {
          icon: <Trash2 className="w-6 h-6" />,
          title: "الاحتفاظ بالبيانات وحذفها",
          content: [
            "نحتفظببياناتك فقط طالما كان ذلك ضرورياً لأغراض العمل.",
            "يتم الاحتفاظ بسجلات الدورات لمدة 7 سنوات لأغراض الشهادات.",
            "يتم حذف بيانات التسويق عند طلب إلغاء الاشتراك.",
            "يتم إزالة بيانات الحساب خلال 30 يوماً من طلب الحذف."
          ]
        }
      ],
      contact: {
        title: "تواصل معنا حول الخصوصية",
        description: "إذا كان لديك أسئلة حول سياسة الخصوصية هذه أو تريد ممارسة حقوق البيانات الخاصة بك، يرجى التواصل معنا:",
        email: "privacy@raly.com",
        phone: "+962 6 123 4567",
        address: "123 شارع التقنية، عمان، الأردن"
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
                    <Mail className="w-6 h-6" />
                  </div>
                  {currentContent.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {currentContent.contact.description}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{currentContent.contact.email}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Server className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{currentContent.contact.phone}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-sm">{currentContent.contact.address}</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button>
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                    <Mail className="w-4 h-4 ml-2" />
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

export default PrivacyPolicy;