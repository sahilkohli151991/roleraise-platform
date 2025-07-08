import { TrendingUp, ArrowRight, Target, Zap } from 'lucide-react';

export default function CareerTransformation() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-sm font-bold text-white mb-6 shadow-lg">
            <Target className="w-5 h-5 mr-2" />
            CAREER TRANSFORMATION
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            From Struggling Job Seeker to <span className="text-gradient">Top Tech Talent</span>
          </h2>
          <p className="text-2xl text-gray-700 font-bold bg-gray-100 inline-block px-6 py-2 rounded-full">
            In just 90 days
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Before Card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center shadow-xl border-2 border-gray-300">
            <div className="bg-gray-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">-</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">BEFORE RoleRaise</h3>
            <div className="bg-gray-500 text-white rounded-full px-4 py-2 font-bold text-lg mb-6">
              Avg. Salary: $85K
            </div>
            <ul className="space-y-3 text-left text-gray-900">
              <li className="flex items-center">
                <span className="text-gray-500 mr-3">×</span>
                Sending 100+ apps with no response
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 mr-3">×</span>
                Rejected after first-round interviews
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 mr-3">×</span>
                No connections at target companies
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 mr-3">×</span>
                Accepting lowball offers
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 mr-3">×</span>
                Feeling stuck, no negotiation leverage
              </li>
            </ul>
          </div>
          
          {/* Arrow */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <div className="mt-4 text-sm font-bold text-gray-700">90 DAYS</div>
          </div>
          
          {/* After Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center shadow-xl border-2 border-blue-200">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">+</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">AFTER RoleRaise</h3>
            <div className="bg-blue-600 text-white rounded-full px-4 py-2 font-bold text-lg mb-6">
              Avg. Salary: $185K+
            </div>
            <ul className="space-y-3 text-left text-gray-900">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Direct referrals from FAANG engineers
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Insider interview prep
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Intros to hiring managers
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Multiple competing offers
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Expert negotiation = +$34K avg.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Stats Card */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl border-2 border-gray-600">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white mr-3" />
              <div className="text-2xl font-black text-white">TRANSFORMATION IMPACT</div>
            </div>
            <div className="text-3xl font-black text-white mb-2">
              $85K → $185K = <span className="text-gray-200">+$100K per year</span>
            </div>
            <div className="text-xl text-gray-200 font-bold">
              That's <span className="text-white">$500K+</span> over 5 years!
            </div>
            <div className="mt-4 text-sm text-gray-300">
              Average ROI: 2,000% in first year alone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}