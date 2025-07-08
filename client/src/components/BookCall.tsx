import { Calendar, Phone } from 'lucide-react';
import { useEffect } from 'react';

// Calendly widget type definitions
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { 
        url: string; 
        parentElement: Element | null; 
        prefill?: any; 
        utm?: any; 
      }) => void;
    };
  }
}

export default function BookCall() {
  // Your Calendly URL - replace with your actual Calendly link
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/kohlisahil151991';

  useEffect(() => {
    // Load Calendly CSS first
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Load Calendly widget script
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Simple timeout to ensure widget loads after script
    const timer = setTimeout(() => {
      const widgetElement = document.querySelector('.calendly-inline-widget');
      if (widgetElement && !widgetElement.innerHTML.trim()) {
        // If widget is empty, try to initialize
        if (window.Calendly?.initInlineWidget) {
          window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: widgetElement,
            prefill: {},
            utm: {}
          });
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [calendlyUrl]);

  return (
    <section id="book-call" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange rounded-full text-sm font-semibold text-white mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Free Strategy Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule call with RoleRaise to discuss your career goals and see if our program is right for you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-6">Schedule call with RoleRaise below:</p>
            </div>
            
            {/* Calendly Inline Widget */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="calendly-inline-widget" 
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
            
            {/* Fallback - Direct link if widget doesn't load */}
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm mb-2">Widget not loading?</p>
              <a 
                href={calendlyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Open Calendly in new tab
              </a>
            </div>
            
            {/* Alternative: Open in Popup Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({ url: calendlyUrl });
                  }
                }}
                className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Call with RoleRaise
              </button>
            </div>
            
            {/* Fallback for when Calendly URL is not set */}
            {calendlyUrl.includes('your-username') && (
              <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Schedule Your Free Call</h3>
                <p className="text-gray-600 mb-6 text-center">Book a 30-minute strategy session with our team</p>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <p className="text-center text-yellow-800 mb-4">
                    <strong>Calendly Setup Required</strong>
                  </p>
                  <p className="text-sm text-yellow-700 text-center mb-4">
                    Please add your Calendly URL to complete the integration
                  </p>
                  <div className="mt-4 text-center">
                    <a 
                      href="mailto:support@roleraise.com?subject=Schedule Strategy Call" 
                      className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
