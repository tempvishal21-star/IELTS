import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "8.5 Band",
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "IELTS Pro transformed my preparation journey. The AI feedback and expert guidance helped me achieve my dream score in just 3 months!",
      country: "Canada",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Ahmed Hassan",
      score: "8.0 Band",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "The speaking practice sessions were incredibly helpful. The real-time feedback improved my confidence and pronunciation significantly.",
      country: "UAE",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Maria Rodriguez",
      score: "7.5 Band",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "Excellent mock tests that perfectly simulate the real exam. The detailed analysis helped me identify and improve my weak areas.",
      country: "Spain",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join thousands of students who achieved their target IELTS scores with IELTS Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 relative group border border-gray-100 hover:border-purple-200"
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 -left-4 bg-gradient-to-r ${testimonial.gradient} rounded-full p-3 shadow-xl`}>
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current drop-shadow-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic font-medium">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-3 ring-purple-100 shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{testimonial.country}</span>
                    <span>•</span>
                    <span className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent font-semibold`}>{testimonial.score}</span>
                  </div>
                </div>
              </div>

              {/* Gradient Glow on Hover */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;