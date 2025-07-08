import { X } from 'lucide-react';

export default function WhyNotCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">
            <X className="w-4 h-4 mr-2" />
            STOP WASTING TIME ON COURSES
          </div>
          <h2 className="heading-2 mb-6">
            Why 97% of Career Courses FAIL
          </h2>
          <p className="body-text-large">
            (And why we're NOT selling you another one)
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-2xl shadow-sm">
              <h3 className="heading-3 text-red-800 mb-6">❌ What Courses Give You:</h3>
              <ul className="space-y-4 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="body-text">Generic resume templates that look like everyone else's</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="body-text">Outdated interview questions from 2019</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="body-text">Zero personalized feedback or coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="body-text">No networking opportunities with real hiring managers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="body-text">Generic career advice that doesn't work</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-2xl shadow-sm">
              <h3 className="heading-3 text-green-800 mb-6">✅ What We Give You:</h3>
              <ul className="space-y-4 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">Direct referrals to hiring managers at top companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">Real interview questions from this month's interviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">1-on-1 coaching with FAANG executives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">Access to exclusive job networks and hidden opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">Personalized career strategy tailored to your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="body-text">$34K average salary negotiation boost</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <p className="text-2xl font-bold mb-4">
              The Truth About Career Success:
            </p>
            <p className="text-xl leading-relaxed">
              You can find courses on YouTube and Udemy. What you can't find is <strong>direct access to hiring managers at Google, Meta, Amazon, Uber, Stripe, and other top tech companies</strong> who will personally refer you and coach you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}