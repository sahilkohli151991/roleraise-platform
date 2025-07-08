import { X } from 'lucide-react';

export default function WhyNotCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-red-600 rounded-full text-sm font-bold text-white mb-6">
            <X className="w-4 h-4 mr-2" />
            STOP WASTING TIME ON COURSES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Why 97% of Career Courses FAIL
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            (And why we're NOT selling you another one)
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">❌ What Courses Give You:</h3>
              <ul className="space-y-3 text-red-700">
                <li>• Generic resume templates</li>
                <li>• Outdated interview questions</li>
                <li>• No personalized feedback</li>
                <li>• Zero networking opportunities</li>
                <li>• Generic career advice</li>
                <li>• No salary negotiation help</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">✅ What We Give You:</h3>
              <ul className="space-y-3 text-green-700">
                <li>• Direct referrals to hiring managers</li>
                <li>• Real interview questions from this month</li>
                <li>• 1-on-1 coaching with FAANG veterans</li>
                <li>• Access to exclusive job networks</li>
                <li>• Personalized career strategy</li>
                <li>• $34K average salary negotiation boost</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <p className="text-2xl font-bold mb-4">
              The Truth About Career Success:
            </p>
            <p className="text-xl leading-relaxed">
              You can find courses on YouTube and Udemy. What you can't find is <strong>direct access to hiring managers at Google, Meta, and Amazon</strong> who will personally refer you and coach you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}