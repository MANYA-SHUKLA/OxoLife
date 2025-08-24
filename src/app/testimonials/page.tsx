"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Manya Shukla",
    location: "Bareilly",
    feedback:
      "I bought Portable oxygen concentrator from Oxygen Times. The team was in constant touch with me right from placing the order till the delivery. This is the only trustable website in India I could find for buying medical equipment.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 2,
    name: "Rajkumar Yogi",
    location: "Jaipur",
    feedback:
      "Got to know about Oxygen Times through their YouTube channel. I bought Resmed Aircuve machine. The sales team was very helpful and delivery was also very quick.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Mahi Shukla",
    location: "New Delhi",
    feedback:
      "Oxygen Times is the most helpful website for buying wheelchair. I could compare specifications of different models very seamlessly. What an amazing feature! Got the wheelchair at much lower price than what local dealers were quoting.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 4,
    name: "Raj Yogi",
    location: "New Delhi",
    feedback:
      "Excellent service and timely delivery of hospital beds. Highly recommend Oxygen Times for trustworthy home healthcare equipment shopping.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Mumbai",
    feedback:
      "The customer support at Oxygen Times is exceptional. They helped me choose the perfect home care equipment for my elderly parents. The delivery was prompt and the product quality exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 6,
    name: "Amit Patel",
    location: "Ahmedabad",
    feedback:
      "I purchased a respiratory monitor from Oxygen Times. The product was genuine, pricing was competitive, and the after-sales support has been fantastic. Will definitely shop again!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-screen-2xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-gradient-to-br from-[var(--color-info)] via-[var(--color-secondary)] to-[var(--color-gold)] rounded-xl md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2rem] shadow-lg md:shadow-xl xl:shadow-2xl 2xl:shadow-3xl relative overflow-hidden">
      {/* Background decorative elements - Responsive sizing */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-28 2xl:-top-32 -left-12 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-28 2xl:-left-32 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
        <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-32 xl:-bottom-36 2xl:-bottom-40 -right-16 sm:-right-20 md:-right-24 lg:-right-32 xl:-right-36 2xl:-right-40 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-[var(--color-accent)] animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] 2xl:w-[30rem] 2xl:h-[30rem] rounded-full bg-[var(--color-gold)] animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl 2xl:text-7xl font-extrabold text-[var(--color-primary)] mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-lg tracking-tight animate-fadeIn">
            What Our Customers Say
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-0">
            Real stories from people who have experienced our products and services
          </p>
        </div>

        {/* Mobile carousel view - Optimized for iPhone */}
        <div className="lg:hidden relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map(({ id, name, location, feedback, image }) => (
              <div key={id} className="w-full flex-shrink-0 px-2 xs:px-3 sm:px-4">
                <div className="p-4 xs:p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg flex flex-col h-full">
                  <div className="flex items-center mb-3 xs:mb-4 sm:mb-5">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 xs:border-3 border-[var(--color-info)] flex-shrink-0">
                      <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 xs:ml-4 sm:ml-5">
                      <p className="text-[var(--color-primary)] font-semibold text-base xs:text-lg sm:text-xl">{name}</p>
                      <p className="text-[var(--color-accent)] text-xs xs:text-sm sm:text-base">{location}</p>
                    </div>
                  </div>
                  <p className="text-[var(--color-dark)] italic text-xs xs:text-sm sm:text-base leading-relaxed xs:leading-loose mb-3 xs:mb-4 sm:mb-5 flex-grow">
                    &ldquo;{feedback}&rdquo;
                  </p>
                  <div className="flex justify-center space-x-1 xs:space-x-2 mt-2 xs:mt-3 sm:mt-4">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full ${idx === activeIndex ? 'bg-[var(--color-primary)]' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet view (lg breakpoint) */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:hidden gap-5 lg:gap-6">
          {testimonials.map(({ id, name, location, feedback, image }) => (
            <div
              key={id}
              className="p-5 lg:p-6 bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 bg-[var(--color-info)] opacity-10 rounded-bl-full"></div>
              
              <div className="flex items-start mb-4 lg:mb-5 relative z-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-3 border-[var(--color-info)] flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 lg:ml-5">
                  <p className="text-[var(--color-primary)] font-semibold text-lg lg:text-xl group-hover:underline underline-offset-4 cursor-pointer transition-all">
                    {name}
                  </p>
                  <p className="text-[var(--color-accent)] text-sm lg:text-base font-medium">{location}</p>
                </div>
              </div>
              <p className="text-[var(--color-dark)] italic text-base lg:text-lg leading-relaxed mb-4 lg:mb-5 flex-grow relative z-10 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                &ldquo;{feedback}&rdquo;
              </p>
              <div className="flex justify-end">
                <svg 
                  className="w-7 h-7 lg:w-8 lg:h-8 text-[var(--color-info)] opacity-30 transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid view - Optimized for 16" laptops and larger screens */}
        <div className="hidden xl:grid xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-7 2xl:gap-8">
          {testimonials.map(({ id, name, location, feedback, image }) => (
            <div
              key={id}
              className="p-6 xl:p-7 2xl:p-8 bg-white rounded-2xl xl:rounded-3xl 2xl:rounded-[1.5rem] shadow-lg xl:shadow-xl 2xl:shadow-2xl hover:shadow-2xl xl:hover:shadow-3xl 2xl:hover:shadow-4xl transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-[var(--color-info)] opacity-10 rounded-bl-full"></div>
              
              <div className="flex items-start mb-5 xl:mb-6 2xl:mb-7 relative z-10">
                <div className="w-16 h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full overflow-hidden border-4 border-[var(--color-info)] flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-5 xl:ml-6 2xl:ml-7">
                  <p className="text-[var(--color-primary)] font-semibold text-xl xl:text-2xl 2xl:text-3xl group-hover:underline underline-offset-4 cursor-pointer transition-all">
                    {name}
                  </p>
                  <p className="text-[var(--color-accent)] text-base xl:text-lg 2xl:text-xl font-medium">{location}</p>
                </div>
              </div>
              <p className="text-[var(--color-dark)] italic text-lg xl:text-xl 2xl:text-2xl leading-relaxed xl:leading-loose mb-5 xl:mb-6 2xl:mb-7 flex-grow relative z-10 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                &ldquo;{feedback}&rdquo;
              </p>
              <div className="flex justify-end">
                <svg 
                  className="w-9 h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-[var(--color-info)] opacity-30 transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Brand logo showcase */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 text-center">
          <p className="text-white mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Trusted by healthcare professionals nationwide</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 opacity-80">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full flex items-center justify-center p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full flex items-center justify-center p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full flex items-center justify-center p-2 sm:p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Extra small devices (phones, 375px and down) */
        @media (max-width: 375px) {
          .xs\\:text-3xl {
            font-size: 1.75rem;
          }
        }
        
        /* 16" laptop specific optimizations (1536px and up) */
        @media (min-width: 1536px) {
          .max-w-screen-2xl {
            max-width: 1536px;
          }
        }
        
        /* Ultra-wide screens (1920px and up) */
        @media (min-width: 1920px) {
          .max-w-screen-2xl {
            max-width: 1792px;
          }
        }
      `}</style>
    </section>
  );
}