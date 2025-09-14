"use client";

import React, { useState } from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaHeart,
  FaPaperPlane
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    } else {
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000);
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:text-[#1877F2]" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: <FaInstagram />, href: "#", color: "hover:text-[#E4405F]" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:text-[#0A66C2]" },
    { icon: <FaYoutube />, href: "#", color: "hover:text-[#FF0000]" },
  ];

  const services = [
    "Buy Medical Equipment",
    "Rent Equipment",
    "Lease Options",
    "Nationwide Delivery",
    "24/7 Customer Support"
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Equipment Catalog",
    "Blog",
    "Contact Us",
    "FAQ",
    "Privacy Policy",
    "Terms & Conditions"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <>
      {/* Subscription Success Modal */}
      <AnimatePresence>
        {isSubscribed && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg z-50 flex items-center"
          >
            <FaPaperPlane className="mr-2" />
            <p>Thank you for subscribing to our newsletter!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg z-50"
          >
            <p>Please enter a valid email address.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-[#155AA2] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#57BADF] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#C7501D] opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                whileHover={{ color: "#A98959" }}
                transition={{ duration: 0.3 }}
              >
                Oxygen Times
              </motion.h3>
              <p className="mb-4 text-[#EFECED]">
                Making advanced medical equipment accessible to everyone in India, bridging the gap between hospital care and home recovery.
              </p>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-white text-[#155AA2] p-2 rounded-full transition-all duration-300 hover:bg-[#C7501D] hover:text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-4 border-b border-[#A98959] pb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Services
              </motion.h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li 
                    key={index} 
                    className="hover:text-[#EFECED] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="#">{service}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-4 border-b border-[#A98959] pb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index} 
                    className="hover:text-[#EFECED] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="#">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-4 border-b border-[#A98959] pb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Info
              </motion.h4>
              <div className="mb-6">
                <motion.div 
                  className="flex items-start mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaMapMarkerAlt className="mt-1 mr-3 text-[#A98959]" />
                  <p>123 Healthcare Street, New Delhi, India</p>
                </motion.div>
                <motion.div 
                  className="flex items-center mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaPhoneAlt className="mr-3 text-[#A98959]" />
                  <a href="tel:+911234567890" className="hover:text-[#EFECED] transition-colors duration-300">+91 12345 67890</a>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaEnvelope className="mr-3 text-[#A98959]" />
                  <a href="mailto:support@oxygentimes.com" className="hover:text-[#EFECED] transition-colors duration-300">support@oxygentimes.com</a>
                </motion.div>
              </div>

              <motion.h4 
                className="text-lg font-semibold mb-4 border-b border-[#A98959] pb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Newsletter
              </motion.h4>
              <p className="mb-3 text-[#EFECED]">Subscribe to get updates on new products and promotions</p>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C7501D]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="bg-[#C7501D] text-white py-2 px-4 rounded font-medium transition-colors duration-300 hover:bg-[#A98959] flex items-center justify-center"
                  whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <FaPaperPlane className="ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 rounded-xl overflow-hidden shadow-xl border-2 border-[#A98959]"
          >
            <div className="h-64 md:h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14046.92945687822!2d77.1653805!3d28.546195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dec15d2acfb%3A0x44144b13d050b48e!2sDAMODAR%20HOSTEL%20BLOCK-A%2C%20JAWAHARLAL%20NEHRU%20UNIVERSITY-2%2C%20Old%20SPS%20Rd%2C%20Delhi%2C%20New%20Delhi%2C%20Delhi%20110048%2C%20India!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxygen Times Location"
              ></iframe>
            </div>
            <div className="bg-[#0f4a87] p-4 text-center">
              <p className="flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2 text-[#A98959]" />
                <span>Damodar Hostel, JNU, New Delhi, India (110067)</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#0f4a87] py-4 relative z-10"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#EFECED]">
                © {new Date().getFullYear()} Oxygen Times. All rights reserved.
              </p>
              <motion.div 
                className="flex items-center mt-2 md:mt-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm mr-2">Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500 mx-1" />
                </motion.span>
                <span className="text-sm ml-2">by Manya Shukla</span>
              </motion.div>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <motion.a 
                  href="#" 
                  className="text-sm text-[#EFECED] hover:text-[#C7501D] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-sm text-[#EFECED] hover:text-[#C7501D] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
