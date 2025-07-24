import { ChevronDown, Users, Calendar, Video, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
const ProgramsDropdown = () => {
  const {
    t
  } = useLanguage();
  const dropdownItems = [{
    name: t('activities'),
    path: '/programs/activities',
    icon: Video,
    description: 'Success stories and video testimonials'
  }, {
    name: t('recentEvents'),
    path: '/programs/recent-events',
    icon: Calendar,
    description: 'Latest events and conferences'
  }];
  return <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 font-medium py-2 transition-all duration-300 nav-link-hover focus:outline-none">
        {t('programs')}
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-background/95 backdrop-blur-lg border border-border/20 shadow-2xl rounded-xl p-1 z-50" align="start" sideOffset={8}>
        

        
        
        {dropdownItems.map(item => <DropdownMenuItem key={item.name} asChild className="focus:bg-accent/50">
            <Link to={item.path} className="flex items-start gap-3 px-3 py-3 mx-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 group">
              <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-200">
                <item.icon className="w-4 h-4 text-primary group-hover:text-secondary transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.name}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </Link>
          </DropdownMenuItem>)}
        
        <div className="p-3 pt-2">
          <div className="text-xs text-muted-foreground text-center">
            <Award className="w-3 h-3 inline mr-1" />
            Professional training programs
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>;
};
export default ProgramsDropdown;