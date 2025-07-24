import { Server, Cloud, Shield, Database, Cpu, Network, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const ITSolutions = () => {
  const solutions = [{
    icon: <Server className="w-8 h-8" />,
    title: "Server Management",
    description: "Complete server infrastructure management and maintenance",
    features: ["24/7 Monitoring", "Performance Optimization", "Security Updates"]
  }, {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for modern businesses",
    features: ["AWS/Azure Setup", "Migration Services", "Cost Optimization"]
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data",
    features: ["Threat Assessment", "Firewall Configuration", "Security Training"]
  }, {
    icon: <Database className="w-8 h-8" />,
    title: "Database Administration",
    description: "Professional database design, implementation, and management",
    features: ["SQL Server", "Oracle", "MySQL", "PostgreSQL"]
  }, {
    icon: <Network className="w-8 h-8" />,
    title: "Network Infrastructure",
    description: "Design and implementation of robust network solutions",
    features: ["Network Design", "Router Configuration", "VPN Setup"]
  }, {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications and e-commerce solutions",
    features: ["Responsive Design", "E-commerce", "API Development"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IT Solutions & Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive IT consulting, training, and solutions
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Our IT Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <Card key={index} className="hover-lift group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, scalable, and secure IT environment
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover-lift">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ITSolutions;