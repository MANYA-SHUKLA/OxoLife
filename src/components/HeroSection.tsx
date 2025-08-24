import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaShippingFast, 
  FaMedal, 
  FaHeadset,
  FaHeart,
  FaArrowRight,
  FaHospital,
  FaClinicMedical,
  FaHome,
  FaUserMd,
  FaStethoscope,
  FaBriefcaseMedical,
  FaAmbulance,
  FaLaptopMedical
} from "react-icons/fa";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Feature rotation
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    // Background rotation
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      clearInterval(featureInterval);
      clearInterval(bgInterval);
    };
  }, []);

  const features = [
    {
      title: "Quality Equipment",
      description: "Certified medical devices for reliability",
      icon: <FaMedal className="text-2xl md:text-3xl" />
    },
    {
      title: "Fast Nationwide Delivery",
      description: "Quick dispatch across India",
      icon: <FaShippingFast className="text-2xl md:text-3xl" />
    },
    {
      title: "Expert Support",
      description: "24/7 customer service",
      icon: <FaHeadset className="text-2xl md:text-3xl" />
    },
    {
      title: "Flexible Options",
      description: "Buy, rent, or lease-to-own",
      icon: <FaHeart className="text-2xl md:text-3xl" />
    }
  ];

  // Multiple background images for rotation
  const backgroundImages = [
    {
      mobile: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      desktop: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      mobile: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      desktop: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
    },
    {
      mobile: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      desktop: "https://images.unsplash.com/photo-1582719471384-894e3a4bbca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    }
  ];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center transition-all duration-1000 overflow-hidden"
      style={{
        backgroundImage: `url(${isMobile ? backgroundImages[currentBg].mobile : backgroundImages[currentBg].desktop})`,
        backgroundPosition: isMobile ? "center 30%" : "center center"
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#155AA2] via-[#155AA2]/90 to-[#155AA2]/80 opacity-90 transition-all duration-1000"></div>
      
      {/* Previous background for smooth transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${isMobile ? 
            backgroundImages[(currentBg - 1 + backgroundImages.length) % backgroundImages.length].mobile : 
            backgroundImages[(currentBg - 1 + backgroundImages.length) % backgroundImages.length].desktop
          })`,
          opacity: 0.2,
          backgroundPosition: isMobile ? "center 30%" : "center center"
        }}
      ></div>
      
      {/* Floating medical icons */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => {
          const icons = [FaHospital, FaClinicMedical, FaHome, FaUserMd, FaHeart, FaStethoscope, FaBriefcaseMedical, FaAmbulance, FaLaptopMedical];
          const RandomIcon = icons[i % icons.length];
          return (
            <div
              key={i}
              className="absolute text-white animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 16}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <RandomIcon />
            </div>
          );
        })}
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white/50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 rounded-2xl bg-white/10 p-6 md:p-8 lg:p-10 backdrop-blur-md border border-white/20 shadow-2xl">
            {/* Animated title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in">
              Oxygen{" "}
              <span className="text-[#F99A2F] relative inline-block">
                Times
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#F99A2F]" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0,5 C30,0 70,10 100,5" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
            </h1>
            
            {/* Description with staggered animation */}
            <p className="mb-8 md:mb-10 text-lg sm:text-xl max-w-xl drop-shadow-md opacity-0 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:forwards]">
              India&apos;s most trusted platform to compare, buy, or rent home healthcare equipment and medical devices. Reliable products with nationwide delivery.
            </p>

            {/* CTA buttons with staggered animation */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                href="/products"
                className="bg-[#F99A2F] hover:bg-white text-black font-semibold px-6 py-3 md:px-10 md:py-4 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl opacity-0 animate-fade-in-up [animation-delay:0.5s] [animation-fill-mode:forwards] text-center flex items-center justify-center"
              >
                Shop Products <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 opacity-0 animate-fade-in-up [animation-delay:0.9s] [animation-fill-mode:forwards]">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#F99A2F]">10K+</div>
                <div className="text-sm md:text-base">Happy Customers</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#F99A2F]">500+</div>
                <div className="text-sm md:text-base">Products</div>
              </div>
            </div>
          </div>

          {/* Features carousel */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
                Why Choose <span className="text-[#F99A2F]">Us</span>?
              </h2>
              
              <div className="relative h-64 md:h-72">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out p-4 flex flex-col items-center justify-center text-center ${
                      index === currentFeature
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#155AA2] flex items-center justify-center mb-4 text-white shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature ? "bg-[#F99A2F] scale-125" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentFeature(index)}
                    aria-label={`Show feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1.2s] [animation-fill-mode:forwards]">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-white/80">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#F99A2F] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#F99A2F] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Background indicator dots */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col space-y-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBg ? "bg-[#F99A2F] scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentBg(index)}
            aria-label={`Change background to image ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-draw-line {
          animation: draw-line 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        /* iPhone specific optimizations */
        @media (max-width: 414px) {
          .hero-content {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        
        /* Large screen optimizations */
        @media (min-width: 1920px) {
          .hero-section {
            background-size: cover;
          }
        }
      `}</style>
    </section>
  );
}