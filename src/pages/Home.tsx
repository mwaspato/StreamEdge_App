import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Code, Monitor, Star, Users, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Token Services',
      description: 'Secure blockchain token development and management solutions for modern businesses.',
      link: '/services/token',
      image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Technology',
      description: 'Cutting-edge artificial intelligence integration and machine learning solutions.',
      link: '/services/ai',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Coding Services',
      description: 'Custom software development and web applications built with modern technologies.',
      link: '/services/coding',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Computer Services',
      description: 'Hardware support, system maintenance, and IT infrastructure management.',
      link: '/services/computer',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, number: '50+', label: 'Projects Delivered' },
    { icon: <Star className="w-6 h-6" />, number: '4.9', label: 'Client Rating' },
    { icon: <TrendingUp className="w-6 h-6" />, number: '99%', label: 'Success Rate' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$150',
      period: '/month',
      features: [
        'Basic support',
        'Email consultation',
        'Monthly reports',
        'Standard response time'
      ]
    },
    {
      name: 'Professional',
      price: '$350',
      period: '/month',
      popular: true,
      features: [
        'Priority support',
        'Video consultations',
        'Weekly reports',
        'Fast response time',
        'Custom solutions'
      ]
    },
    {
      name: 'Enterprise',
      price: '$750',
      period: '/month',
      features: [
        '24/7 dedicated support',
        'Unlimited consultations',
        'Daily reports',
        'Immediate response',
        'Full custom development',
        'On-site visits'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
            Technology Solutions for the
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Stream Edge provides cutting-edge technology solutions including token services, 
            AI integration, custom development, and comprehensive IT support for businesses of all sizes.
            <br /><br />
            <span className="text-cyan-400 font-semibold">Project pricing: $50 - $10,000+</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-slate-600 text-slate-100 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Our Technology Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We offer comprehensive technology services designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-all duration-300">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="h-full bg-slate-900/60 flex items-center justify-center">
                      <div className="text-cyan-400">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
                    <p className="text-slate-400 mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-2 group-hover:space-x-3 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Membership Plans
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Choose the perfect plan that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-400/20 border-2 border-cyan-400/50' 
                    : 'bg-slate-800/50 border border-slate-700'
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-100 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-400 font-normal">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-slate-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`w-full py-3 rounded-lg font-semibold transition-all text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500'
                      : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Stream Edge for their technology needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;