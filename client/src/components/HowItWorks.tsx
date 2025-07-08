import { Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "We analyze your current skills, experience, and career goals to create a personalized roadmap"
    },
    {
      number: 2,
      title: "Mentorship",
      description: "Get matched with a senior executive mentor from Google, Meta, Amazon, or other top companies"
    },
    {
      number: 3,
      title: "Preparation",
      description: "Intensive training on technical skills, system design, behavioral interviews, and negotiation"
    },
    {
      number: 4,
      title: "Success",
      description: "Land your $200K+ role with our 92% success rate and ongoing support through your first 90 days"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">
            <Zap className="w-4 h-4 mr-2" />
            The Process
          </div>
          <h2 className="heading-2 mb-6">How It Works</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            Our proven 4-step system has helped 500+ professionals land their dream roles at top tech companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
