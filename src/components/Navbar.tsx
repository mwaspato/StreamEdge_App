import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../img/NavLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Token Services', path: '/services/token' },
    { name: 'AI Technology', path: '/services/ai' },
    { name: 'Coding Services', path: '/services/coding' },
    { name: 'Computer Services', path: '/services/computer' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Stream Edge Logo"
              className="w-[200px] h-[80px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${
                isActive('/portfolio') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/membership"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-500 transition-all"
            >
              Get Membership
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-slate-400">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block pl-6 pr-3 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/membership"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-lg text-base font-medium text-center"
              >
                Get Membership
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;