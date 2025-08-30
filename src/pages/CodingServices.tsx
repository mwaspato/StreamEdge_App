import React from 'react';
import { Code, Globe, Smartphone, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodingServices = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies and frameworks.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal performance.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions, APIs, and database architectures that scale with your business.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements and workflows.'
    }
  ];

  const technologies = {
    frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Python', 'PHP', 'Java', 'PostgreSQL', 'MongoDB'],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel']
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction processing.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React Native', 'Firebase', 'Biometrics']
    },
    {
      title: 'Business Management System',
      description: 'Comprehensive ERP system for inventory, sales, accounting, and customer relationship management.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Laravel', 'PostgreSQL']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We thoroughly analyze your project requirements and create detailed specifications.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create system architecture, UI/UX designs, and technical implementation plans.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development process with regular updates and milestone deliveries.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing followed by deployment and ongoing maintenance support.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Coding Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Professional software development services for web, mobile, and custom applications. 
              We build scalable, secure, and user-friendly solutions using modern technologies.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
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
              Development Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From concept to deployment, we provide comprehensive development services across all platforms.
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

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver high-performance, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-4 capitalize">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' :
                   category === 'mobile' ? 'Mobile' : 'Cloud & DevOps'}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Examples of custom solutions we've built for our clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-all group">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="h-full bg-slate-900/60 group-hover:bg-slate-900/40 transition-all"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A structured approach that ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-4">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
                {index < process.length - 1 && (
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
            Ready to Build Your Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that meets your business goals.
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

export default CodingServices;