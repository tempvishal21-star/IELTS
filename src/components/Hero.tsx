import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up relative z-10">
            <div className="flex items-center space-x-2">
              <div className="flex text-gradient">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">Rated #1 IELTS Institute</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Achieve Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                {" "}Dream IELTS{" "}
              </span>
              Score
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Join thousands of successful students who achieved their target IELTS scores with our proven teaching methods, expert instructors, and personalized study plans.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15K+</div>
                <div className="text-gray-600 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">8.5</div>
                <div className="text-gray-600 text-sm">Avg Band Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right z-10">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-purple-100">
              <img 
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="IELTS Students Learning"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Experience our cutting-edge teaching methodology</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl shadow-xl p-4 animate-bounce-slow">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Live Classes</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-xl p-4 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                <span className="text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;