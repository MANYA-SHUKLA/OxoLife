"use client";

import Link from "next/link";
import { 
  FaShippingFast, 
  FaMedal, 
  FaHeadset,
  FaArrowRight,
  FaHeart,
  FaLaptopMedical,
  FaStethoscope,
  FaUserMd,
  FaStar
} from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";

// Define interface for FallbackImage props
interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

// Data arrays moved outside the component
const FEATURES = [
  {
    title: "Quality Equipment",
    details: "All our medical devices are certified and tested for reliability.",
    icon: <FaMedal className="text-2xl" />,
    delay: "0s"
  },
  {
    title: "Fast Delivery",
    details: "Nationwide shipping with quick dispatch times.",
    icon: <FaShippingFast className="text-2xl" />,
    delay: "0.1s"
  },
  {
    title: "Expert Support",
    details: "24/7 customer service from medical equipment experts.",
    icon: <FaHeadset className="text-2xl" />,
    delay: "0.2s"
  },
  {
    title: "Flexible Options",
    details: "Buy, rent, or lease-to-own based on your needs.",
    icon: <FaHeart className="text-2xl" />,
    delay: "0.3s"
  }
];

const PRODUCTS = [
  {
    name: "Oxygen Concentrators",
    description: "Medical-grade oxygen concentrators with various flow settings for home therapy",
    image: "/images/products/oxygen-concentrator.jpg",
    price: "From ₹35,000",
    link: "/product/oxygen-concentrator",
    featured: true
  },
  {
    name: "Hospital Beds",
    description: "Electric and manual adjustable beds for patient comfort and care",
    image: "https://plus.unsplash.com/premium_photo-1681995321209-b886246a2db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWwlMjBiZWRzfGVufDB8fDB8fHww",
    price: "From ₹28,000",
    link: "/product/bed-manual",
    featured: true
  },
  {
    name: "Wheelchairs",
    description: "Lightweight and durable wheelchairs for enhanced mobility",
    image: "https://images.unsplash.com/photo-1570793005299-c091be91bbad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "From ₹8,500",
    link: "/product/wheelchair",
    featured: true
  },
  {
    name: "Nebulizers",
    description: "Portable and tabletop nebulizers for respiratory treatments",
    image: "https://images.unsplash.com/photo-1645273474454-f200e9236fdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVidWxpemVyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "From ₹2,500",
    link: "/products",
    featured: false
  },
  {
    name: "Patient Monitors",
    description: "Multi-parameter monitors for continuous health tracking",
    image: "https://plus.unsplash.com/premium_photo-1729286325470-7863c094669b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0aWVudCUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    price: "From ₹45,000",
    link: "/products",
    featured: false
  },
  {
    name: "CPAP Machines",
    description: "Advanced CPAP devices for sleep apnea treatment",
    image: "https://plus.unsplash.com/premium_photo-1664476553552-84de4520b37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3BhcCUyMG1hY2hpbmVzJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
    price: "From ₹22,000",
    link: "/products",
    featured: false
  }
];

const STATS = [
  { value: "10K+", label: "Happy Customers", delay: "0.1s" },
  { value: "500+", label: "Products", delay: "0.2s" },
  { value: "28", label: "States", delay: "0.4s" },
  { value: "24/7", label: "Support", delay: "0.6s" }
];

const SERVICES = [
  {
    title: "Equipment Sales",
    description: "Purchase high-quality medical equipment with warranty and support",
    icon: <FaLaptopMedical className="text-4xl text-[#155AA2]" />,
    features: ["Warranty included", "Free maintenance", "Installation support"],
    delay: "0.2s"
  },
  {
    title: "Rental Services",
    description: "Rent medical equipment for short or long-term needs at affordable rates",
    icon: <FaStethoscope className="text-4xl text-[#155AA2]" />,
    features: ["Flexible durations", "Delivery & pickup", "Maintenance included"],
    delay: "0.3s"
  },
  {
    title: "Consultation",
    description: "Get expert advice on selecting the right equipment for your needs",
    icon: <FaUserMd className="text-4xl text-[#155AA2]" />,
    features: ["Free consultation", "Technical support", "Training provided"],
    delay: "0.4s"
  }
];

const TESTIMONIALS = [
  {
    name: "Rajkumar Yogi",
    role: "Cardiologist, Delhi",
    content: "The oxygen concentrators we purchased have been extremely reliable for our clinic. The after-sales support is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Manya Shukla",
    role: "Home Care Patient, Mumbai",
    content: "Renting a hospital bed for my father's recovery was seamless. The delivery was prompt and the equipment was in perfect condition.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Raj's Nursing Home",
    role: "Bangalore",
    content: "We've equipped our entire facility with Oxygen Times products. Their consultation service helped us choose the right equipment.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

// Fallback image component to handle broken images
const FallbackImage = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Highlights Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F99A2F]/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#155AA2]/10 rounded-full animate-ping-slow"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#155AA2] animate-fade-in-up">
            Why Choose <span className="text-[#F99A2F]">Oxygen Times</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map(({ title, details, icon, delay }, idx) => (
              <div
                key={idx}
                className="bg-[#F5F9FF] p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-[#155AA2] border border-[#155AA2]/20 animate-fade-in-up"
                style={{ animationDelay: delay }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#155AA2] to-[#1E88E5] flex items-center justify-center mb-3 md:mb-4 text-white shadow-md">
                  {icon}
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/medical.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#155AA2] animate-fade-in-up">
            Featured <span className="text-[#F99A2F]">Medical Equipment</span>
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Discover our range of high-quality healthcare products for home and clinical use
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <div 
                key={idx} 
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white animate-fade-in-up"
                style={{animationDelay: `${0.1 + idx * 0.1}s`}}
              >
                <div className="relative h-56 overflow-hidden">
                  <FallbackImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#F99A2F] text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {product.featured ? "Featured" : "Popular"}
                  </div>
                  <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#155AA2] mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#F99A2F]">{product.price}</span>
                    <Link
                      href={product.link}
                      className="inline-flex items-center text-[#155AA2] font-semibold hover:text-[#F99A2F] transition-colors group-hover:translate-x-1 duration-300"
                    >
                      View Details <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <Link
              href="/products"
              className="bg-gradient-to-r from-[#155AA2] to-[#1E88E5] hover:from-[#F99A2F] hover:to-[#FFB347] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 inline-flex items-center hover:scale-105"
            >
              View All Products <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-r from-[#155AA2] to-[#1E88E5] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Trusted Across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="animate-fade-in-up"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#F99A2F] font-semibold text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F99A2F]/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#155AA2]/10 rounded-full animate-ping-slow"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#155AA2] animate-fade-in-up">
            Our <span className="text-[#F99A2F]">Services</span>
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Comprehensive healthcare solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: service.delay}}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#F5F9FF] rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#155AA2] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#F99A2F] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#155AA2]">
            What Our <span className="text-[#F99A2F]">Customers Say</span>
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from healthcare professionals and patients who trust Oxygen Times
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <FallbackImage 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#155AA2]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#F99A2F] text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 italic">`{testimonial.content}`</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-[#155AA2] via-[#1E88E5] to-[#155AA2] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F99A2F]/10 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full animate-bounce-slow"></div>
        </div>
        
        {/* Floating medical icons */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <FaHeart className="text-4xl text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 animate-float-reverse" style={{animationDelay: '2s'}}>
          <FaStethoscope className="text-4xl text-white" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-20 animate-float" style={{animationDelay: '1s'}}>
          <FaUserMd className="text-4xl text-white" />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-20 animate-float-reverse" style={{animationDelay: '1.5s'}}>
          <FaLaptopMedical className="text-4xl text-white" />
        </div>

        <div className="max-w-4xl mx-auto text-center rounded-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 relative z-10 border border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Need <span className="text-[#F99A2F]">Medical Equipment</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Get in touch with our experts for personalized recommendations and the best deals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/contact"
              className="bg-[#F99A2F] hover:bg-white text-white hover:text-[#155AA2] font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-[#155AA2] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Browse Products</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center">
              <FaMedal className="text-[#F99A2F] mr-2" />
              <span>Certified Equipment</span>
            </div>
            <div className="flex items-center">
              <FaShippingFast className="text-[#F99A2F] mr-2" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center">
              <FaHeadset className="text-[#F99A2F] mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes float-reverse {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.05; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}