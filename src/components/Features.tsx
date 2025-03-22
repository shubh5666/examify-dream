
import React, { useRef, useEffect, useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  BarChart, 
  Shield, 
  Timer, 
  LucideIcon 
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: 'Adaptive Learning',
    description: 'Our intelligent system adapts to your learning patterns, focusing on areas where you need more practice.'
  },
  {
    icon: BookOpen,
    title: 'Extensive Library',
    description: 'Access a wide range of subjects and chapters, meticulously organized for efficient study sessions.'
  },
  {
    icon: BarChart,
    title: 'Detailed Analytics',
    description: 'Track your progress with comprehensive analytics that highlight strengths and improvement areas.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your learning data is protected with enterprise-grade security, ensuring privacy and compliance.'
  },
  {
    icon: Timer,
    title: 'Timed Quizzes',
    description: 'Practice under exam-like conditions with customizable time limits for better preparation.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block px-4 py-1.5 bg-primary/5 text-primary text-sm font-medium rounded-full mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Core Capabilities
          </span>
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Designed with precision for learning excellence
          </h2>
          <p 
            className={`text-lg text-foreground/70 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Every feature in QuizMaster has been thoughtfully crafted to enhance your learning experience and help you achieve mastery in your subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

const FeatureCard = ({ feature, index, isVisible }: FeatureCardProps) => {
  const { icon: Icon, title, description } = feature;
  const delay = 300 + (index * 100);

  return (
    <div 
      className={`bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-md hover:transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default Features;
