import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';
import SpecializationCard from '@/components/SpecializationCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import consultationsHero from '@/assets/consultations-hero.jpg';

const Consultations = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formPreSelection, setFormPreSelection] = useState<string>('');

  // Check for specialization parameter in URL
  useEffect(() => {
    const spec = searchParams.get('specialization');
    if (spec) {
      setSelectedSpecialization(spec);
    }
  }, [searchParams]);

  const handleSpecializationSelect = (specialization: string) => {
    setSelectedSpecialization(specialization);
    // Smooth scroll to content area
    const contentArea = document.getElementById('specialization-content');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickRequest = () => {
    setFormPreSelection('');
    setIsFormOpen(true);
  };

  const handleRequestConsultation = (specialization: string) => {
    setFormPreSelection(specialization);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${consultationsHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('consultationsTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('consultationsSubtitle')}
            </p>
            
            {/* Quick Request Button */}
            <div className="pt-8">
              <Button
                onClick={handleQuickRequest}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('quickRequest')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Specialization Content Area */}
      <section id="specialization-content" className="py-20 px-4">
        <div className="container mx-auto">
          {selectedSpecialization ? (
            <div className="space-y-8">
              {/* Back to Overview Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setSelectedSpecialization('')}
                  className="border-border hover:bg-accent"
                >
                  {language === 'ar' ? 'العودة للتخصصات' : 'Back to Specializations'}
                </Button>
              </div>
              
              {/* Selected Specialization Card */}
              <SpecializationCard
                specialization={selectedSpecialization}
                onRequestConsultation={handleRequestConsultation}
              />
            </div>
          ) : (
            <div className="text-center space-y-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {language === 'ar' ? 'اختر مجال الاستشارة' : 'Choose Your Consultation Area'}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {language === 'ar' 
                    ? 'حدد التخصص الذي تحتاج إلى استشارة فيه لنتمكن من تقديم أفضل الحلول لك'
                    : 'Select the specialization you need consultation in so we can provide the best solutions for you'
                  }
                </p>
              </div>
              
              {/* Specializations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { key: 'oracleImplementation', icon: '🔧', color: 'from-blue-500 to-blue-600' },
                  { key: 'oracleCloudServices', icon: '☁️', color: 'from-cyan-500 to-blue-500' },
                  { key: 'oracleIntegration', icon: '🔗', color: 'from-green-500 to-teal-500' },
                  { key: 'oracleCx', icon: '👥', color: 'from-purple-500 to-blue-500' },
                  { key: 'oracleInfrastructure', icon: '🏗️', color: 'from-orange-500 to-red-500' },
                  { key: 'solutionDevelopment', icon: '💻', color: 'from-indigo-500 to-purple-500' },
                  { key: 'systemIntegration', icon: '⚙️', color: 'from-gray-600 to-gray-700' },
                  { key: 'itInfrastructure', icon: '🔧', color: 'from-teal-500 to-green-500' }
                ].map((spec) => (
                  <div
                    key={spec.key}
                    onClick={() => handleSpecializationSelect(spec.key)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="text-center space-y-4">
                        <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${spec.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                          {spec.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {t(spec.key)}
                        </h3>
                        <Button
                          variant="outline"
                          className="w-full border-border hover:bg-accent"
                        >
                          {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية ولنبدأ في تحويل أفكارك إلى واقع'
                : 'Contact us today for a free consultation and let\'s start turning your ideas into reality'
              }
            </p>
            <Button
              onClick={handleQuickRequest}
              className="cta-button px-8 py-4 text-lg"
            >
              {t('quickRequest')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Consultation Form Modal */}
      <ConsultationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        preSelectedSpecialization={formPreSelection}
      />
    </div>
  );
};

export default Consultations;