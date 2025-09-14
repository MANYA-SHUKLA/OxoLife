'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPopup(true);
      setEmail('');
      
      setTimeout(() => setShowPopup(false), 3000);
    }, 1000);
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden pt-12 pb-8">
     
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-1/4 w-20 h-20 bg-blue-500 rounded-full filter blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-blue-400 rounded-full filter blur-xl animate-ping-slow"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-white rounded-full filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Branding & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-3 shadow-md">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Oxygen<span className="text-blue-300">Times</span>
              </h2>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Trusted supplier of home healthcare equipment in India. Compare, buy, or rent products with confidence.
            </p>
            
            <div className="flex space-x-3 pt-2">
              {[
                { name: 'Facebook', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                ), url: 'https://facebook.com' },
                { name: 'Twitter', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                ), url: 'https://twitter.com' },
                { name: 'Instagram', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                ), url: 'https://instagram.com' },
                { name: 'LinkedIn', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                ), url: 'https://linkedin.com' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 bg-opacity-50 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-col space-y-3">
            <h3 className="font-semibold text-white text-lg border-b border-blue-600 pb-2">Quick Links</h3>
            {['Home', 'Products', 'Compare', 'Testimonials', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-blue-300 transition-all duration-300 text-sm group flex items-center py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-blue-300 text-xs mr-2">›</span> {item}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg border-b border-blue-600 pb-2">Contact Us</h3>
            
            <div className="flex items-start space-x-3 group">
              <span className="text-blue-300 text-sm mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </span>
              <a href="tel:+918005586588" className="text-blue-100 text-sm hover:text-blue-300 transition-colors">
                +91 80055 86588
              </a>
            </div>
            
            <div className="flex items-start space-x-3 group">
              <span className="text-blue-300 text-sm mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </span>
              <a href="mailto:support@oxygentimes.com" className="text-blue-100 text-sm hover:text-blue-300 transition-colors break-all">
                support@oxygentimes.com
              </a>
            </div>
            
            <div className="flex items-start space-x-3 group">
              <span className="text-blue-300 text-sm mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <p className="text-blue-100 text-sm">
                Damodar Hostel, Jawaharlal Nehru University, New Delhi, India - 110067
              </p>
            </div>
          </div>

        2
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg border-b border-blue-600 pb-2">Newsletter</h3>
            <p className="text-blue-100 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="px-3 py-2 text-sm bg-blue-700 bg-opacity-40 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full placeholder-blue-200 border border-blue-600"
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-blue-800 text-sm px-4 py-2 rounded font-medium hover:bg-blue-50 transition-colors duration-300 disabled:opacity-70 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>
          </div>
        </div>

     
        <div className="border-t border-blue-700 mt-10 pt-6 text-center text-blue-200 text-xs relative z-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Oxygen Times. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors hover:underline text-xs">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors hover:underline text-xs">Terms & Conditions</Link>
              <Link href="/shipping-policy" className="hover:text-white transition-colors hover:underline text-xs">Shipping Policy</Link>
              <Link href="/return-policy" className="hover:text-white transition-colors hover:underline text-xs">Return Policy</Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
          }
          @keyframes ping-slow {
            75%, 100% { transform: scale(1.5); opacity: 0; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowPopup(false)}></div>
          <div className="bg-white rounded-lg p-5 max-w-md w-full mx-4 z-10 transform transition-all duration-300 scale-100 opacity-100 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-base font-medium text-gray-900 text-center mb-1">Subscribed Successfully!</h3>
            <p className="text-xs text-gray-500 text-center">
              Thank you for subscribing to our newsletter. You&apos;ll receive our latest updates soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-3 w-full bg-blue-700 text-white py-1.5 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
