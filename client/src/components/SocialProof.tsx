import { Star, Users, Award, TrendingUp } from 'lucide-react';

export default function SocialProof() {

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold mb-8">Our clients now work at:</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Google_Logo_1.png"
                  alt="Google"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Meta_idlf4cVSsS_1.png"
                  alt="Meta"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Amazon_Logo_1.png"
                  alt="Amazon"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Netflix_Logo_1.png"
                  alt="Netflix"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Stripe_Logo_1.png"
                  alt="Stripe"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/KPMG_id9tLD2YU7_1.png"
                  alt="KPMG"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/X_idJxGuURW1_1.png"
                  alt="X"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/Innovaccer_id6-tvzgdK_1.png"
                  alt="Innovaccer"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200 p-3">
                <img 
                  src="/attached_assets/BeOne Medicines_idjdyMFja5_1.png"
                  alt="BeOne Medicines"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
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