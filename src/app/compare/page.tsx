"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const productsToCompare = [
  {
    id: 'bed-manual',
    name: 'Manual Hospital Bed',
    price: 24999,
    rentPrice: 3500,
    specs: {
      'Adjustable Height': 'Yes',
      'Electric': 'No',
      'Frame': 'Steel',
      'Warranty': '2 years',
      'Max Weight Capacity': '200 kg',
      'Head Adjustment': 'Manual Crank',
      'Foot Adjustment': 'Manual Crank',
    },
  },
  {
    id: 'bed-electric',
    name: 'Electric Hospital Bed',
    price: 20999,
    rentPrice: 2500,
    specs: {
      'Adjustable Height': 'Yes',
      'Electric': 'Yes',
      'Frame': 'Steel',
      'Warranty': '2 years',
      'Max Weight Capacity': '200 kg',
      'Head Adjustment': 'Electric',
      'Foot Adjustment': 'Electric',
      'Remote Control': 'Included',
    },
  },
  {
    id: 'oxygen-concentrator',
    name: 'Portable Oxygen Concentrator',
    price: 4999,
    rentPrice: 1500,
    specs: {
      'Battery Powered': 'Yes',
      'Noise Level': '<40 dB',
      'Weight': '5.5 Kg',
      'Warranty': '1 year',
      'Oxygen Output': '1-5 L/min',
      'Battery Life': '4 hours',
      'Charging Time': '3 hours',
    },
  },
];

const specKeys = Array.from(
  new Set(productsToCompare.flatMap(p => Object.keys(p.specs)))
);

export default function ComparePage() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-amber-50">
      {/* Simple header without fixed positioning */}
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">MedEquip</div>
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <Link href="/products" className="hover:text-amber-300 transition-colors">Products</Link>
              <Link href="/about" className="hover:text-amber-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Compare Medical Equipment
            </h1>
            <p className="text-lg text-blue-600 max-w-3xl mx-auto">
              Select the best product for your needs by comparing specifications, prices, and rental options
            </p>
          </div>

          {/* Mobile Cards View */}
          {isMobile ? (
            <div className="space-y-6">
              {productsToCompare.map((product, index) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
                  onMouseEnter={() => setHighlightIndex(index)}
                  onMouseLeave={() => setHighlightIndex(null)}
                >
                  <div className="bg-blue-700 p-4 text-white">
                    <h3 className="text-xl font-bold text-center">{product.name}</h3>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between mb-5">
                      <div className="text-center flex-1">
                        <div className="font-semibold text-blue-800">Purchase Price</div>
                        <div className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                      </div>
                      <div className="text-center flex-1 border-l border-blue-100">
                        <div className="font-semibold text-blue-800">Monthly Rent</div>
                        <div className="text-lg font-bold text-gray-900">₹{product.rentPrice.toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-blue-100 pt-4">
                      <h4 className="font-bold text-blue-800 mb-3 text-center">Specifications</h4>
                      <div className="space-y-3">
                        {specKeys.map(spec => (
                          <div key={spec} className="flex justify-between">
                            <span className="font-medium text-blue-900">{spec}</span>
                            <span className="font-semibold text-gray-900">{product.specs[spec] || '-'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-3">
                      <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                        Buy Now
                      </button>
                      <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop Table View */
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                      <th className="p-5 text-left min-w-[200px] sticky left-0 z-20 bg-blue-800">Specification</th>
                      {productsToCompare.map((product, index) => (
                        <th
                          key={product.id}
                          className="p-5 text-center min-w-[250px] hover:bg-blue-600 cursor-pointer transition-colors"
                          onMouseEnter={() => setHighlightIndex(index)}
                          onMouseLeave={() => setHighlightIndex(null)}
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-lg font-bold">{product.name}</span>
                            <div className="mt-2 flex space-x-3">
                              <span className="text-sm bg-blue-900 px-2 py-1 rounded">
                                ₹{product.price.toLocaleString()}
                              </span>
                              <span className="text-sm bg-amber-600 px-2 py-1 rounded">
                                Rent: ₹{product.rentPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specKeys.map((spec, idx) => (
                      <tr
                        key={spec}
                        className={`border-b border-blue-100 ${
                          highlightIndex !== null
                            ? 'bg-blue-50'
                            : idx % 2 === 0
                            ? 'bg-white'
                            : 'bg-blue-50'
                        }`}
                      >
                        <td className="p-5 font-semibold text-blue-900 sticky left-0 bg-inherit z-10">
                          {spec}
                        </td>
                        {productsToCompare.map((product, i) => (
                          <td
                            key={product.id + spec}
                            className={`p-5 text-center ${
                              highlightIndex === i ? 'bg-blue-100' : ''
                            }`}
                          >
                            <span className="font-semibold text-gray-900">
                              {product.specs[spec] || '-'}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-blue-50">
                      <td className="p-5 sticky left-0 bg-blue-50 z-10"></td>
                      {productsToCompare.map(product => (
                        <td key={product.id} className="p-5 text-center">
                          <div className="flex space-x-3 justify-center">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg transition-colors font-medium">
                              Buy Now
                            </button>
                            <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg transition-colors font-medium">
                              Rent Now
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Assistance?</h3>
            <p className="text-blue-600 mb-6 max-w-2xl mx-auto text-lg">
              Our medical equipment experts are here to help you choose the right product for your needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg text-center"
              >
                Contact Our Experts
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all text-center"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}