import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+962 6 123 4567", "+962 79 123 4567"],
      action: "Call Now"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["01553040088"],
      action: "Chat Now",
      link: "https://wa.me/201553040088"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      details: ["info@raly.com", "training@raly.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Tech Street", "Amman, Jordan 11195"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Sun - Thu: 9:00 AM - 6:00 PM", "Fri - Sat: Closed"],
      action: "Schedule Visit"
    }
  ];

  const offices = [
    {
      name: "Main Office - Amman",
      address: "123 Tech Street, Amman",
      phone: "+962 6 123 4567",
      type: "Headquarters"
    },
    {
      name: "Training Center",
      address: "456 Learning Ave, Amman", 
      phone: "+962 6 234 5678",
      type: "Training Hub"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ready to start your IT journey? Contact us today and let's discuss how we can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gradient">Send Us a Message</h2>
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="Your first name" className="animated-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Your last name" className="animated-border" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="animated-border" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input type="tel" placeholder="+962 79 123 4567" className="animated-border" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="What can we help you with?" className="animated-border" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea 
                        placeholder="Tell us more about your needs..." 
                        className="min-h-[120px] animated-border"
                      />
                    </div>
                    
                    <Button className="w-full hover-lift group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gradient">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1 text-muted-foreground">
                            {info.details.map((detail, idx) => (
                              <p key={idx}>{detail}</p>
                            ))}
                          </div>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-primary hover:text-primary/80 font-medium text-sm mt-2 inline-block"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.action} →
                            </a>
                          ) : (
                            <button className="text-primary hover:text-primary/80 font-medium text-sm mt-2">
                              {info.action} →
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{office.name}</CardTitle>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                      {office.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="bg-gradient-primary h-32 rounded-lg flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your IT Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us today to learn more about our programs and how we can help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;