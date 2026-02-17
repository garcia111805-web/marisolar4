import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, DollarSign } from 'lucide-react';
import projectMalibu from '@/assets/project-malibu.jpg';
import projectOceanView from '@/assets/project-ocean-view.png';
import projectModernParadiseBefore from '@/assets/project-modern-paradise-before.jpeg';
import projectMountainRetreatBefore from '@/assets/project-mountain-retreat-before.jpeg';
import projectDesertOasisBefore from '@/assets/project-desert-oasis-before.jpeg';
import projectDesertOasisAfter from '@/assets/project-desert-oasis-after-raw.jpg';
import projectMiami from '@/assets/project-miami.jpg';
import projectAspen from '@/assets/project-aspen.jpg';
import installationTeam from '@/assets/installation-team.jpg';
import happyHomeownersGroup from '@/assets/happy-group-final.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Ocean View Estate',
      location: 'Malibu, CA',
      systemSize: '18.5 kW',
      annualSavings: '$12,400',
      imageBefore: projectOceanView,
      imageAfter: projectMalibu,
      description: 'Luxury oceanfront property with seamless roof integration and battery backup.',
    },
    {
      id: 2,
      title: 'Modern Paradise',
      location: 'Miami, FL',
      systemSize: '22.0 kW',
      annualSavings: '$15,200',
      imageBefore: projectModernParadiseBefore,
      imageAfter: projectMiami,
      description: 'Contemporary design with maximum sun exposure and EV charging integration.',
    },
    {
      id: 3,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      systemSize: '15.0 kW',
      annualSavings: '$9,800',
      imageBefore: projectMountainRetreatBefore,
      imageAfter: projectAspen,
      description: 'High-altitude installation optimized for snow load and cold weather performance.',
    },
    {
      id: 5,
      title: 'Desert Oasis',
      location: 'Scottsdale, AZ',
      systemSize: '24.0 kW',
      annualSavings: '$18,600',
      imageBefore: projectDesertOasisBefore,
      imageAfter: projectDesertOasisAfter,
      description: 'Maximum efficiency design taking advantage of 300+ sunny days per year.',
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
            Our Portfolio
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Modern Estates,<br />
            <span className="gradient-text">Powered by the Sun</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our gallery of premium solar installations across the nation.
            Each project is custom-engineered for maximum efficiency and aesthetics.
          </p>
        </div>
      </section>

      {/* Projects Grid - Before/After */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="group glass-card overflow-hidden hover-lift"
              >
                {/* Before/After Image Split */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.imageBefore}
                        alt={`${project.title} - Before`}
                        className={`w-full h-full object-cover scale-110 ${project.initialGrayscale ? 'grayscale brightness-75' : ''}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 to-foreground/60" />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-foreground/70 text-card text-xs font-semibold rounded-md backdrop-blur-sm">
                        Before
                      </span>
                    </div>
                    {/* After */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.imageAfter}
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/30" />
                      <span className="absolute top-3 right-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-md backdrop-blur-sm">
                        After
                      </span>
                    </div>
                  </div>
                  {/* Center divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 z-10 flex items-center justify-center shadow-md">
                    <div className="flex gap-0.5">
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[5px] border-r-foreground/60" />
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-foreground/60" />
                    </div>
                  </div>
                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-card z-10">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{project.location}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground">System Size</p>
                        <p className="font-bold text-foreground text-sm">{project.systemSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <DollarSign className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground">Annual Savings</p>
                        <p className="font-bold text-foreground text-sm">{project.annualSavings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Customer Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden group h-72">
              <img
                src={installationTeam}
                alt="Our installation team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-display font-bold text-card mb-2">Expert Installation Team</h3>
                <p className="text-card/70 text-sm">NABCEP certified professionals delivering excellence on every project</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-72">
              <img
                src={happyHomeownersGroup}
                alt="Happy customers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-display font-bold text-card mb-2">Satisfied Homeowners</h3>
                <p className="text-card/70 text-sm">Join 2,500+ families enjoying clean, affordable energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }} />
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-primary-foreground">
            <div className="hover:scale-105 transition-transform">
              <p className="font-display text-3xl font-bold mb-1">2,500+</p>
              <p className="opacity-70 text-sm">Installations</p>
            </div>
            <div className="hover:scale-105 transition-transform">
              <p className="font-display text-3xl font-bold mb-1">48</p>
              <p className="opacity-70 text-sm">States Covered</p>
            </div>
            <div className="hover:scale-105 transition-transform">
              <p className="font-display text-3xl font-bold mb-1">50MW+</p>
              <p className="opacity-70 text-sm">Total Capacity</p>
            </div>
            <div className="hover:scale-105 transition-transform">
              <p className="font-display text-3xl font-bold mb-1">$40M+</p>
              <p className="opacity-70 text-sm">Client Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your Home Could Be Next
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join our growing portfolio of premium solar installations.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
