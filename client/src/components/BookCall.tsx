import { Calendar, Phone } from 'lucide-react';
import { useEffect } from 'react';

export default function BookCall() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600 mb-6">Schedule your free strategy call below:</p>
            
            {/* Calendly scheduling - requires setup */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Free Call</h3>
              <p className="text-gray-600 mb-6">Book a 30-minute strategy session with our team</p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  <strong>Calendly Integration Setup Required</strong>
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Contact support to schedule your strategy call or visit our booking page directly
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
          </div>
        </div>
      </div>
    </section>
  );
}
