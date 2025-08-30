import React from 'react';
import { Brain, Cpu, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AITechnology = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models for prediction, classification, and pattern recognition tailored to your business needs.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Seamless integration of AI capabilities into existing systems and workflows for enhanced automation.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Advanced data processing and analytics solutions to extract meaningful insights from your data.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline operations and reduce manual work through AI-powered tools.'
    }
  ];

  const services = [
    'Custom AI Model Development',
    'Natural Language Processing',
    'Computer Vision Solutions',
    'Chatbot Development',
    'Predictive Analytics',
    'Recommendation Systems',
    'AI-Powered APIs',
    'Machine Learning Training'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support with natural language understanding.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and predictive modeling to help make data-driven decisions and identify growth opportunities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation tools for marketing materials, documentation, and personalized communications.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Technology</span> Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations. 
              From machine learning models to intelligent automation, we bring AI innovation to your fingertips.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore AI Solutions</span>
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
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We develop intelligent systems that learn, adapt, and provide actionable insights to drive your business forward.
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

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Our AI Services
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                We offer comprehensive AI solutions ranging from custom model development to full-scale AI system integration.
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
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              AI Use Cases
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover how AI can transform different aspects of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-all">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${useCase.image})` }}
                >
                  <div className="h-full bg-slate-900/60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{useCase.title}</h3>
                  <p className="text-slate-400">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We work with cutting-edge AI frameworks and tools to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'AWS ML'].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <span className="text-slate-300 font-medium">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's explore how artificial intelligence can optimize your operations and drive innovation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all inline-flex items-center space-x-2"
          >
            <span>Discuss Your AI Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AITechnology;