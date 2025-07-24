import { Play, Users, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GraduatesCarousel from '@/components/GraduatesCarousel';
import { useEffect, useState } from 'react';
const Activities = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const graduates = [{
    name: "Ahmed Mahmoud",
    specialization: "Oracle Cloud Infrastructure",
    year: "2024",
    achievement: "Successfully completed Oracle Cloud certification program and secured senior position at leading technology company. Now working as cloud infrastructure specialist managing enterprise-level solutions.",
    image: "/lovable-uploads/b9da31b9-fab2-4f64-81a7-230889b31ed7.png"
  }, {
    name: "Fatima Al-Zahra",
    specialization: "Database Administration",
    year: "2024", 
    achievement: "Graduated with excellence in database management and Oracle technologies. Currently leading database operations team and received recognition for outstanding technical contributions.",
    image: "/lovable-uploads/ddb9af83-e3ce-4241-8347-f068d48fb0be.png"
  }, {
    name: "Mohammed Hassan",
    specialization: "IT Solutions Architecture",
    year: "2024",
    achievement: "Completed comprehensive IT solutions program and now working as senior solutions architect. Known for delivering innovative technical presentations and leading successful project implementations.",
    image: "/lovable-uploads/4e0cd540-4f65-4c3d-95d4-236272cfaac3.png"
  }];
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const successVideos = [{
    title: "Campus & Learning Environment",
    description: "Experience our state-of-the-art campus facilities, modern laboratories, and interactive learning spaces designed to foster creativity, collaboration, and hands-on practical experience.",
    thumbnail: "/lovable-uploads/06037f7d-83dd-438f-8b83-c0ee75a48d96.png",
    type: "classroom",
    duration: "2:30",
    videoUrl: "https://drive.google.com/file/d/121ptfyIs7GmJFR701rvIZGBKHbwxqfad/preview"
  }, {
    title: "Industry Partnership",
    description: "Hear from leading industry professionals and employers who partner with us to provide real-world experience, internship opportunities, and direct pathways to career success.",
    thumbnail: "/lovable-uploads/155a6270-d99d-42d3-8bd5-c52168874a39.png",
    type: "employer",
    duration: "4:15",
    videoUrl: "https://drive.google.com/file/d/1Ce4gG3DAdz5jzhJcdoWZTZthofgQeKUe/preview"
  }];
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
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Activities & Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the achievements of our graduates and get inspired by their success stories
          </p>
        </div>
      </section>

      {/* Success Videos Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Story in Motion</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the journey of excellence through our curated collection of stories and experiences
            </p>
          </div>
          
          <div className="space-y-24">
            {successVideos.map((video, index) => <div key={index} className={`
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                  flex flex-col lg:items-center gap-12 lg:gap-16
                `}>
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                      {video.type.replace('-', ' ').toUpperCase()}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Play className="w-4 h-4" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  
                  <button onClick={() => setPlayingVideo(playingVideo === index ? null : index)} className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <Play className="w-5 h-5" />
                    {playingVideo === index ? 'Hide Video' : 'Watch Now'}
                  </button>
                </div>
                
                {/* Video Preview */}
                <div className="flex-1 max-w-2xl">
                  {playingVideo === index ? <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <iframe src={video.videoUrl} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={video.title}></iframe>
                    </div> : <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105" onClick={() => setPlayingVideo(index)}>
                      <div className="aspect-video">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      
                      {/* Video Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/70 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-2xl">
                            <Play className="w-8 h-8 text-primary ml-1" />
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-black/60 text-white border-0 px-3 py-1 text-sm font-medium">
                            {video.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Graduates Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Successful Graduates</h2>
            <p className="text-xl text-muted-foreground">
              Celebrating the achievements of our alumni who are making a difference in the IT industry
            </p>
          </div>

          <GraduatesCarousel graduates={graduates} />
        </div>
      </section>

      {/* Interactive Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Success Metrics</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
                <p className="text-lg font-semibold mb-2">Job Placement Rate</p>
                <p className="text-muted-foreground">Within 6 months of graduation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-2">500+</h3>
                <p className="text-lg font-semibold mb-2">Graduates</p>
                <p className="text-muted-foreground">Successful professionals in the industry</p>
              </CardContent>  
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-accent mb-2">4.8/5</h3>
                <p className="text-lg font-semibold mb-2">Satisfaction Rate</p>
                <p className="text-muted-foreground">Based on graduate feedback</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey towards a successful IT career and become part of our growing alumni network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-primary px-8 py-3 rounded-lg text-lg hover-lift bg-transparent font-semibold">
              Enroll Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover-lift">
              Watch More Stories
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Activities;