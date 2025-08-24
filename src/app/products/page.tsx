"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  {
    id: "bed-manual",
    name: "Manual Hospital Bed",
    price: 24999,
    rentPrice: 3500,
    image: "/images/products/bed-manual.jpg",
    description: "Comfortable manual hospital bed for easy patient care.",
  },
  {
    id: "bed-electric",
    name: "Electric Hospital Bed",
    price: 20999,
    rentPrice: 2500,
    image: "/images/products/bed-electric.jpg",
    description: "Electric adjustable bed with remote control for ease.",
  },
  {
    id: "oxygen-concentrator",
    name: "Portable Oxygen Concentrator",
    price: 4999,
    rentPrice: 1500,
    image: "/images/products/oxygen-concentrator.jpg",
    description: "Lightweight oxygen concentrator for home use.",
  },
  {
    id: "wheelchair",
    name: "Wheelchair",
    price: 6999,
    rentPrice: 1500,
    image: "/images/products/wheelchair.jpg",
    description: "Durable wheelchair with foldable frame.",
  },
];

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll event listener for reveal animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.product-card');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-secondary)] via-white to-[var(--color-secondary)] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-12 text-center drop-shadow-lg transform transition-all duration-700 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Our <span className="text-[var(--color-accent)]">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map(({ id, name, price, rentPrice, image, description }, index) => (
            <div 
              key={id}
              className="product-card opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              <Link
                href={`/product/${id}`}
                className="block bg-white shadow-xl rounded-2xl overflow-hidden border-2 border-[var(--color-primary)] hover:border-[var(--color-accent)] hover:scale-105 transition-all duration-300 ease-in-out flex flex-col h-full"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={id === "bed-manual"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">{name}</h3>
                  <p className="text-gray-600 flex-grow mb-4 leading-relaxed">{description}</p>

                  <div className="text-left space-y-2 mb-4">
                    <p className="text-[var(--color-primary)] font-extrabold text-2xl">
                      ₹{price.toLocaleString()}
                    </p>
                    <p className="text-[var(--color-accent)] font-semibold text-sm">
                      Or Rent @ ₹{rentPrice} / month
                    </p>
                  </div>

                  <button
                    className="mt-auto bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] text-white py-3 rounded-lg shadow-md hover:shadow-lg hover:from-[var(--color-primary)] hover:to-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={`Book ${name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Booked ${name}`);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .product-card.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
}