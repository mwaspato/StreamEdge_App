import React from 'react';
import { Monitor, HardDrive, Wifi, Shield, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerServices = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Hardware Support',
      description: 'Complete computer hardware repair, maintenance, and upgrade services for optimal performance.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Data Recovery',
      description: 'Professional data recovery services for lost or corrupted files from various storage devices.'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Network Solutions',
      description: 'Network setup, configuration, and troubleshooting for homes and businesses.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Services',
      description: 'Cybersecurity solutions including antivirus installation, firewall setup, and security audits.'
    }
  ];

  const services = [
    'Computer Repair & Maintenance',
    'Hardware Upgrades',
    'Operating System Installation',
    'Data Backup & Recovery',
    'Network Setup & Configuration',
    'Virus Removal & Security',
    'Software Installation & Support',
    'Remote Technical Support'
  ];

  const pricingCategories = [
    {
      category: 'Basic Services',
      items: [
        { service: 'Computer Diagnosis', price: 'KSh 1,500' },
        { service: 'Virus Removal', price: 'KSh 2,500' },
        { service: 'Software Installation', price: 'KSh 1,000' },
        { service: 'OS Installation', price: 'KSh 3,000' }
      ]
    },
    {
      category: 'Hardware Services',
      items: [
        { service: 'Hard Drive Replacement', price: 'KSh 5,000+' },
        { service: 'RAM Upgrade', price: 'KSh 3,000+' },
        { service: 'Screen Repair', price: 'KSh 8,000+' },
        { service: 'Motherboard Repair', price: 'KSh 12,000+' }
      ]
    },
    {
      category: 'Business Services',
      items: [
        { service: 'Network Setup', price: 'KSh 15,000+' },
        { service: 'Server Configuration', price: 'KSh 25,000+' },
        { service: 'Security Audit', price: 'KSh 10,000+' },
        { service: 'IT Consultation', price: 'KSh 5,000/hour' }
      ]
    }
  ];

  const supportOptions = [
    {
      type: 'On-Site Support',
      description: 'We come to your location for hardware repairs and complex installations.',
      icon: <Monitor className="w-6 h-6" />,
      response: '2-4 hours'
    },
    {
      type: 'Remote Support',
      description: 'Quick software troubleshooting and configuration via remote desktop.',
      icon: <Wifi className="w-6 h-6" />,
      response: '15-30 minutes'
    },
    {
      type: 'Workshop Service',
      description: 'Bring your device to our workshop for detailed diagnosis and repair.',
      icon: <HardDrive className="w-6 h-6" />,
      response: '24-48 hours'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Computer Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive computer hardware support, repair, and IT services. 
              From troubleshooting to upgrades, we keep your technology running smoothly.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>Get Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Complete IT Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Professional computer services for individuals and businesses, ensuring your technology works when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Support Options */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Our Services
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Comprehensive computer and IT support services for all your technology needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/membership"
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
              >
                <span>View Membership Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Support Options */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Support Options
              </h2>
              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">{option.type}</h3>
                        <p className="text-slate-400 mb-3">{option.description}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-400 font-medium">Response: {option.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transparent pricing for all our computer services. Prices exclude parts and components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-all">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-300">{item.service}</span>
                      <span className="text-cyan-400 font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              * Prices are estimates and may vary based on complexity and parts required
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Emergency IT Support
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Critical system failure? We offer emergency support services with rapid response times for business-critical situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/250796508374"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
              >
                Emergency WhatsApp: +250 796 508 374
              </a>
              <Link
                to="/contact"
                className="border border-slate-600 text-slate-100 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Computer Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for reliable, professional computer services that keep your technology running smoothly.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all inline-flex items-center space-x-2"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComputerServices;