"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  FaHeart, 
  FaShippingFast, 
  FaUsers, 
  FaAward,
  FaArrowRight
} from "react-icons/fa";

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Updated reliable image URLs
  const aboutImages = [
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnN8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80"
  ];

  const stats = [
    { icon: <FaHeart className="text-2xl" />, value: "10K+", label: "Happy Customers" },
    { icon: <FaShippingFast className="text-2xl" />, value: "All India", label: "Delivery Coverage" },
    { icon: <FaUsers className="text-2xl" />, value: "24/7", label: "Support Team" },
    { icon: <FaAward className="text-2xl" />, value: "500+", label: "Quality Products" }
  ];

  const features = [
    {
      icon: "🏥",
      title: "Comprehensive Medical Equipment",
      description: "From hospital beds to oxygen concentrators, we offer a wide range of high-quality medical equipment for both purchase and rental."
    },
    {
      icon: "🏠",
      title: "Home Healthcare Solutions",
      description: "We specialize in providing equipment that enables quality healthcare in the comfort of your home."
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery services across all of India, ensuring you get what you need when you need it."
    },
    {
      icon: "💻",
      title: "Digital Accessibility",
      description: "Easy-to-use online platform with comparison tools to help you make informed decisions about your healthcare needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
      <section 
        ref={sectionRef}
        className="relative max-w-7xl mx-auto py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-[40%] sm:rounded-b-[50%]"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-3 sm:mb-4 drop-shadow-lg tracking-tight">
            About <span className="text-blue-200">Oxygen Times</span>
          </h1>
          <p className="text-center text-blue-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            India's Premier Home Healthcare Equipment Provider
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
            {/* Image Gallery */}
            <div className="w-full lg:w-2/5 relative">
              <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 relative">
                  <Image
                    src={aboutImages[0]}
                    alt="Oxygen Times Mission"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Oxygen Times</h3>
                    <p className="text-xs sm:text-sm">Since 2015</p>
                  </div>
                </div>
              </div>
              
              {/* Additional small images */}
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6">
                <div className={`w-1/2 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 relative">
                    <Image
                      src={aboutImages[1]}
                      alt="Medical Equipment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </div>
                <div className={`w-1/2 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 relative">
                    <Image
                      src={aboutImages[2]}
                      alt="Customer Support"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5 text-gray-800 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className={`first-letter:text-blue-600 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:mr-2 sm:first-letter:mr-3 first-letter:float-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Oxygen Times is India's trusted partner for home healthcare solutions, dedicated to making advanced medical equipment accessible to everyone. Founded in 2015, we've grown to become a leading provider of hospital beds, oxygen concentrators, wheelchairs, and other essential medical devices across the nation.
              </p>

              <p className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Our mission is to bridge the gap between hospital care and home recovery by providing reliable, high-quality medical equipment through both purchase and flexible rental options. We understand the challenges faced by patients and caregivers, which is why we've designed our services to be convenient, affordable, and supported by knowledgeable healthcare professionals.
              </p>

              <p className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                What sets us apart is our commitment to quality, customer service, and nationwide accessibility. Every product in our inventory undergoes rigorous quality checks and comes with clear usage guidance. Our digital platform makes it easy to compare options, while our dedicated support team is always available to assist with selection, delivery, and after-sales service.
              </p>

              {/* Stats */}
              <div className={`grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-blue-600 flex justify-center mb-1 sm:mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-blue-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-800 mb-8 sm:mb-10 md:mb-12">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 flex items-start text-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl mr-4 sm:mr-5">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`max-w-4xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 p-6 sm:p-7 md:p-8 lg:p-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl shadow-xl text-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Explore our wide range of healthcare products or speak to our experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
              <Link 
                href="/products" 
                className="bg-white hover:bg-blue-50 text-blue-700 font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
              >
                View Products <FaArrowRight />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded-full transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 -left-8 sm:-left-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-blue-200 opacity-30 animate-float-1"></div>
        <div className="absolute bottom-1/3 -right-6 sm:-right-8 w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 rounded-full bg-blue-300 opacity-40 animate-float-2"></div>
        <div className="absolute top-1/2 right-16 sm:right-20 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-blue-400 opacity-20 animate-float-3"></div>

        <style jsx>{`
          @keyframes float-1 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          @keyframes float-2 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(8px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          @keyframes float-3 {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(8deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          .animate-float-1 {
            animation: float-1 8s ease-in-out infinite;
          }
          
          .animate-float-2 {
            animation: float-2 10s ease-in-out infinite;
          }
          
          .animate-float-3 {
            animation: float-3 12s ease-in-out infinite;
          }

          /* Responsive adjustments for iPhone */
          @media (max-width: 640px) {
            .first-letter:text-3xl {
              font-size: 2.25rem;
            }
          }

          /* Extra small devices (phones, 375px and down) */
          @media (max-width: 375px) {
            .xs\\:text-4xl {
              font-size: 1.75rem;
            }
          }
          
          /* 16" laptop specific optimizations (1536px and up) */
          @media (min-width: 1536px) {
            .max-w-7xl {
              max-width: 1280px;
            }
          }
          
          /* Ultra-wide screens (1920px and up) */
          @media (min-width: 1920px) {
            .max-w-7xl {
              max-width: 1440px;
            }
          }
        `}</style>
      </section>
    </div>
  );
}