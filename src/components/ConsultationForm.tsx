import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedSpecialization?: string;
}

const ConsultationForm = ({ isOpen, onClose, preSelectedSpecialization }: ConsultationFormProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    specialization: preSelectedSpecialization || '',
    message: ''
  });

  const specializations = [
    'oracleImplementation',
    'oracleCloudServices', 
    'oracleIntegration',
    'oracleCx',
    'oracleInfrastructure',
    'solutionDevelopment',
    'systemIntegration',
    'itInfrastructure'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Simulate form submission
    toast({
      title: language === 'ar' ? 'تم الإرسال بنجاح' : 'Successfully Submitted',
      description: language === 'ar' ? 'سنتواصل معك قريباً' : 'We will contact you soon',
    });
    
    // Reset form and close
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      specialization: '',
      message: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border border-border">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold text-foreground">
            {t('consultationForm')}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-accent"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">
                {t('fullName')} *
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="bg-background border-border"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                {t('email')} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-background border-border"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                {t('phone')} *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-background border-border"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground font-medium">
                {t('company')}
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialization" className="text-foreground font-medium">
              {t('specialization')}
            </Label>
            <Select
              value={formData.specialization}
              onValueChange={(value) => handleInputChange('specialization', value)}
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={language === 'ar' ? 'اختر التخصص' : 'Select Specialization'} />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec} className="hover:bg-accent">
                    {t(spec)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              {t('message')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-background border-border min-h-[100px]"
              placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-border hover:bg-accent"
            >
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button
              type="submit"
              className="cta-button"
            >
              {t('submitRequest')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;