import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTech Banking Platform',
      category: 'Web Development',
      description: 'Secure online banking platform with real-time transactions, multi-factor authentication, and comprehensive account management.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Stripe API'],
      features: ['Real-time transactions', 'Mobile responsive', 'Secure authentication', 'Account analytics'],
      client: 'Digital Bank Rwanda'
    },
    {
      title: 'AI-Powered Inventory System',
      category: 'AI Technology',
      description: 'Intelligent inventory management system with predictive analytics, automated reordering, and demand forecasting.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Django', 'PostgreSQL', 'React'],
      features: ['Predictive analytics', 'Automated alerts', 'Real-time tracking', 'Demand forecasting'],
      client: 'East Africa Retail'
    },
    {
      title: 'Blockchain Voting System',
      category: 'Token Services',
      description: 'Secure, transparent voting platform built on blockchain technology with smart contract governance and real-time results.',
      image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'MetaMask'],
      features: ['Blockchain security', 'Smart contracts', 'Real-time results', 'Transparent auditing'],
      client: 'Electoral Commission'
    },
    {
      title: 'E-Learning Mobile App',
      category: 'Mobile Development',
      description: 'Comprehensive mobile learning platform with offline capabilities, progress tracking, and interactive assessments.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Video.js', 'Push Notifications'],
      features: ['Offline learning', 'Progress tracking', 'Interactive quizzes', 'Video streaming'],
      client: 'EduTech Solutions'
    },
    {
      title: 'Hospital Management System',
      category: 'Custom Software',
      description: 'Complete hospital management solution with patient records, appointment scheduling, and billing integration.',
      image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Redis'],
      features: ['Patient management', 'Appointment system', 'Billing integration', 'Report generation'],
      client: 'Kigali Medical Center'
    },
    {
      title: 'IoT Smart Home Platform',
      category: 'IoT Solutions',
      description: 'Comprehensive smart home automation system with device management, energy monitoring, and mobile control.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MQTT', 'MongoDB', 'React Native', 'Arduino'],
      features: ['Device automation', 'Energy monitoring', 'Remote control', 'Voice integration'],
      client: 'Smart Home Rwanda'
    }
  ];

  const categories = ['All', 'Web Development', 'AI Technology', 'Token Services', 'Mobile Development', 'Custom Software', 'IoT Solutions'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const testimonials = [
    {
      name: 'Sarah Kimani',
      company: 'Kenya Digital Bank',
      role: 'CTO',
      content: 'Stream Edge delivered an exceptional banking platform that exceeded our expectations. The security features and user experience are top-notch.',
      rating: 5
    },
    {
      name: 'John Mwangi',
      company: 'Retail Chain Kenya',
      role: 'Operations Director',
      content: 'The AI-powered inventory system has revolutionized our operations. We have reduced waste by 40% and improved efficiency significantly.',
      rating: 5
    },
    {
      name: 'Dr. Grace Wanjiku',
      company: 'Nairobi General Hospital',
      role: 'Chief Administrator',
      content: 'The hospital management system has streamlined our processes and improved patient care. Excellent work and ongoing support.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our successful projects across various industries. From fintech to healthcare, 
              we've delivered innovative solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-all group">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="h-full bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center space-x-4">
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-cyan-400 font-medium">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 text-cyan-400 text-xs rounded border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-slate-100 font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's discuss your project requirements and create something amazing together.
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

export default Portfolio;