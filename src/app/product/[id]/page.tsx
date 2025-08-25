"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// Define interfaces for our data structures
interface Product {
  id: string;
  name: string;
  price: number;
  rentPrice: number;
  images: string[];
  description: string;
  specs: string[];
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Products {
  [key: string]: Product;
}

const products: Products = {
  'bed-manual': {
    id: 'bed-manual',
    name: 'Manual Hospital Bed',
    price: 24999,
    rentPrice: 3500,
    images: [
      '/images/products/bed-manual.jpg',
      '/images/products/bed-manual-2.jpg',
    ],
    description:
      'Comfortable manual hospital bed designed for easy patient care with durable build and ergonomic design.',
    specs: [
      'Adjustable height and backrest',
      'Sturdy steel frame',
      'Easy to maneuver',
    ],
  },
  'bed-electric': {
    id: 'bed-electric',
    name: 'Electric Hospital Bed',
    price: 20999,
    rentPrice: 2500,
    images: [
      '/images/products/bed-electric.jpg',
      '/images/products/bed-electric-2.jpg',
    ],
    description: 'Fully electric adjustable bed with remote control for patient comfort and convenience.',
    specs: [
      'Remote control operation',
      'Multiple position settings',
      'Safety locking wheels',
    ],
  },
  'oxygen-concentrator': {
    id: 'oxygen-concentrator',
    name: 'Portable Oxygen Concentrator',
    price: 4999,
    rentPrice: 1500,
    images: [
      '/images/products/oxygen-concentrator.jpg',
      '/images/products/oxygen-concentrator-2.jpg',
    ],
    description:
      'Lightweight oxygen concentrator for home use designed for portability and quiet operation.',
    specs: [
      'Battery operated',
      'Noise less than 40dB',
      'Easy to carry handle',
    ],
  },
  wheelchair: {
    id: 'wheelchair',
    name: 'Wheelchair',
    price: 6999,
    rentPrice: 1500,
    images: [
      '/images/products/wheelchair.jpg',
      '/images/products/wheelchair-2.jpg',
    ],
    description:
      'Durable and foldable wheelchair, perfect for all-around mobility needs in home healthcare.',
    specs: [
      'Foldable frame',
      'Adjustable footrests',
      'Comfortable padded seat',
    ],
  },
};

// Navbar Component
function Navbar() {
  const router = useRouter();
  
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => router.push('/')}
              className="text-xl font-bold text-[var(--color-primary)]"
            >
              MediCare Equipment
            </button>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => router.push('/products')}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => router.push('/about')}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const router = useRouter();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Resolve the params promise
    params.then((resolved) => {
      setResolvedParams(resolved);
    });
  }, [params]);

  useEffect(() => {
    // Check if product is in wishlist on component mount
    if (resolvedParams && products[resolvedParams.id]) {
      const wishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setIsInWishlist(wishlist.some((item: WishlistItem) => item.id === products[resolvedParams.id].id));
    }
  }, [resolvedParams]);

  const toggleWishlist = () => {
    if (!resolvedParams || !products[resolvedParams.id]) return;
    
    const product = products[resolvedParams.id];
    const wishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item: WishlistItem) => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
    } else {
      // Add to wishlist
      const productToAdd: WishlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      };
      wishlist.push(productToAdd);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsInWishlist(true);
      setShowWishlistNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowWishlistNotification(false);
      }, 3000);
    }
  };

  // Show loading state while params are being resolved
  if (!resolvedParams) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-center text-[var(--color-primary)] text-xl">Loading...</p>
      </div>
    );
  }

  const product = products[resolvedParams.id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-center text-[var(--color-accent)] text-xl animate-fadeIn">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Wishlist Notification */}
      {showWishlistNotification && (
        <div className="fixed top-16 right-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideIn">
          <span className="font-semibold">✓</span> Added to wishlist!
        </div>
      )}

      {/* Fixed Back Button - Always visible */}
      <div className="fixed top-16 left-0 right-0 bg-white shadow-md z-40 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-all duration-300 bg-white py-2 px-4 rounded-lg border border-gray-200 hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            <div className="p-6 md:p-8">
              <h1 className="text-[var(--color-primary)] text-3xl md:text-4xl font-extrabold tracking-wide mb-6">
                {product.name}
              </h1>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Product Images */}
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg ring-2 ring-[var(--color-primary)] transition-transform duration-300">
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </div>
                  
                  {/* Image Gallery */}
                  {product.images.length > 1 && (
                    <div className="flex space-x-4 mt-4 overflow-x-auto py-3 px-2">
                      {product.images.map((img, i) => (
                        <div 
                          key={i} 
                          className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${selectedImage === i ? 'ring-2 ring-[var(--color-accent)] rounded-lg' : 'opacity-70 hover:opacity-100'}`}
                          onClick={() => setSelectedImage(i)}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} image ${i + 1}`}
                            width={80}
                            height={60}
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 space-y-6 text-[var(--color-dark)]">
                  <p className="text-lg leading-relaxed text-gray-700">{product.description}</p>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">Specifications</h2>
                    <ul className="space-y-2">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-accent)] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 p-5 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-[var(--color-primary)] font-bold text-2xl md:text-3xl">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-[var(--color-accent)] text-lg md:text-xl font-semibold">
                      Or Rent @ ₹{product.rentPrice} / month
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      className="flex-1 bg-[var(--color-accent)] text-white py-3 px-6 rounded-xl shadow-lg hover:bg-[var(--color-gold)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] font-semibold text-lg flex items-center justify-center"
                      onClick={() => alert(`Booked ${product.name}`)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                      </svg>
                      Book Now
                    </button>

                    <button
                      className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg flex items-center justify-center transition-all duration-300 ${
                        isInWishlist 
                          ? 'bg-[var(--color-primary)] text-white border-2 border-[var(--color-primary)] shadow-md' 
                          : 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
                      }`}
                      onClick={toggleWishlist}
                    >
                      {isInWishlist ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          In Wishlist
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          Add to Wishlist
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
