import { useState } from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentRole: '',
    experience: '',
    salary: '',
    targetSalary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Assessment Submitted!",
          description: "Thank you! We'll be in touch soon with your personalized roadmap.",
        });
        setFormData({
          name: '',
          email: '',
          currentRole: '',
          experience: '',
          salary: '',
          targetSalary: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToAssessment = () => {
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-beige rounded-full text-sm font-semibold text-gray-900 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              500+ Professionals Transformed
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Land Your <span className="text-primary">$200K+ Tech Role</span> in 90 Days
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join <strong className="text-gray-900">500+ professionals</strong> who've doubled their salaries. Get 1-on-1 mentorship from executives at Google, Meta, Amazon & 100+ top companies. <strong className="text-gray-900">92% interview success rate.</strong>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-left">
                <div className="text-3xl font-black text-primary">500+</div>
                <div className="text-sm text-gray-600 font-semibold">Success Stories</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-primary">92%</div>
                <div className="text-sm text-gray-600 font-semibold">Interview Success</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-primary">$200K+</div>
                <div className="text-sm text-gray-600 font-semibold">Average Salary</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToAssessment}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={scrollToBookCall}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all inline-flex items-center justify-center"
              >
                Book Free Call
                <Phone className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Money-Back Guarantee
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No Risk, All Reward
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Start Today
              </div>
            </div>
          </div>
          
          {/* Assessment Form */}
          <div id="assessment" className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Career Assessment</h3>
                <p className="text-gray-600">Get your personalized roadmap to $200K+</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Role</label>
                  <select 
                    name="currentRole" 
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your current role</option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="designer">Designer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
                  <select 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Salary Range</label>
                  <select 
                    name="salary" 
                    value={formData.salary}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select salary range</option>
                    <option value="50-75k">$50K - $75K</option>
                    <option value="75-100k">$75K - $100K</option>
                    <option value="100-150k">$100K - $150K</option>
                    <option value="150-200k">$150K - $200K</option>
                    <option value="200k+">$200K+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Salary</label>
                  <select 
                    name="targetSalary" 
                    value={formData.targetSalary}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select target salary</option>
                    <option value="100-150k">$100K - $150K</option>
                    <option value="150-200k">$150K - $200K</option>
                    <option value="200-300k">$200K - $300K</option>
                    <option value="300k+">$300K+</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Assessment'}
                </button>
              </form>
              
              <div className="flex justify-center items-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-mint px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                  <span className="text-xs font-semibold text-gray-900">100% Free</span>
                </div>
                <div className="flex items-center gap-2 bg-mint px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                  <span className="text-xs font-semibold text-gray-900">No Spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
