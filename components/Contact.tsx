import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Legal Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:pallabgorain50@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionTitle title="Get In Touch" subtitle="Contact & Appointment" />
            <p className="text-slate-600 text-lg mb-8">
              Ready to discuss your legal matter? I am here to listen and provide the guidance you need. Let's connect.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-navy-900 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-lg">Office</h4>
                  <p className="text-slate-600">Purulia District Court, West Bengal</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-navy-900 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-lg">Email</h4>
                  <p className="text-slate-600">pallabgorain50@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-navy-900 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-lg">Availability</h4>
                  <p className="text-slate-600">
                    Consultations by prior appointment.<br/>
                    Court appearances & urgent matters as scheduled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Brief Description *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gold-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message (Opens in Gmail)
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                Privacy: Your contact details will only be used to respond to your query.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;