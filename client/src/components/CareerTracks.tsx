import { Code, BarChart3, Rocket, Palette, TrendingUp, Settings, Users } from 'lucide-react';

export default function CareerTracks() {
  const tracks = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Engineering",
      description: "Frontend, Backend, Full-Stack, Mobile",
      salary: "Avg. $180K+"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Data Science", 
      description: "Data Scientist, ML Engineer, Research Scientist",
      salary: "Avg. $180K+"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Product Management",
      description: "PM, Sr PM, Group PM, Dir",
      salary: "Avg. $190K+"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design & UX",
      description: "Product Designer, UX Researcher", 
      salary: "Avg. $160K+"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth & Marketing",
      description: "Growth PM, Marketing Mgr",
      salary: "Avg. $150K+"
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Engineering Leadership",
      description: "Tech Lead, Eng Manager",
      salary: "Avg. $220K+"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Agile Program Management",
      description: "Scrum Master, Program Manager, Agile Coach",
      salary: "Avg. $165K+"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky rounded-full text-sm font-semibold text-white mb-6">
            🎯 Specialization Tracks
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            We specialize in high-demand tech roles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mentors have deep, track-specific expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 card-hover">
              <div className="flex justify-center mb-4">
                {track.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{track.title}</h3>
              <p className="text-gray-600 mb-4">{track.description}</p>
              <div className="text-lg font-bold text-primary">{track.salary}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}