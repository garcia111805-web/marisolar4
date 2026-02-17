import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import happyHomeownersGroup from '@/assets/happy-group-final.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(888) 555-SOLAR',
      description: 'Mon-Fri 8am-6pm PST',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@marisolar.com',
      description: 'Response within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Los Angeles, CA',
      description: 'Serving all 48 states',
    },
    {
      icon: Clock,
      title: 'Consultation',
      value: 'Free Estimate',
      description: 'Usually within 48 hours',
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6 uppercase tracking-wider animate-fade-in">
            <span className="w-8 h-0.5 bg-primary" />
            Get In Touch
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6 animate-fade-in animation-delay-200">
            Start Your Solar<br />
            <span className="gradient-text">Journey Today</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in animation-delay-400">
            Ready to reduce your energy bills and increase your property value?
            Our team is here to design the perfect solution for your home.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-primary" />
                Contact Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
                Book Your Free <span className="gradient-text">Consultation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Schedule a call with our energy consultants. We'll analyze your property,
                answer your questions, and design a custom solar solution tailored to your needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card-premium p-5 hover-lift card-glow group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-bold text-foreground mb-1">{info.title}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                  </div>
                ))}
              </div>

              {/* Customer Image */}
              <div className="relative rounded-3xl overflow-hidden group shadow-premium">
                <img
                  src={happyHomeownersGroup}
                  alt="Happy Marisolar customers"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-card font-bold text-lg">Join 2,500+ Happy Homeowners</p>
                  <p className="text-card/70">98% customer satisfaction rate</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-primary" />
            FAQ
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-10">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="glass-card-premium p-6 hover-lift card-glow">
              <h3 className="font-bold text-foreground text-lg mb-3">How long does installation take?</h3>
              <p className="text-muted-foreground">
                Most residential installations are completed in 2-3 days once permits are approved.
              </p>
            </div>
            <div className="glass-card-premium p-6 hover-lift card-glow">
              <h3 className="font-bold text-foreground text-lg mb-3">What about financing?</h3>
              <p className="text-muted-foreground">
                We offer $0 down financing with payments often lower than your current bill.
              </p>
            </div>
            <div className="glass-card-premium p-6 hover-lift card-glow">
              <h3 className="font-bold text-foreground text-lg mb-3">Is my roof suitable?</h3>
              <p className="text-muted-foreground">
                Our free consultation includes a complete roof and sun exposure analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Our energy consultants are ready to help you make the switch to solar.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-xl text-base px-8 py-6"
            asChild
          >
            <Link to="/services">
              Explore Our Services <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
