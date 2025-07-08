import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const questions = [
    {
      question: "I don't have enough experience for FAANG",
      answer: "Clients range 2–15+ yrs. We place both juniors and principals."
    },
    {
      question: "This seems expensive",
      answer: "Cheapest $34K raise you'll ever get; money-back guarantee."
    },
    {
      question: "No time for coaching?",
      answer: "3–4 hrs/week replaces 20+ hrs of blind apps; 75% faster results."
    },
    {
      question: "What if I don't get interviews?",
      answer: "At least 3 top-tier interviews in 90 days or 100% refund."
    },
    {
      question: "Does this work outside the US?",
      answer: "Yes—US, CA, UK, AU, DE, BR; global FAANG network."
    },
    {
      question: "Can't I learn this on YouTube?",
      answer: "YouTube can't refer you to a Principal Engineer or negotiate $240K."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Common Questions
          </div>
          <h2 className="heading-2 mb-6">
            But what if you're thinking...
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="heading-4 mb-4">"{item.question}"</h3>
              <p className="body-text">
                <strong>{item.answer}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}