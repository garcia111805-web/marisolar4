import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // 1. Load GHL booking embed script
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. The "Hammer" method: Forcefully find and remove the Lovable badge
    const hideBadge = () => {
      const badge = document.querySelector('#lovable-badge') || 
                    document.querySelector('.lovable-badge') ||
                    document.querySelector('[data-lovable-badge]');
      if (badge) {
        badge.remove(); 
      }
    };

    // Check frequently for the first 5 seconds after page load
    const interval = setInterval(hideBadge, 100);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* CSS Fallback to hide the badge immediately if it hits the DOM */}
      <style dangerouslySetInnerHTML={{ __html: `
        #lovable-badge, .lovable-badge, [data-lovable-badge] { 
          display: none !important; 
          visibility: hidden !important; 
          opacity: 0 !important; 
          pointer-events: none !important; 
        }
      `}} />

      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Thank You!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your quote request has been submitted successfully. Schedule a consultation below to discuss your solar project with our experts.
            </p>
          </div>

          {/* Booking Calendar */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-premium p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-center mb-6">
                Schedule Your Free Consultation
              </h2>
              <div className="relative" style={{ minHeight: '600px' }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/z8FxtDslOTwYjtfXVzBT" 
                  style={{ width: '100%', height: '600px', border: 'none', overflow: 'hidden' }}
                  scrolling="no" 
                  id="z8FxtDslOTwYjtfXVzBT_1769091994584"
                  title="Schedule Consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
