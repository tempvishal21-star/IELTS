import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-purple-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IELTS Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for IELTS success. We've helped over 15,000 students achieve their dream scores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Mock Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Speaking Practice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Writing Feedback</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Reading Skills</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Listening Practice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">1-on-1 Tutoring</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">info@ieltspro.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 IELTS Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;