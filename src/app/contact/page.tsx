"use client";

import { useState, useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaEnvelopeOpen,
  FaComment,
  FaClock,
  FaHeadset
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Add animation class to elements on mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach(el => {
        el.classList.add('animate-fade-in-up');
      });
    }, 100);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      
      // Shake animation for errors
      const form = document.querySelector('form');
      form?.classList.add('animate-shake');
      setTimeout(() => {
        form?.classList.remove('animate-shake');
      }, 500);
      
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-on-load">
                Get in <span className="text-blue-200">Touch</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 md:mb-10 animate-on-load">
                Have questions about our medical equipment? We&apos;re here to help and answer any questions you might have.
              </p>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start space-x-4 animate-on-load">
                  <div className="bg-blue-500 p-3 rounded-full flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Our Location</h4>
                    <p className="text-blue-100">123 Healthcare Street, New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-on-load">
                  <div className="bg-blue-500 p-3 rounded-full flex-shrink-0 mt-1">
                    <FaPhone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Phone Number</h4>
                    <a href="tel:+911234567890" className="text-blue-100 hover:text-white transition-colors block">
                      +91 12345 67890
                    </a>
                    <p className="text-blue-200 text-sm mt-1">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-on-load">
                  <div className="bg-blue-500 p-3 rounded-full flex-shrink-0 mt-1">
                    <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Email Address</h4>
                    <a href="mailto:support@oxygentimes.com" className="text-blue-100 hover:text-white transition-colors block">
                      support@oxygentimes.com
                    </a>
                    <p className="text-blue-200 text-sm mt-1">Send us a message anytime!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-on-load">
                  <div className="bg-blue-500 p-3 rounded-full flex-shrink-0 mt-1">
                    <FaClock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Working Hours</h4>
                    <p className="text-blue-100">Monday - Friday: 8:00 - 18:00</p>
                    <p className="text-blue-100">Saturday: 9:00 - 16:00</p>
                    <p className="text-blue-100">Sunday: Emergency support only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 p-5 bg-blue-500/20 rounded-xl border border-blue-400 animate-on-load">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeadset className="w-7 h-7 md:w-8 md:h-8" />
                  <h4 className="text-xl font-semibold">Need Immediate Help?</h4>
                </div>
                <p className="text-blue-100 mb-4">For urgent medical equipment needs, call our emergency support line:</p>
                <a href="tel:+919876543210" className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-6 md:p-8 lg:p-10 xl:p-12">
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 font-semibold text-center animate-fadeIn flex items-center justify-center gap-2">
                <FaCheckCircle className="text-xl text-green-600" />
                Thank you for your message! We will respond within 24 hours.
              </div>
            )}

            <div className="animate-on-load">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                      <FaUser className="text-blue-500" />
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`p-3 rounded-lg border-2 ${
                        errors.name ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-400"
                      } outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-100`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-red-500 mt-1 text-sm">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                      <FaEnvelopeOpen className="text-blue-500" />
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className={`p-3 rounded-lg border-2 ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-400"
                      } outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-100`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="text-red-500 mt-1 text-sm">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                    <FaComment className="text-blue-500" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className={`p-3 rounded-lg border-2 ${
                      errors.message ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-blue-400"
                    } outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-100 resize-none`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="text-red-500 mt-1 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLoading ? "opacity-80 cursor-not-allowed" : "hover:bg-blue-700 hover:shadow-md"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What happens next?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Our team will review your message and respond within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>For urgent inquiries, we recommend calling our support line</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We&apos;ll help you find the right medical equipment for your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
            20%, 40%, 60%, 80% { transform: translateX(8px); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            animation-fill-mode: forwards;
          }
          
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
          
          /* iPhone specific adjustments */
          @media (max-width: 640px) {
            .contact-section {
              margin: 0.5rem;
              border-radius: 1rem;
            }
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
    </div>
  );
}