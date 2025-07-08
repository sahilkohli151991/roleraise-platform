import { Star, Users, Award, TrendingUp } from 'lucide-react';

export default function SocialProof() {

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold mb-8">Our clients now work at:</p>
          <div className="overflow-hidden">
            <div className="animate-[scroll_30s_linear_infinite] flex items-center space-x-12">
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Google_Logo_1.png"
                  alt="Google"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Meta_idlf4cVSsS_1.png"
                  alt="Meta"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Amazon_Logo_1.png"
                  alt="Amazon"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Netflix_Logo_1.png"
                  alt="Netflix"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Stripe_Logo_1.png"
                  alt="Stripe"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/KPMG_id9tLD2YU7_1.png"
                  alt="KPMG"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/X_idJxGuURW1_1.png"
                  alt="X"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Innovaccer_id6-tvzgdK_1.png"
                  alt="Innovaccer"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/BeOne Medicines_idjdyMFja5_1.png"
                  alt="BeOne Medicines"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Additional companies */}
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Microsoft</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Apple</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Tesla</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Uber</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Airbnb</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Spotify</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Salesforce</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Adobe</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Oracle</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">IBM</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Snapchat</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">PayPal</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Zoom</span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">Slack</span>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Google_Logo_1.png"
                  alt="Google"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Meta_idlf4cVSsS_1.png"
                  alt="Meta"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300">
                <img 
                  src="/attached_assets/Amazon_Logo_1.png"
                  alt="Amazon"
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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