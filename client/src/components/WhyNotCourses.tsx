import { X } from 'lucide-react';

export default function WhyNotCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-coral rounded-full text-sm font-semibold text-white mb-6">
            <X className="w-4 h-4 mr-2" />
            Why Courses Don't Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            We're not selling you another course
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink rounded-2xl p-12 text-center">
            <p className="text-lg leading-relaxed text-gray-900">
              You can find courses on YouTube and Udemy. What you can't find is <strong>direct access to hiring managers at Google, Meta, and Amazon</strong> who will personally refer you and coach you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}