
import React, { useRef, useState, useEffect } from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    content: "QuizMaster has completely transformed how I prepare for my exams. The adaptive question system helped me focus on weak areas I didn't even know I had.",
    author: "Sarah Johnson",
    role: "Medical Student",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "As a professor, I've found QuizMaster to be an invaluable tool for my students. The analytics help me understand where my class needs additional instruction.",
    author: "Dr. Michael Chen",
    role: "University Professor",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The interface is so intuitive and clean that studying doesn't feel like a chore anymore. I can focus entirely on the content rather than figuring out the platform.",
    author: "Alex Rodriguez",
    role: "Computer Science Major",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block px-4 py-1.5 bg-primary/5 text-primary text-sm font-medium rounded-full mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Success Stories
          </span>
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hear from our community
          </h2>
          <p 
            className={`text-lg text-foreground/70 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover how QuizMaster has helped students and educators enhance their learning and teaching experience.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative h-[400px] md:h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="flex-1">
                    <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg md:text-xl font-medium text-foreground/90 mb-6">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.imageUrl}
                      alt={`${testimonial.author} avatar`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
