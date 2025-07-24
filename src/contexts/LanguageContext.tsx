import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    solutions: 'IT Solutions',
    courses: 'Courses',
    activities: 'Activities',
    programs: 'Programs',
    recentEvents: 'Recent Events',
    contact: 'Contact',
    consultations: 'Consultations',
    getStarted: 'Get Started',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    language: 'Language',
    english: 'English',
    arabic: 'العربية',
    
    // Common
    learnMore: 'Learn More',
    readMore: 'Read More',
    backToHome: 'Back to Home',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Hero Section
    heroTitle: 'Welcome to RALY',
    heroSubtitle: 'Oracle Training & IT Solutions',
    heroDescription: 'Empowering your digital transformation with expert Oracle training and comprehensive IT solutions.',
    
    // Consultations page
    consultationsTitle: 'RALY Specialized Consultations',
    consultationsSubtitle: 'We provide comprehensive consulting solutions to help you maximize your technology investments. Choose your specialization to get started.',
    quickRequest: 'Quick Request',
    oracleImplementation: 'Oracle Implementation',
    oracleCloudServices: 'Oracle Cloud Managed Services',
    oracleIntegration: 'Oracle Integration Cloud',
    oracleCx: 'Oracle CX Cloud',
    oracleInfrastructure: 'Oracle Cloud Infrastructure',
    solutionDevelopment: 'Solution Development',
    systemIntegration: 'System Integration',
    itInfrastructure: 'IT Infrastructure & Support',
    requestConsultation: 'Request Consultation',
    consultationForm: 'Consultation Request Form',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    company: 'Company (Optional)',
    specialization: 'Specialization',
    message: 'Short Message',
    submitRequest: 'Submit Request',
    
    // Footer
    aboutUs: 'About Us',
    services: 'Services',
    training: 'Training',
    support: 'Support',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved.',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about our services',
    
    // Programs
    successStories: 'Success Stories',
    upcomingEvents: 'Upcoming Events',
    pastEvents: 'Past Events',
    eventDate: 'Event Date',
    eventLocation: 'Location',
    
    // Course Details
    courseOverview: 'Course Overview',
    courseCurriculum: 'Curriculum',
    courseInstructor: 'Instructor',
    courseSchedule: 'Schedule',
    courseFees: 'Fees',
    enrollNow: 'Enroll Now',
    duration: 'Duration',
    level: 'Level',
    certificate: 'Certificate',
    
    // Contact
    contactUs: 'Contact Us',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    address: 'Address',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    sendMessage: 'Send Message',
    
    // Not Found
    pageNotFound: 'Page Not Found',
    pageNotFoundDescription: 'The page you are looking for does not exist.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    solutions: 'الحلول التقنية',
    courses: 'الدورات',
    activities: 'الأنشطة',
    programs: 'البرامج',
    recentEvents: 'الأحداث الأخيرة',
    contact: 'اتصل بنا',
    consultations: 'الاستشارات',
    getStarted: 'ابدأ الآن',
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الداكن',
    language: 'اللغة',
    english: 'English',
    arabic: 'العربية',
    
    // Common
    learnMore: 'اعرف المزيد',
    readMore: 'اقرأ المزيد',
    backToHome: 'العودة للرئيسية',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    
    // Hero Section
    heroTitle: 'مرحباً بك في RALY',
    heroSubtitle: 'تدريب Oracle والحلول التقنية',
    heroDescription: 'نمكّن تحولك الرقمي من خلال تدريب Oracle الخبير والحلول التقنية الشاملة.',
    
    // Consultations page
    consultationsTitle: 'استشارات RALY المتخصصة',
    consultationsSubtitle: 'نقدم حلولاً استشارية متكاملة لمساعدتك على تحقيق أقصى استفادة من استثماراتك التقنية. اختر تخصصك لتبدأ.',
    quickRequest: 'طلب استشارة سريعة',
    oracleImplementation: 'تطبيق Oracle',
    oracleCloudServices: 'خدمات Oracle السحابية المُدارة',
    oracleIntegration: 'Oracle Integration Cloud',
    oracleCx: 'Oracle CX Cloud',
    oracleInfrastructure: 'Oracle Cloud Infrastructure',
    solutionDevelopment: 'تطوير الحلول',
    systemIntegration: 'تكامل الأنظمة',
    itInfrastructure: 'البنية التحتية وتكنولوجيا المعلومات',
    requestConsultation: 'اطلب استشارة',
    consultationForm: 'نموذج طلب الاستشارة',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    company: 'الشركة (اختياري)',
    specialization: 'التخصص',
    message: 'رسالة قصيرة',
    submitRequest: 'إرسال الطلب',
    
    // Footer
    aboutUs: 'من نحن',
    services: 'الخدمات',
    training: 'التدريب',
    support: 'الدعم',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    
    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا',
    
    // Programs
    successStories: 'قصص النجاح',
    upcomingEvents: 'الأحداث القادمة',
    pastEvents: 'الأحداث السابقة',
    eventDate: 'تاريخ الحدث',
    eventLocation: 'الموقع',
    
    // Course Details
    courseOverview: 'نظرة عامة على الدورة',
    courseCurriculum: 'المنهج',
    courseInstructor: 'المدرب',
    courseSchedule: 'الجدول الزمني',
    courseFees: 'الرسوم',
    enrollNow: 'سجل الآن',
    duration: 'المدة',
    level: 'المستوى',
    certificate: 'الشهادة',
    
    // Contact
    contactUs: 'اتصل بنا',
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أسرع وقت ممكن.',
    address: 'العنوان',
    phoneNumber: 'رقم الهاتف',
    emailAddress: 'عنوان البريد الإلكتروني',
    sendMessage: 'إرسال رسالة',
    
    // Not Found
    pageNotFound: 'الصفحة غير موجودة',
    pageNotFoundDescription: 'الصفحة التي تبحث عنها غير موجودة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    return savedLanguage || 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};