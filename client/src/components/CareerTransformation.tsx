import { TrendingUp } from 'lucide-react';

export default function CareerTransformation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange rounded-full text-sm font-semibold text-white mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Career Transformation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            From Struggling Job Seeker to Top Tech Talent
          </h2>
          <p className="text-xl text-gray-600">(in just 90 days)</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Before Card */}
          <div className="bg-coral rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-6">BEFORE RoleRaise</h3>
            <p className="text-xl font-bold text-gray-900 mb-6">Avg. Salary: $85K</p>
            <ul className="space-y-3 text-left text-gray-900">
              <li className="flex items-center">
                <span className="text-red-500 mr-3">❌</span>
                Sending 100+ apps with no response
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-3">❌</span>
                Rejected after first-round interviews
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-3">❌</span>
                No connections at target companies
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-3">❌</span>
                Accepting lowball offers
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-3">❌</span>
                Feeling stuck, no negotiation leverage
              </li>
            </ul>
          </div>
          
          {/* Arrow */}
          <div className="text-center">
            <div className="text-4xl font-black text-primary">→</div>
          </div>
          
          {/* After Card */}
          <div className="bg-mint rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-6">AFTER RoleRaise</h3>
            <p className="text-xl font-bold text-gray-900 mb-6">Avg. Salary: $185K+</p>
            <ul className="space-y-3 text-left text-gray-900">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                Direct referrals from FAANG engineers
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                Insider interview prep
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                Intros to hiring managers
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                Multiple competing offers
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                Expert negotiation = +$34K avg.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Stats Card */}
        <div className="text-center mt-12">
          <div className="bg-beige rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-xl font-black text-gray-900 mb-2">📈 Average Transformation</div>
            <div className="text-lg text-gray-800">$85K → $185K = <strong>+$100K per year</strong></div>
            <div className="text-gray-700 mt-2">That's <strong>$500K+</strong> over 5 years!</div>
          </div>
        </div>
      </div>
    </section>
  );
}