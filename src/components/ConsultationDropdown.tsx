import { ChevronDown, Settings, Cloud, Link as LinkIcon, Users, Building, Code, Cog, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
const ConsultationDropdown = () => {
  const {
    t,
    language
  } = useLanguage();
  const specializations = [{
    category: 'Oracle Solutions',
    items: [{
      key: 'oracleImplementation',
      icon: Settings,
      path: '/consultations/oracle-implementation',
      description: 'Complete Oracle system implementation'
    }, {
      key: 'oracleCloudServices',
      icon: Cloud,
      path: '/consultations/oracle-cloud-managed-services',
      description: 'Managed cloud infrastructure services'
    }, {
      key: 'oracleIntegration',
      icon: LinkIcon,
      path: '/consultations/oracle-integration-cloud',
      description: 'Enterprise system integrations'
    }, {
      key: 'oracleCx',
      icon: Users,
      path: '/consultations/oracle-cx-cloud',
      description: 'Customer experience solutions'
    }, {
      key: 'oracleInfrastructure',
      icon: Building,
      path: '/consultations/oracle-cloud-infrastructure',
      description: 'Cloud infrastructure management'
    }]
  }, {
    category: 'Development & Integration',
    items: [{
      key: 'solutionDevelopment',
      icon: Code,
      path: '/consultations/solution-development',
      description: 'Custom software development'
    }, {
      key: 'systemIntegration',
      icon: Cog,
      path: '/consultations/system-integration',
      description: 'System integration services'
    }, {
      key: 'itInfrastructure',
      icon: Wrench,
      path: '/consultations/it-infrastructure-support',
      description: 'IT infrastructure support'
    }]
  }];
  return <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 font-medium py-2 transition-all duration-300 nav-link-hover outline-none">
        {t('consultations')}
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 bg-background/95 backdrop-blur-lg border border-border/20 shadow-2xl rounded-xl p-1 z-50" align={language === 'ar' ? 'end' : 'start'} sideOffset={8}>
        
        
        {specializations.map((category, categoryIndex) => <div key={category.category} className="mb-2 last:mb-0">
            <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {category.category}
            </DropdownMenuLabel>
            
            {category.items.map(item => <DropdownMenuItem key={item.key} asChild className="focus:bg-accent/50">
                <Link to={item.path} className="flex items-start gap-3 px-3 py-3 mx-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-200">
                    <item.icon className="w-4 h-4 text-primary group-hover:text-secondary transition-colors duration-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {t(item.key)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>)}
            
            {categoryIndex < specializations.length - 1 && <DropdownMenuSeparator className="my-2 mx-3 bg-border/50" />}
          </div>)}
        
        <div className="p-3 pt-2">
          <div className="text-xs text-muted-foreground text-center">
            Did you know? 
            <span className="text-primary font-medium ml-1">
              RALY specializes in Oracle solutions
            </span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>;
};
export default ConsultationDropdown;