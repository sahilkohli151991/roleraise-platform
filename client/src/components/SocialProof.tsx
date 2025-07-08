import { Star, Users, Award, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const companies = [
    'Google', 'Meta', 'Amazon', 'Netflix', 'Apple', 'Microsoft', 'Uber', 'Airbnb', 'Stripe', 'Salesforce', 'Tesla', 'Spotify'
  ];

  const recentSuccess = [
    { name: 'Sarah K.', role: 'Data Scientist $240K at Google', time: '3 days ago' },
    { name: 'Mike R.', role: 'Product Manager $190K at Uber', time: '1 week ago' },
    { name: 'Jessica L.', role: 'Program Manager $220K at Stripe', time: '2 weeks ago' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recent Success Feed */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">🔥 Recent Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentSuccess.map((success, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-gray-900">{success.name}</p>
                    <p className="text-sm text-gray-500">{success.time}</p>
                  </div>
                </div>
                <p className="text-green-600 font-semibold">{success.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold mb-6">Our clients now work at:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
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