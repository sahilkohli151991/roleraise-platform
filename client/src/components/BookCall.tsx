import { Calendar, Phone } from 'lucide-react';
import { useEffect } from 'react';

// Calendly widget type definitions
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function BookCall() {
  // Your Calendly URL - replace with your actual Calendly link
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/kohlisahil151991';

  useEffect(() => {
    // Load Calendly inline and popup widget scripts
    const inlineScript = document.createElement('script');
    inlineScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    inlineScript.async = true;
    document.body.appendChild(inlineScript);

    const popupScript = document.createElement('script');
    popupScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    popupScript.async = true;
    document.head.appendChild(popupScript);

    return () => {
      if (document.body.contains(inlineScript)) {
        document.body.removeChild(inlineScript);
      }
      if (document.head.contains(popupScript)) {
        document.head.removeChild(popupScript);
      }
    };
  }, []);

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
            Book a free 30-minute strategy call to discuss your career goals and see if RoleRaise is right for you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-6">Schedule your free strategy call below:</p>
            </div>
            
            {/* Calendly Inline Widget */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="calendly-inline-widget" 
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
              />
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
                Open in Popup
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
