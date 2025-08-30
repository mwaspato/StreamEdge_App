import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle ,Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <span className="text-slate-100 font-bold text-xl">Stream Edge</span>
            </div>
            <p className="text-slate-400 text-sm">
              Providing cutting-edge technology solutions for businesses and individuals.
              From AI integration to custom development, we drive innovation forward.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/250796508374"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 fill-green-500 hover:fill-green-600 transition-colors"
                >
                  <path d="M380.9 97.1C339-15.7 214.3-29.3 123.5 61.6 
      54.2 130.8 44.7 236.1 96.6 317.4l-26.6 97.5 
      100-26.3c77.4 42.6 174.1 33.2 242.9-35.6 
      90.9-90.9 77.3-215.6-32-256.5zM224 400c-30.9 
      0-61.6-8.5-88-24.5l-6.3-3.8-59.1 15.6 
      15.8-57.8-3.9-6.2c-27.1-43.2-34-95.3-18.2-144.6 
      15.9-49.5 52.4-89.3 99.8-109.2 
      47.4-19.9 100.8-17.9 146.1 5.3 
      45.5 23.3 75.8 67.4 80.1 117.4 
      4.3 50-14.1 99.6-49.8 135.3C320.7 
      383.9 273.3 400 224 400zm91.6-138.3c-5-2.5-29.6-14.6-34.2-16.3-4.6-1.7-7.9-2.5-11.2 
      2.5-3.3 5-12.8 16.3-15.7 19.6-2.9 3.3-5.8 3.7-10.8 
      1.2-5-2.5-21-7.8-40-24.9-14.8-13.2-24.8-29.6-27.7-34.6-2.9-5-0.3-7.7 
      2.2-10.2 2.3-2.3 5-6 7.5-9 2.5-3 3.3-5 5-8.3 
      1.7-3.3 0.8-6.2-0.4-8.7-1.2-2.5-11.2-27.1-15.4-37.1-4-9.6-8.1-8.3-11.2-8.5-2.9-0.2-6.2-0.2-9.5-0.2s-8.7 
      1.2-13.3 6.2c-4.6 5-17.5 17.1-17.5 41.7s17.9 
      48.3 20.4 51.6c2.5 3.3 35.2 53.9 85.5 75.5 
      50.3 21.6 50.3 14.4 59.3 13.5 9.2-0.8 29.6-12 
      33.7-23.5 4.2-11.5 4.2-21.4 2.9-23.5-1.3-2.1-4.6-3.3-9.6-5.8z"/>
                </svg>
              </a>
              <a
                href="https://share.google/u8Ct1uu8aOIyvvEmG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-slate-100 font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/token" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Token Services
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  AI Technology
                </Link>
              </li>
              <li>
                <Link to="/services/coding" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Coding Services
                </Link>
              </li>
              <li>
                <Link to="/services/computer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Computer Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-slate-100 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-slate-100 font-semibold">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="https://wa.me/250796508374" className="hover:text-cyan-400 transition-colors">
                  +250 796 508 374
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>info@streamedge.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Imizi Workspace, Kigali
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Stream Edge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;