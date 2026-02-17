import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';

const Qualified = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-24 bg-gradient-to-b from-secondary via-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden min-h-screen">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-2xl relative">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-secondary-foreground/60">Progress</span>
              <span className="text-sm font-semibold text-primary">75%</span>
            </div>
            <Progress value={75} className="h-3 bg-secondary-foreground/10" />
            <div className="flex justify-between mt-3 text-xs text-secondary-foreground/40">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> Inquiry</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> Qualification</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> Assessment</span>
              <span className="text-secondary-foreground/60">Design</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-black mb-3">
              Home Qualified! 🎉
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              Final Step: <span className="text-primary font-semibold">Custom Engineering Design</span>
            </p>
            <p className="text-secondary-foreground/50 mt-3 text-sm max-w-md mx-auto">
              Complete this form so our engineers can design a solar system tailored specifically to your property.
            </p>
          </div>

          {/* Glassmorphism Card with GHL Form */}
          <div 
            className="backdrop-blur-xl rounded-3xl border border-white/15 p-6 md:p-8"
            style={{
              background: 'linear-gradient(165deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow: '0 0 60px rgba(0, 209, 145, 0.15), 0 0 120px rgba(0, 209, 145, 0.05)',
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/VMHFzkclWwol8I9KCjdC"
              style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
              id="inline-VMHFzkclWwol8I9KCjdC"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Qualified lead"
              data-height="undefined"
              data-layout-iframe-id="inline-VMHFzkclWwol8I9KCjdC"
              data-form-id="VMHFzkclWwol8I9KCjdC"
              title="Qualified lead"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Qualified;
