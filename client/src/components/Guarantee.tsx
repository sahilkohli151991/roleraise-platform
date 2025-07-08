import { Shield, Target, DollarSign, RotateCcw } from 'lucide-react';

export default function Guarantee() {
  const guarantees = [
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: "Interview Guarantee",
      description: "3 interviews in 90 days or full refund + free support"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-white" />,
      title: "Salary Guarantee", 
      description: "+$10K min. or refund difference + free work until it does"
    },
    {
      icon: <RotateCcw className="w-12 h-12 text-white" />,
      title: "Lifetime Support",
      description: "Extend indefinitely until you land"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20">
            <Shield className="w-4 h-4 mr-2" />
            Zero Risk Guarantee
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            We take all the risk, you get all the reward
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-lg font-semibold text-white">
              <strong>Think About It:</strong> Investing $2,991 now vs. staying $50K/year under-paid...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}