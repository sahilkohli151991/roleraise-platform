import { Star, Users, Award, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  // Companies where our clients now work (based on testimonials)
  const clientCompanies = [
    'Meta', 'Apptad', 'RetailStat', 'Innovaccer', 'Commonwealth Bank', 
    'KPMG', 'BeOne Medicines', 'Google', 'Amazon', 'Microsoft', 'Uber', 'Stripe'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold mb-8">Our clients now work at:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {clientCompanies.map((company, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="text-lg font-bold text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-3">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Clients Hired</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">92%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-3">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">$34K</div>
            <div className="text-sm text-gray-600">Avg. Salary Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
}