
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <div 
            className={`inline-block mb-6 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-medium text-primary">Master knowledge through intelligent quizzing</span>
          </div>
          
          {/* Headline */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-balance block">Elevate your learning with</span> 
            <span className="relative inline-block">
              QuizMaster
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10"></span>
            </span>
          </h1>
          
          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            The intelligent quiz platform designed with precision to help you master any subject through adaptive learning and thoughtful assessment.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              to="/register"
              className="px-8 py-3.5 text-white bg-primary rounded-full font-medium transition-all transform hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className="px-8 py-3.5 bg-gray-50 border border-gray-200 rounded-full font-medium transition-all hover:bg-gray-100 active:scale-95 flex items-center justify-center"
            >
              Login
            </Link>
          </div>
          
          {/* Stats */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">100+</h3>
              <p className="text-gray-600">Subjects</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50,000+</h3>
              <p className="text-gray-600">Users</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1M+</h3>
              <p className="text-gray-600">Quizzes Taken</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div 
          className={`relative mt-12 md:mt-20 mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass p-2 rounded-xl border border-white/30">
            <div className="w-full h-full aspect-[16/9] bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg overflow-hidden relative">
              {/* Mockup UI Elements */}
              <div className="absolute inset-0 flex flex-col">
                {/* Header */}
                <div className="h-14 bg-white border-b flex items-center px-6 gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="w-64 h-6 bg-gray-100 rounded-md mx-auto"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex">
                  {/* Sidebar */}
                  <div className="w-48 bg-gray-50 p-4">
                    <div className="w-full h-8 bg-white rounded-md mb-4"></div>
                    <div className="w-full h-4 bg-white/60 rounded-md mb-3"></div>
                    <div className="w-2/3 h-4 bg-white/60 rounded-md mb-3"></div>
                    <div className="w-3/4 h-4 bg-white/60 rounded-md mb-3"></div>
                    <div className="w-full h-4 bg-primary/40 rounded-md mb-3"></div>
                    <div className="w-5/6 h-4 bg-white/60 rounded-md mb-3"></div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-1 p-6">
                    <div className="w-1/3 h-8 bg-gray-200 rounded-md mb-6"></div>
                    <div className="space-y-4 mb-8">
                      <div className="w-full h-14 bg-white rounded-lg shadow-sm flex items-center px-4">
                        <div className="w-5 h-5 rounded-full bg-gray-200 mr-4"></div>
                        <div className="flex-1">
                          <div className="w-full h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-14 bg-white rounded-lg shadow-sm flex items-center px-4">
                        <div className="w-5 h-5 rounded-full bg-primary/20 mr-4"></div>
                        <div className="flex-1">
                          <div className="w-full h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-14 bg-white rounded-lg shadow-sm flex items-center px-4">
                        <div className="w-5 h-5 rounded-full bg-gray-200 mr-4"></div>
                        <div className="flex-1">
                          <div className="w-full h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-14 bg-white rounded-lg shadow-sm flex items-center px-4">
                        <div className="w-5 h-5 rounded-full bg-gray-200 mr-4"></div>
                        <div className="flex-1">
                          <div className="w-full h-4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-32 h-10 bg-primary/20 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
