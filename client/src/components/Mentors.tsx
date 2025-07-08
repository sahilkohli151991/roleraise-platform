import { useQuery } from '@tanstack/react-query';
import { Shield } from 'lucide-react';

interface Mentor {
  id?: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  avatarUrl?: string;
  experience?: string;
}

export default function Mentors() {
  const { data: mentors = [], isLoading, error } = useQuery<Mentor[]>({
    queryKey: ['/api/mentors'],
  });

  if (isLoading) {
    return (
      <section id="mentors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky rounded-full text-sm font-semibold text-white mb-6">
              <Shield className="w-4 h-4 mr-2" />
              World-Class Mentors
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Learn from the Best</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-200 animate-pulse">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-28 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="mentors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Unable to load mentors at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky rounded-full text-sm font-semibold text-white mb-6">
            <Shield className="w-4 h-4 mr-2" />
            World-Class Mentors
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Learn from the Best</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get 1-on-1 mentorship from executives at Google, Meta, Amazon, Netflix, and 100+ other top companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card rounded-2xl p-8 text-center shadow-lg border border-gray-200 card-hover">
              <img 
                src={mentor.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=5046E5&color=fff&size=96`}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-gray-900 mb-2">{mentor.name}</h3>
              <p className="text-primary font-semibold mb-2">{mentor.title} @ {mentor.company}</p>
              <p className="text-gray-600 text-sm">{mentor.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">and 100+ more mentors from top companies</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-2xl font-bold text-gray-400">Google</span>
            <span className="text-2xl font-bold text-gray-400">Meta</span>
            <span className="text-2xl font-bold text-gray-400">Amazon</span>
            <span className="text-2xl font-bold text-gray-400">Netflix</span>
            <span className="text-2xl font-bold text-gray-400">Apple</span>
          </div>
        </div>
      </div>
    </section>
  );
}
