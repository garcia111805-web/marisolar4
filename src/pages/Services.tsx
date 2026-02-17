import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sun, Battery, Zap, Shield, Wrench, BarChart3 } from 'lucide-react';
import solarDetail from '@/assets/solar-panels-detail.jpg';
import batteryStorage from '@/assets/battery-storage.jpg';
import evCharging from '@/assets/ev-charging.jpg';

const Services = () => {
  const services = [
    {
      id: 'residential-solar',
      icon: Sun,
      title: 'Residential Solar',
      subtitle: 'Premium Home Installations',
      description: 'Custom-designed solar systems that maximize energy production while complementing your home\'s architecture. Our Tier-1 panels deliver industry-leading efficiency and aesthetics.',
      features: ['Custom system design', 'Premium Tier-1 panels', '25-year performance warranty', 'Seamless roof integration', 'Minimal visual footprint', 'Maximum energy harvest'],
      image: solarDetail,
    },
    {
      id: 'battery-storage',
      icon: Battery,
      title: 'Battery Storage',
      subtitle: 'Energy Independence',
      description: 'Store excess solar energy for use during peak hours or outages. Our battery solutions provide complete energy independence with zero downtime during grid failures.',
      features: ['Tesla Powerwall certified', 'Seamless backup power', 'Peak shaving optimization', 'Mobile monitoring app', 'Expandable capacity', '10-year warranty'],
      image: batteryStorage,
    },
    {
      id: 'ev-charging',
      icon: Zap,
      title: 'EV Charging',
      subtitle: 'Power Your Drive',
      description: 'Complete your sustainable lifestyle with integrated EV charging. Charge your vehicle with clean, solar-generated energy right from your garage.',
      features: ['Level 2 fast charging', 'Smart scheduling', 'Solar integration', 'Multiple vehicle support', 'Weatherproof design', 'Professional installation'],
      image: evCharging,
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Maintenance & Monitoring',
      description: '24/7 system monitoring and proactive maintenance for optimal performance.',
      image: 'https://coldwellenergy.com/wp-content/uploads/2021/08/monitoring-solar-energy-system-in-california-1.jpg'
    },
    {
      icon: BarChart3,
      title: 'Energy Audit',
      description: 'Comprehensive analysis of your energy consumption to maximize savings.',
      image: 'https://energysavings.com/wp-content/uploads/2025/03/solar-energy-as-a-service-technician-takes-reading-from-solar-panels.jpg'
    },
    {
      icon: Shield,
      title: 'Extended Warranty',
      description: 'Premium protection plans for complete peace of mind.',
      image: 'https://www.energymatters.com.au/wp-content/uploads/2025/11/solar-warranty.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-primary" />
            Our Services
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
            Tailored Energy<br />
            <span className="gradient-text">Independence</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Comprehensive solar solutions designed for premium homes. From installation to maintenance, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 hover:scale-110 transition-transform border border-primary/10">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-primary font-semibold text-sm mb-2 block uppercase tracking-wider">{service.subtitle}</span>
                <h2 className="font-display text-4xl font-black text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="hero" size="lg" className="btn-premium" asChild>
                  <Link to="/contact">Book a Call <ArrowRight className="w-5 h-5 ml-1" /></Link>
                </Button>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={service.image} alt={service.title} className="rounded-3xl shadow-premium w-full relative hover:scale-[1.02] transition-transform duration-700 object-cover aspect-[4/3]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-black text-foreground mb-4">Additional <span className="gradient-text">Services</span></h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">Complete support throughout your solar journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-0">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-secondary via-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Ready to Start Saving?</h2>
          <p className="text-secondary-foreground/60 text-lg mb-8 max-w-lg mx-auto">Get a customized quote for your home in minutes.</p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-xl text-base px-8 py-6" asChild>
            <Link to="/contact">Schedule Free Consultation <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
