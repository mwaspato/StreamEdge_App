import React, { useState } from 'react';
import { Check, Upload, X } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [formData, setFormData] = useState({
    companyName: '',
    tinNumber: '',
    businessNature: '',
    contactName: '',
    email: '',
    phone: '',
    services: [] as string[],
    certificate: null as File | null
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$150',
      period: '/month',
      features: [
        'Basic support',
        'Email consultation',
        'Monthly reports',
        'Standard response time',
        'Access to basic tools'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$350',
      period: '/month',
      popular: true,
      features: [
        'Priority support',
        'Video consultations',
        'Weekly reports',
        'Fast response time',
        'Custom solutions',
        'Advanced analytics',
        'API access'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$750',
      period: '/month',
      features: [
        '24/7 dedicated support',
        'Unlimited consultations',
        'Daily reports',
        'Immediate response',
        'Full custom development',
        'On-site visits',
        'White-label solutions',
        'Dedicated account manager'
      ]
    }
  ];

  const services = [
    'Token Services',
    'AI Technology Support',
    'Custom Software Development',
    'Web Development',
    'Mobile App Development',
    'Computer Hardware Support',
    'IT Infrastructure Management',
    'Cloud Services',
    'Cybersecurity Solutions',
    'Data Analytics'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Membership request:', { ...formData, selectedPlan });
    alert('Membership request submitted! We will review your application and contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter(s => s !== service)
        : [...formData.services, service]
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      certificate: file
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Membership</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Unlock premium technology solutions and dedicated support with our flexible membership plans.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Select the perfect membership plan that aligns with your business needs and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-xl p-8 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-400/20 border-2 border-cyan-400' 
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                } ${plan.popular ? 'scale-105' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
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
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 text-slate-300">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {selectedPlan === plan.id && (
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 text-cyan-400 font-medium">
                      <Check className="w-5 h-5" />
                      <span>Selected</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Request Form */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-100 text-center mb-8">
              Membership Application
            </h2>
            <p className="text-slate-400 text-center mb-8">
              Please provide your business information to process your membership request.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
                  Company Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="tinNumber" className="block text-sm font-medium text-slate-300 mb-2">
                      Business TIN Number *
                    </label>
                    <input
                      type="text"
                      id="tinNumber"
                      name="tinNumber"
                      required
                      value={formData.tinNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Enter TIN number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessNature" className="block text-sm font-medium text-slate-300 mb-2">
                    Nature of Business *
                  </label>
                  <textarea
                    id="businessNature"
                    name="businessNature"
                    required
                    rows={3}
                    value={formData.businessNature}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                    placeholder="Describe your business activities..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Registration Certificate *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="certificate"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="certificate"
                      className="w-full flex items-center justify-center px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 cursor-pointer hover:bg-slate-600 transition-colors"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      {formData.certificate ? formData.certificate.name : 'Upload Certificate'}
                    </label>
                    {formData.certificate && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, certificate: null })}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-red-400"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Accepted formats: PDF, JPG, PNG (Max 5MB)
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-slate-300 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="company@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="+250 7XX XXX XXX"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
                  Service Selection
                </h3>
                <p className="text-slate-400 text-sm">
                  Select the services you're interested in (you can modify this later):
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="rounded border-slate-600 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-slate-700"
                      />
                      <span className="text-slate-300">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Selected Plan Summary */}
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Selected Plan</h3>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 capitalize">
                    {plans.find(p => p.id === selectedPlan)?.name} Plan
                  </span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {plans.find(p => p.id === selectedPlan)?.price}/month
                  </span>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-500 transition-all"
                >
                  Submit Application
                </button>
                <p className="text-xs text-slate-400 mt-4">
                  By submitting this form, you agree to our terms of service and privacy policy. 
                  We will review your application and contact you within 24-48 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;