import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load GHL form embed script for booking widget
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="glass-card p-6 overflow-hidden">
      <div className="relative" style={{ minHeight: '700px' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/z8FxtDslOTwYjtfXVzBT"
          style={{ width: '100%', height: '700px', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="z8FxtDslOTwYjtfXVzBT_1769235461571"
          title="Book a Consultation"
        />
      </div>
    </div>
  );
};

export default ContactForm;
