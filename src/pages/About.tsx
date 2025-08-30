import React from 'react';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission Driven',
      description: 'We are committed to delivering innovative technology solutions that drive business growth and digital transformation.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focused',
      description: 'Our clients success is our success. We build lasting partnerships through exceptional service and reliable solutions.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring robust, scalable, and secure technology solutions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stream Edge</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to providing innovative solutions 
              that empower businesses and individuals to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Founded with a vision to bridge the gap between traditional business practices 
                  and cutting-edge technology, Stream Edge has grown to become a trusted partner 
                  for organizations seeking digital transformation.
                </p>
                <p>
                  We specialize in token services, AI technology integration, custom software development, 
                  and comprehensive computer services. Our team combines deep technical expertise with 
                  business acumen to deliver solutions that not only meet current needs but also 
                  position our clients for future success.
                </p>
                <p>
                  Based in Kigali, Rwanda, we serve clients globally with project pricing ranging from 
                  $50 for basic services to $10,000+ for comprehensive enterprise solutions. Whether you're 
                  a startup or an enterprise, we provide the expertise and support you need to achieve your goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-4">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We offer a comprehensive suite of technology services designed to meet the diverse needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">B2B Solutions</h3>
              <p className="text-slate-300 mb-6">
                Enterprise-grade technology solutions including custom software development, 
                AI integration, blockchain services, and comprehensive IT support for businesses 
                looking to scale and innovate.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Enterprise software development</li>
                <li>• AI and machine learning integration</li>
                <li>• Blockchain and token services</li>
                <li>• IT infrastructure management</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">B2C Services</h3>
              <p className="text-slate-300 mb-6">
                Individual and small business solutions including web development, 
                mobile applications, computer services, and technology consulting 
                tailored for personal and small business needs.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Personal website development</li>
                <li>• Mobile app development</li>
                <li>• Computer repair and maintenance</li>
                <li>• Technology consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Stream Edge can help transform your business with cutting-edge technology solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;