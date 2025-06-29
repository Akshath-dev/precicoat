'use client';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: "Manufacturing Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Pune, Maharashtra",
    experience: "3-5 years",
    description: "Lead manufacturing process optimization and equipment integration for precision coating systems."
  },
  {
    id: 2,
    title: "Application Engineer",
    department: "Technical Support",
    type: "Full-time", 
    location: "Mumbai, Maharashtra",
    experience: "2-4 years",
    description: "Provide technical support and application development for pumping and coating solutions."
  },
  {
    id: 3,
    title: "Sales Executive",
    department: "Sales",
    type: "Full-time",
    location: "Delhi, India",
    experience: "4-6 years",
    description: "Drive business growth through strategic sales of industrial automation and coating equipment."
  },
  {
    id: 4,
    title: "Quality Assurance Engineer",
    department: "Quality",
    type: "Full-time",
    location: "Pune, Maharashtra", 
    experience: "2-3 years",
    description: "Ensure product quality and compliance with international standards for manufacturing equipment."
  },
  {
    id: 5,
    title: "Service Technician",
    department: "Service",
    type: "Full-time",
    location: "Chennai, Tamil Nadu",
    experience: "1-3 years",
    description: "Provide on-site installation, maintenance, and repair services for precision equipment."
  },
  {
    id: 6,
    title: "Software Developer",
    department: "IT",
    type: "Full-time",
    location: "Bangalore, Karnataka",
    experience: "3-5 years",
    description: "Develop control software and HMI applications for industrial automation systems."
  }
];

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive medical insurance coverage for you and your family",
    icon: "🏥"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement programs",
    icon: "📈"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and hybrid work options",
    icon: "⚖️"
  },
  {
    title: "Competitive Benefits",
    description: "Attractive salary package with performance-based incentives",
    icon: "💰"
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.experience || !formData.resume) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen" style={{ background: '#101829' }}>
      {/* Hero Section */}
      <section className="relative w-full h-[380px] md:h-[440px] flex flex-col justify-center items-center text-white text-center overflow-hidden">
        {/* Background image with dark overlay for readability */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" 
            alt="Growth and career opportunities" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0" style={{ background: 'rgba(16,24,41,0.7)' }} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Work With Us
          </h1>
          <p className="text-lg md:text-2xl mb-2 drop-shadow-md max-w-2xl">
            Join the Precicoat Pumptronix team and shape the future of precision manufacturing
          </p>
          <p className="text-base md:text-lg text-gray-200 drop-shadow-md">
            Career Opportunities & Growth
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">PP</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Precicoat Pumptronix</h2>
                  <p className="text-gray-600">Excellence in Precision Manufacturing</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Precicoat Pumptronix has been at the forefront of precision coating and pumping solutions since our inception. 
                Our commitment to innovation and excellence has made us a trusted partner for manufacturing industries worldwide. 
                We specialize in providing cutting-edge equipment and comprehensive support services for electronic assembly, 
                industrial automation, and precision manufacturing processes.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our team consists of dedicated professionals who share a passion for engineering excellence and customer satisfaction. 
                We foster a collaborative environment where technical expertise meets creative problem-solving, enabling us to deliver 
                world-class solutions that exceed our clients' expectations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Precicoat Pumptronix?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-gray-700">Industry-leading technology and innovation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-gray-700">Comprehensive training and development programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-gray-700">Collaborative and inclusive work environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-gray-700">Global opportunities and career advancement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ background: '#101829' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Employee Benefits</h2>
            <p className="text-white max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and growth opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600">Explore exciting career opportunities with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Department:</span> {job.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {job.experience}
                  </p>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">{job.description}</p>
                
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16" style={{ background: '#101829' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Be Part Of The Team</h2>
            <p className="text-orange-100">Fill the form and apply for the available vacancy</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-gray-900 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                >
                  <option value="">Select Position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                placeholder="Tell us why you're interested in working with Precicoat Pumptronix..."
              />
            </div>
            
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              SUBMIT APPLICATION
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}