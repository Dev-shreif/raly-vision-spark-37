import { Calendar, MapPin, Users, Trophy, Camera, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
const RecentEvents = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const events = [{
    title: "Annual Tech Conference 2024",
    date: "March 15, 2024",
    location: "RALY Training Center",
    participants: "50+ Attendees",
    type: "Conference",
    status: "completed",
    description: "Our biggest annual event featuring industry leaders and latest technology trends",
    image: "/lovable-uploads/06037f7d-83dd-438f-8b83-c0ee75a48d96.png",
    highlights: ["Keynote Speakers", "Tech Workshops", "Networking", "Awards Ceremony"]
  }, {
    title: "IT Professional Meetup",
    date: "February 20, 2024",
    location: "RALY Office",
    participants: "30+ Professionals",
    type: "Networking",
    status: "completed",
    description: "Monthly gathering of IT professionals to share knowledge and network",
    image: "/lovable-uploads/155a6270-d99d-42d3-8bd5-c52168874a39.png",
    highlights: ["Industry Insights", "Career Development", "Peer Learning", "Job Opportunities"]
  }, {
    title: "Database Workshop Series",
    date: "January 10-12, 2024",
    location: "Training Lab",
    participants: "25+ Students",
    type: "Workshop",
    status: "completed",
    description: "Intensive 3-day workshop covering advanced database administration techniques",
    highlights: ["Hands-on Labs", "Expert Instructors", "Real Projects", "Certification Prep"]
  }, {
    title: "Cybersecurity Awareness Day",
    date: "April 10, 2024",
    location: "RALY Auditorium",
    participants: "Expected 100+ Attendees",
    type: "Seminar",
    status: "upcoming",
    description: "Free public seminar on cybersecurity best practices for businesses and individuals",
    highlights: ["Expert Panels", "Live Demonstrations", "Q&A Sessions", "Free Resources"]
  }, {
    title: "Cloud Migration Summit",
    date: "November 15, 2023",
    location: "Conference Hall",
    participants: "60+ Attendees",
    type: "Summit",
    status: "completed",
    description: "Full-day summit focused on cloud migration strategies and success stories",
    highlights: ["Migration Strategies", "Cost Optimization", "Security Practices", "Success Stories"]
  }, {
    title: "Student Project Showcase",
    date: "October 25, 2023",
    location: "RALY Gallery",
    participants: "35+ Projects",
    type: "Showcase",
    status: "completed",
    description: "Annual exhibition of outstanding student projects and innovations",
    highlights: ["Innovation Awards", "Student Presentations", "Industry Judges", "Career Fair"]
  }];
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'completed');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, cardIndex]));
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('[data-card-index]').forEach(card => {
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);
  const EventCard = ({
    event,
    index
  }: {
    event: any;
    index: number;
  }) => <Card className={`course-card staggered-fade-in ${visibleCards.has(index) ? 'visible' : ''} group overflow-hidden`} data-card-index={index} style={{
    transitionDelay: `${index * 0.1}s`
  }}>
      <div className="relative">
        {event.image ? <img src={event.image} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="w-full h-48 gradient-primary flex items-center justify-center">
            <Camera className="w-12 h-12 text-white" />
          </div>}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className={event.status === 'upcoming' ? 'bg-green-500' : 'bg-blue-500'}>
            {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </Badge>
          <Badge variant="secondary">
            {event.type}
          </Badge>
        </div>
        {event.status === 'upcoming' && <div className="absolute bottom-4 left-4">
            <Badge className="bg-orange-500 text-white">
              <Clock className="w-3 h-3 mr-1" />
              Register Now
            </Badge>
          </div>}
      </div>
      <CardHeader>
        <CardTitle className="course-title text-lg transition-colors duration-300 group-hover:text-primary">
          {event.title}
        </CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.location}
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {event.participants}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-1">
          {event.highlights.slice(0, 3).map((highlight: string, idx: number) => <Badge key={idx} variant="outline" className="text-xs">
              {highlight}
            </Badge>)}
        </div>
      </CardContent>
    </Card>;
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Recent Events & Conferences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and community gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {upcomingEvents.map((event, index) => <EventCard key={`upcoming-${index}`} event={event} index={index} />)}
            </div>
          </div>
        </section>}

      {/* Featured Past Event */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Featured Past Event</h2>
          
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden hover-lift">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src="/lovable-uploads/06037f7d-83dd-438f-8b83-c0ee75a48d96.png" alt="Annual Tech Conference 2024" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-blue-500">Featured</Badge>
                    <Badge variant="outline" className="text-primary">{pastEvents[0].type}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pastEvents[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{pastEvents[0].description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{pastEvents[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{pastEvents[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{pastEvents[0].participants}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pastEvents[0].highlights.map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>)}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.slice(1).map((event, index) => <EventCard key={`past-${index}`} event={event} index={index + upcomingEvents.length + 1} />)}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Event Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-sm font-semibold">Events Hosted</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">2000+</h3>
                <p className="text-sm font-semibold">Total Attendees</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">100+</h3>
                <p className="text-sm font-semibold">Speakers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-muted-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground mb-2">5+</h3>
                <p className="text-sm font-semibold">Venues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Miss Our Next Event</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our mailing list to stay updated on upcoming events and exclusive opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg text-lg hover-lift text-inherit font-semibold bg-cyan-900 hover:bg-cyan-800">
              Subscribe to Updates
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover-lift">
              View Event Calendar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default RecentEvents;