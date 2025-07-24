import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SpecializationCardProps {
  specialization: string;
  onRequestConsultation: (specialization: string) => void;
}

const SpecializationCard = ({ specialization, onRequestConsultation }: SpecializationCardProps) => {
  const { t, language } = useLanguage();

  const specializationData = {
    oracleImplementation: {
      titleEn: 'Oracle Implementation Solutions',
      titleAr: 'تطبيق حلول Oracle: تحويل رؤيتك إلى واقع رقمي',
      descriptionEn: 'We provide comprehensive Oracle implementation services, from planning and design to deployment and support. We ensure a smooth and efficient transition for your systems, maximizing your Oracle investments.',
      descriptionAr: 'في RALY، ندرك أن تطبيق حلول Oracle ليس مجرد عملية تقنية، بل هو رحلة تحول استراتيجي تهدف إلى تعزيز كفاءة أعمالك وتحقيق أقصى عائد على استثماراتك. نقدم خدمات تطبيق شاملة ومخصصة، تضمن دمجًا سلسًا وفعالًا لأنظمة Oracle في بيئة عملك، بدءًا من التخطيط الدقيق وحتى الدعم المستمر.',
      benefitsEn: [
        'Business requirements analysis and solution design',
        'Oracle systems configuration and customization',
        'Safe and accurate data migration',
        'Integration with existing systems',
        'Comprehensive user training',
        'Post-implementation support'
      ],
      benefitsAr: [
        'تحليل المتطلبات وتصميم الحلول: فهم عميق لاحتياجات عملك وتصميم حلول Oracle تتوافق معها تمامًا',
        'تكوين وتخصيص الأنظمة: ضبط وتعديل أنظمة Oracle لتناسب عملياتك التجارية الفريدة',
        'ترحيل البيانات الآمن: نقل بياناتك الحالية إلى نظام Oracle الجديد بأمان ودقة، مع الحفاظ على سلامة البيانات',
        'التكامل مع الأنظمة الحالية: ضمان التكامل السلس لحلول Oracle مع أنظمتك وتطبيقاتك الحالية',
        'تدريب المستخدمين الشامل: برامج تدريبية مكثفة لتمكين فريق عملك من استخدام النظام بكفاءة وفعالية',
        'الدعم ما بعد التنفيذ: خدمات دعم فني مستمرة لضمان استمرارية العمل وحل أي تحديات قد تطرأ'
      ],
      icon: '🔧',
      ctaEn: 'Request Oracle Implementation Consultation',
      ctaAr: 'اطلب استشارة حول تطبيق Oracle'
    },
    itInfrastructure: {
      titleEn: 'IT Infrastructure & Technical Support',
      titleAr: 'البنية التحتية لتكنولوجيا المعلومات والدعم الفني: أساس متين لعملياتك',
      descriptionEn: 'We provide specialized consulting in designing, implementing, and managing IT infrastructure, plus comprehensive technical support services to ensure business continuity and system efficiency.',
      descriptionAr: 'تعتبر البنية التحتية القوية والموثوقة لتكنولوجيا المعلومات هي العمود الفقري لأي عمل ناجح. تقدم RALY استشارات متخصصة وخدمات دعم فني شاملة لضمان أن تكون بنيتك التحتية قوية، آمنة، وفعالة، مما يضمن استمرارية عملك ويقلل من التوقفات غير المخطط لها.',
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
      icon: '🖥️',
      ctaEn: 'Request Infrastructure Consultation',
      ctaAr: 'اطلب استشارة حول البنية التحتية والدعم الفني'
    },
    oracleCloudServices: {
      titleEn: 'Oracle Cloud Managed Services',
      titleAr: 'خدمات Oracle السحابية المُدارة: أداء لا مثيل له، راحة بال تامة',
      descriptionEn: 'Complete Oracle Cloud management services to optimize performance, enhance security, and reduce operational costs through our expertise.',
      descriptionAr: 'في عالم يتسارع فيه التحول الرقمي، أصبحت السحابة هي المحرك الأساسي للابتكار. تقدم RALY خدمات Oracle السحابية المُدارة لتمكين مؤسستك من الاستفادة القصوى من قوة Oracle Cloud، مع ضمان الأداء الأمثل، الأمان الفائق، والتوافر المستمر، كل ذلك بينما نتحمل عنك عبء الإدارة اليومية.',
      benefitsEn: [
        '24/7 proactive monitoring and support',
        'Cloud infrastructure management',
        'Performance and cost optimization',
        'Patch and update management',
        'Backup and recovery management',
        'Security and compliance management'
      ],
      benefitsAr: [
        'المراقبة الاستباقية والدعم على مدار الساعة: مراقبة مستمرة لأنظمتك السحابية والكشف عن أي مشكلات وحلها فورًا',
        'إدارة البنية التحتية السحابية: إدارة شاملة للخوادم، التخزين، والشبكات في بيئة Oracle Cloud',
        'تحسين الأداء والتكلفة: تحليل مستمر لتحسين أداء تطبيقاتك وتقليل التكاليف التشغيلية السحابية',
        'إدارة التصحيحات والتحديثات: تطبيق التحديثات الأمنية والتصحيحات بانتظام لضمان أمان واستقرار الأنظمة',
        'إدارة النسخ الاحتياطي والاستعادة: خطط قوية للنسخ الاحتياطي والاستعادة لضمان حماية بياناتك',
        'إدارة الأمن والامتثال: تطبيق أفضل ممارسات الأمن السحابي وضمان الامتثال للمعايير واللوائح'
      ],
      icon: '☁️',
      ctaEn: 'Request Cloud Services Consultation',
      ctaAr: 'اطلب استشارة حول خدمات Oracle السحابية المُدارة'
    },
    oracleIntegration: {
      titleEn: 'Oracle Integration Cloud',
      titleAr: 'تكامل Oracle السحابي: ربط أنظمتك لتعزيز الكفاءة والابتكار',
      descriptionEn: 'Seamless integration solutions connecting your Oracle systems with third-party applications and services.',
      descriptionAr: 'في بيئة الأعمال الحديثة، أصبح تكامل الأنظمة المتنوعة أمرًا حتميًا لتحقيق الكفاءة التشغيلية والابتكار. تقدم RALY حلول تكامل Oracle السحابي (OIC) لربط تطبيقاتك وبياناتك بسلاسة، سواء كانت داخلية أو سحابية، مما يضمن تدفق المعلومات بشكل موحد ويعزز قدرتك على اتخاذ قرارات مستنيرة.',
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
      icon: '🔗',
      ctaEn: 'Request Integration Consultation',
      ctaAr: 'اطلب استشارة حول تكامل Oracle السحابي'
    },
    oracleCx: {
      titleEn: 'Oracle CX Cloud',
      titleAr: 'Oracle CX Cloud: بناء علاقات قوية وتجارب عملاء استثنائية',
      descriptionEn: 'Customer experience transformation through Oracle CX Cloud solutions for sales, marketing, and service excellence.',
      descriptionAr: 'في السوق التنافسي اليوم، أصبحت تجربة العميل هي الفارق الحاسم. تقدم RALY حلول Oracle CX Cloud لمساعدتك على فهم عملائك بشكل أعمق، تخصيص تفاعلاتك معهم، وتقديم تجارب استثنائية تعزز الولاء وتدفع النمو.',
      benefitsEn: [
        'Oracle Marketing Cloud',
        'Oracle Sales Cloud',
        'Oracle Service Cloud',
        'Oracle Commerce Cloud',
        'Customer Experience Analytics'
      ],
      benefitsAr: [
        'Oracle Marketing Cloud: أتمتة التسويق، إدارة الحملات، وتحليل سلوك العملاء',
        'Oracle Sales Cloud: إدارة علاقات العملاء (CRM)، أتمتة المبيعات، وتحسين أداء فريق المبيعات',
        'Oracle Service Cloud: إدارة خدمة العملاء، الدعم متعدد القنوات، وحلول الخدمة الذاتية',
        'Oracle Commerce Cloud: بناء تجارب تجارة إلكترونية مخصصة وجذابة',
        'تحليلات تجربة العملاء: توفير رؤى عميقة حول سلوك العملاء وتفضيلاتهم لتحسين الاستراتيجيات'
      ],
      icon: '👥',
      ctaEn: 'Request CX Consultation',
      ctaAr: 'اطلب استشارة حول Oracle CX Cloud'
    },
    oracleInfrastructure: {
      titleEn: 'Oracle Cloud Infrastructure',
      titleAr: 'Oracle Cloud Infrastructure: قوة، أمان، ومرونة لا مثيل لها',
      descriptionEn: 'Complete Oracle Cloud Infrastructure consulting for scalable, secure, and high-performance cloud environments.',
      descriptionAr: 'في RALY، نساعدك على تسخير الإمكانيات الهائلة لـ Oracle Cloud Infrastructure (OCI) لبناء، نشر، وإدارة تطبيقاتك وبياناتك في بيئة سحابية عالية الأداء، آمنة، ومرنة. OCI توفر لك البنية التحتية القوية التي تحتاجها لدفع الابتكار وتحقيق أهدافك الرقمية.',
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
      icon: '🏗️',
      ctaEn: 'Request Infrastructure Consultation',
      ctaAr: 'اطلب استشارة حول Oracle Cloud Infrastructure'
    },
    solutionDevelopment: {
      titleEn: 'Solution Development',
      titleAr: 'تطوير الحلول: بناء تطبيقات مبتكرة تدفع أعمالك إلى الأمام',
      descriptionEn: 'Custom solution development tailored to your business needs using the latest technologies and best practices.',
      descriptionAr: 'في RALY، نؤمن بأن الحلول البرمجية المخصصة هي مفتاح التميز في السوق التنافسي. نقدم خدمات تطوير حلول متكاملة، من الفكرة الأولية وحتى النشر والدعم، لإنشاء تطبيقات مبتكرة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك الاستراتيجية.',
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
      icon: '💻',
      ctaEn: 'Request Development Consultation',
      ctaAr: 'اطلب استشارة حول تطوير الحلول'
    },
    systemIntegration: {
      titleEn: 'System Integration',
      titleAr: 'تكامل الأنظمة: توحيد بيئتك التقنية لتعزيز الكفاءة والابتكار',
      descriptionEn: 'Comprehensive system integration services to connect disparate systems and create unified business processes.',
      descriptionAr: 'في بيئة الأعمال المعاصرة، غالبًا ما تعمل المؤسسات بأنظمة وتطبيقات متعددة ومتباينة. تقدم RALY خدمات تكامل الأنظمة لربط هذه المكونات المختلفة بسلاسة، مما يخلق بيئة تقنية موحدة ومتماسكة تعزز تدفق المعلومات، وتحسن الكفاءة التشغيلية، وتدعم اتخاذ القرارات المستنيرة.',
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
      icon: '⚙️',
      ctaEn: 'Request Integration Consultation',
      ctaAr: 'اطلب استشارة حول تكامل الأنظمة'
    }
  };

  const data = specializationData[specialization as keyof typeof specializationData];
  
  if (!data) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="service-card-enhanced p-8">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">{data.icon}</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            {language === 'ar' ? data.titleAr : data.titleEn}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center leading-relaxed">
            {language === 'ar' ? data.descriptionAr : data.descriptionEn}
          </p>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">
              {language === 'ar' ? 'الفوائد الرئيسية:' : 'Key Benefits:'}
            </h4>
            <ul className="space-y-3">
              {(language === 'ar' ? data.benefitsAr : data.benefitsEn).map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-6 text-center">
            <Button
              onClick={() => onRequestConsultation(specialization)}
              className="cta-button px-8 py-3 text-lg"
            >
              {language === 'ar' ? data.ctaAr : data.ctaEn}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpecializationCard;