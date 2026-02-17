import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolarCalculator from '@/components/SolarCalculator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sun, Battery, Zap, Shield, Users, Leaf, Award, Clock, Star } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';
import solarDetail from '@/assets/solar-panels-detail.jpg';
import installationTeam from '@/assets/installation-team.jpg';
import whiteGloveExperience from '@/assets/white-glove-experience.webp';
import happyHomeownersGroup from '@/assets/happy-group-final.jpg';
import solarTechCloseup from '@/assets/solar-tech-closeup.jpg';

const Index = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '2,500+', label: 'Homes Powered', icon: Sun },
    { value: '50k+', label: 'Tons CO₂ Saved', icon: Leaf },
    { value: '98%', label: 'Client Satisfaction', icon: Users },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consult',
      description: 'Free property & energy assessment',
      icon: Users,
    },
    {
      step: '02',
      title: 'Design',
      description: 'Custom system for max efficiency',
      icon: Sun,
    },
    {
      step: '03',
      title: 'Install',
      description: 'Pro install by certified techs',
      icon: Zap,
    },
    {
      step: '04',
      title: 'Monitor',
      description: '24/7 tracking & lifetime support',
      icon: Shield,
    },
  ];

  const benefits = [
    'Reduce energy bills by up to 90%',
    'Increase property value by $20,000+',
    '25-year performance warranty',
    'Federal tax credit up to 30%',
    'Zero upfront cost options',
    'Premium Tier-1 panels',
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full Screen Background with Parallax Feel */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern home with solar panels"
            className="w-full h-full object-cover"
          />
          {/* Very faint overlay just to ensure text isn't lost on bright spots */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 relative">
              {/* Removed Ambient Glow and Glass Card for cleaner look */}

              <div className="animate-fade-in p-6 md:p-8 rounded-3xl backdrop-blur-md bg-black/10 relative z-10 border border-white/10">
                <span className="inline-flex items-center gap-2 text-emerald-300 font-bold text-sm mb-6 uppercase tracking-wider">
                  <span className="w-8 h-0.5 bg-emerald-400" />
                  Marisolar — Residential Solar
                </span>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-md">
                  The Smartest<br />
                  Investment for<br />
                  Your <span className="gradient-text drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">Estate</span>
                </h1>

                <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-lg drop-shadow-sm font-medium">
                  High-efficiency solar solutions designed for premium homes.
                  Reduce your bill by 90% while increasing property value.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" size="lg" className="text-base px-8 py-6 btn-premium-filled" asChild>
                    <Link to="/contact">
                      Book Free Call <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 py-6 btn-premium hover:bg-white/20" asChild>
                    <Link to="/projects">View Projects</Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-6 mt-10 border-t border-white/20 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img
                          src={`https://i.pravatar.cc/100?u=${i + 15}`}
                          alt="Happy Homeowner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-white/90 font-medium">2,500+ happy homeowners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Calculator */}
            <div className="lg:col-span-5 animate-slide-in-right animation-delay-400 relative">
              <SolarCalculator />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats Section - Floating Glass Cards */}
      {/* Stats Section - Floating Glass Cards */}
      <section className="py-20 relative animate-fade-in animation-delay-600 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover-lift group relative overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display text-4xl font-black text-slate-800 mb-2 relative z-10">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-sm font-medium relative z-10">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-primary" />
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Energy Refined,<br />
                <span className="gradient-text">Future Defined</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine cutting-edge technology with white-glove service to deliver
                solar solutions that exceed expectations. Every installation is custom-engineered
                for your property's unique characteristics.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl glass-card border-white/20 hover:bg-white/40 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" className="group btn-premium-filled" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              <img
                src={solarDetail}
                alt="Solar panel detail"
                className="rounded-3xl shadow-2xl w-full relative hover:scale-[1.02] transition-transform duration-700 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Quick Installation</p>
                    <p className="text-sm text-slate-500">Average 2-3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Our Technology
              <span className="w-8 h-0.5 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground">
              Premium <span className="gradient-text">Innovation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group shadow-2xl glass-card border-0 p-0">
              <img
                src={solarTechCloseup}
                alt="Premium solar technology"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-full mb-3">Premium Technology</span>
                <h3 className="text-3xl font-display font-bold text-white mb-3 text-shadow">Tier-1 Monocrystalline Panels</h3>
                <p className="text-white/80">Industry-leading 22%+ efficiency with 25-year warranty</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group shadow-2xl glass-card border-0 p-0">
              <img
                src={happyHomeownersGroup}
                alt="Satisfied solar customers"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-amber-500/80 backdrop-blur-md text-white text-sm font-medium rounded-full mb-3">Happy Homeowners</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2 text-shadow">2,500+ Families Trust Us</h3>
                <p className="text-white/80 text-sm">98% customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative text-foreground">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Our Process
              <span className="w-8 h-0.5 bg-primary" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 text-slate-900">
              From Sunlight to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Power</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A seamless journey from consultation to energy independence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 h-full hover:-translate-y-2 border border-gray-100 shadow-sm">
                  <span className="text-6xl font-display font-black text-slate-100 absolute top-4 right-4 group-hover:text-slate-200 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-500">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Team Showcase */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
              <img
                src={installationTeam}
                alt="Professional installation team"
                className="rounded-3xl shadow-2xl w-full relative hover:scale-[1.02] transition-transform duration-700 object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Certified Installers</p>
                    <p className="text-sm text-slate-500">NABCEP Certified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-primary" />
                Expert Team
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Professional Installation,<br />
                <span className="gradient-text">Every Time</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our NABCEP-certified technicians bring years of experience to every project.
                We handle everything from permits to final inspection, ensuring a seamless
                experience from start to finish.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex-1 min-w-[160px] hover-lift text-center">
                  <p className="font-display text-4xl font-black text-slate-800 mb-1">100%</p>
                  <p className="text-slate-500 font-medium text-sm">Permit Success Rate</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex-1 min-w-[160px] hover-lift text-center">
                  <p className="font-display text-4xl font-black text-slate-800 mb-1">48hr</p>
                  <p className="text-slate-500 font-medium text-sm">Average Install Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-12 bg-white/10 border-white/20 backdrop-blur-md">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 text-shadow-lg">
              Ready to Go Solar?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of homeowners who are saving money and protecting the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl text-base px-8 py-6 rounded-full"
                asChild
              >
                <Link to="/contact">
                  Book Free Consultation <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6 rounded-full"
                asChild
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
