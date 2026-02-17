import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';
import installationTeam from '@/assets/installation-team.jpg';
import whiteGloveNew from '@/assets/white-glove-new.jpg';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Engineering Excellence',
      description: 'Every system is designed by certified engineers for optimal performance.',
    },
    {
      icon: Users,
      title: 'White-Glove Service',
      description: 'Dedicated project managers ensure seamless experience from start to finish.',
    },
    {
      icon: Target,
      title: 'Precision Installation',
      description: 'Our certified technicians deliver meticulous installations every time.',
    },
    {
      icon: Heart,
      title: 'Customer Commitment',
      description: 'Lifetime support and comprehensive warranties on every installation.',
    },
  ];

  const team = [
    {
      name: 'Michael Chen',
      role: 'CEO & Founder',
      bio: '20+ years in renewable energy. Former Tesla Energy executive.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Technology Officer',
      bio: 'MIT engineer. Pioneer in residential solar optimization.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'David Rodriguez',
      role: 'VP of Operations',
      bio: '15 years managing premium installations nationwide.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-primary" />
            About Us
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powering Premium Homes<br />
            <span className="gradient-text">Since 2009</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine cutting-edge technology with uncompromising service
            to deliver solar solutions worthy of the finest estates.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary font-medium text-sm mb-2 block">Our Mission</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Redefining What Solar Can Be
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Marisolar, we believe sustainable energy should enhance your lifestyle,
                not compromise it. We bring the same excellence found in luxury home
                construction to the solar industry.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every installation is a testament to our commitment to quality.
                From the premium Tier-1 panels to the white-glove service,
                we obsess over every detail for effortless energy independence.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="hover:scale-105 transition-transform">
                  <p className="font-display text-3xl font-bold gradient-text">15+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <p className="font-display text-3xl font-bold gradient-text">2,500+</p>
                  <p className="text-muted-foreground text-sm">Homes Powered</p>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <p className="font-display text-3xl font-bold gradient-text">98%</p>
                  <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Marisolar installation"
                className="rounded-2xl shadow-xl w-full relative hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden group h-80">
              <img
                src={installationTeam}
                alt="Our expert team at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-sm font-medium mb-2 block">Our Team</span>
                <h3 className="text-2xl font-display font-bold text-card mb-2">NABCEP Certified Experts</h3>
                <p className="text-card/70 text-sm">Every technician is trained and certified to the highest industry standards</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-80">
              <img
                src={whiteGloveNew}
                alt="White-glove service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-sm font-medium mb-2 block">Customer First</span>
                <h3 className="text-2xl font-display font-bold text-card mb-2">White-Glove Experience</h3>
                <p className="text-card/70 text-sm">Dedicated project managers guide you through every step</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              The principles that guide every installation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-5 text-center hover-lift group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Leadership Team
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Industry veterans dedicated to your energy independence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center glass-card p-5 hover-lift group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-0.5">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-secondary via-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Let's Build Something Great
          </h2>
          <p className="text-secondary-foreground/60 mb-6 max-w-lg mx-auto">
            Experience the Marisolar difference firsthand.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-xl"
            asChild
          >
            <Link to="/contact">
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
