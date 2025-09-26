import React from 'react';
import { Mic, FileText, Brain, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Speaking Practice",
      description: "Advanced AI-powered speaking practice with real-time feedback and pronunciation analysis.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS exam conditions perfectly.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Band Score",
      description: "Intelligent scoring system that predicts your IELTS band score with 95% accuracy.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Tutors",
      description: "Learn from certified IELTS instructors with proven track records of success.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Pro?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with expert instruction 
            to deliver unmatched IELTS preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border border-gray-100 hover:border-purple-200"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.description}
              </p>

              {/* Hover Effect Glow */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;