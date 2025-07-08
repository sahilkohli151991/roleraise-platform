import { useQuery } from '@tanstack/react-query';
import { Heart, Star, TrendingUp } from 'lucide-react';

interface Testimonial {
  id?: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  salaryIncrease?: string;
  rating?: number;
  location?: string;
}

export default function Testimonials() {
  const { data: testimonials = [], isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-coral rounded-full text-sm font-semibold text-white mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Our Members Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Unable to load testimonials at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="section-badge mb-8">
            <Heart className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">
            Join hundreds of professionals who've transformed their careers and doubled their salaries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card group">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=5046E5&color=fff&size=64`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 font-medium">{testimonial.role} @ {testimonial.company}</p>
                  {testimonial.location && (
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                {testimonial.salaryIncrease && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {testimonial.salaryIncrease}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
