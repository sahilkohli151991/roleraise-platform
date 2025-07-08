import { Check, CreditCard, Users, Award } from 'lucide-react';
import PayPalButton from './PayPalButton';

export default function Pricing() {
  const plans = [
    {
      name: "Essential",
      description: "Perfect for early-career professionals",
      price: 2497,
      features: [
        "Career assessment & strategy",
        "Resume & LinkedIn optimization",
        "Interview preparation (4 sessions)",
        "Email support"
      ]
    },
    {
      name: "Premium",
      description: "For serious career changers",
      price: 4997,
      featured: true,
      features: [
        "Everything in Essential",
        "1-on-1 mentor matching",
        "Weekly mentorship calls (8 sessions)",
        "System design training",
        "Negotiation coaching"
      ]
    },
    {
      name: "Elite",
      description: "For executives & senior professionals",
      price: 9997,
      features: [
        "Everything in Premium",
        "C-level mentor assignment",
        "Executive presence coaching",
        "Direct introductions to hiring managers",
        "90-day job guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">
            <CreditCard className="w-4 h-4 mr-2" />
            Investment Options
          </div>
          <h2 className="heading-2 mb-6">Your $200K+ Career Investment</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            Choose the fastest path to your dream role. Average ROI: 400% within 90 days
          </p>
          <div className="mt-6 bg-yellow-100 border border-yellow-400 rounded-lg p-4 inline-block">
            <p className="text-yellow-800 font-bold">
              ⚡ Early Bird Pricing - Save $2,000 (Only 15 spots left)
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                plan.featured 
                  ? 'border-primary transform scale-105 relative' 
                  : 'border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-4xl font-black text-gray-900 mb-2">${plan.price.toLocaleString()}</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="paypal-button-container">
                <PayPalButton 
                  amount={plan.price.toString()}
                  currency="USD"
                  intent="CAPTURE"
                  id={`paypal-button-${plan.name.toLowerCase()}`}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-4 mb-2">90-Day Guarantee</h3>
                <p className="text-gray-600 text-sm">Get 3+ interviews or full refund</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-4 mb-2">FAANG Mentors</h3>
                <p className="text-gray-600 text-sm">Direct access to top executives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="heading-4 mb-2">92% Success Rate</h3>
                <p className="text-gray-600 text-sm">Proven track record of results</p>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-800 font-semibold mb-4">
                <Check className="w-5 h-5 mr-2" />
                Risk-Free Investment
              </div>
              <p className="text-gray-600">Join 500+ professionals who transformed their careers with our proven system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
