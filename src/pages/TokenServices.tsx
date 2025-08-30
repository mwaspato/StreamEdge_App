import React from 'react';
import { Shield, Lock, Coins, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TokenServices = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Token Development',
      description: 'Build robust and secure tokens using industry-standard blockchain protocols and smart contract best practices.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Smart Contract Auditing',
      description: 'Comprehensive security audits to ensure your smart contracts are free from vulnerabilities and optimized for gas efficiency.'
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: 'Token Economics Design',
      description: 'Strategic tokenomics planning including supply mechanisms, distribution strategies, and utility design for sustainable growth.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'DeFi Integration',
      description: 'Seamless integration with decentralized finance protocols for staking, liquidity provision, and yield farming opportunities.'
    }
  ];

  const services = [
    'ERC-20 Token Development',
    'BEP-20 Token Creation',
    'NFT (ERC-721) Development',
    'Multi-signature Wallet Setup',
    'Token Bridge Development',
    'Decentralized Exchange Integration',
    'Staking Platform Development',
    'Governance Token Implementation'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Planning',
      description: 'We analyze your requirements and design the optimal token architecture for your project.'
    },
    {
      step: '02',
      title: 'Smart Contract Development',
      description: 'Our experts develop secure, efficient smart contracts tailored to your specifications.'
    },
    {
      step: '03',
      title: 'Testing & Auditing',
      description: 'Comprehensive testing on testnets followed by professional security audits.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Mainnet deployment with ongoing technical support and maintenance services.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Token Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Professional blockchain token development and management solutions. 
              From concept to deployment, we handle all aspects of token creation and ecosystem development.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
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
              Comprehensive Token Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We provide end-to-end token development services with security, scalability, and compliance at the forefront.
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

      {/* Services List */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Our Token Development Services
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                From simple utility tokens to complex DeFi protocols, we offer a complete range of blockchain development services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/membership"
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Blockchain development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures secure, efficient, and successful token deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Launch Your Token?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your token project requirements and create a secure, scalable blockchain solution.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TokenServices;