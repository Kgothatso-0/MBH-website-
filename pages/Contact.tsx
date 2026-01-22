
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you. Mokgatle Business Holdings has received your inquiry.');
    setFormData({ name: '', email: '', company: '', subject: 'General Inquiry', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20 bg-mbh-tan min-h-screen">
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="font-serif text-5xl font-bold text-mbh-brown mb-8 leading-none tracking-tighter">Connect with the Group</h1>
              <p className="text-gray-600 text-lg mb-12 max-w-md">
                We maintain an open channel for professional inquiries, strategic partnerships, and investment discussions.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-px bg-mbh-gold mt-3"></div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Corporate Office</h4>
                    <p className="text-mbh-brown font-bold text-xl mb-1">Pretoria</p>
                    <p className="text-gray-500 text-sm">Menlyn Main Park, South Africa</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-px bg-mbh-gold mt-3"></div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Email Channel</h4>
                    <p className="text-mbh-brown font-bold text-xl mb-1">Inquiries</p>
                    <p className="text-gray-500 text-sm">inquiries@mbh-group.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 border border-mbh-brown/20 bg-white/50 rounded-sm">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 text-mbh-gold">Confidentiality</p>
               <p className="text-xs text-gray-400 leading-relaxed italic">All business inquiries are handled with strict institutional confidentiality and professional discretion.</p>
            </div>
          </div>

          {/* Right Side: High Converting Form */}
          <div className="lg:col-span-7 bg-white p-12 shadow-2xl rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b-2 border-gray-100 p-3 focus:border-mbh-gold outline-none transition-all placeholder:text-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-b-2 border-gray-100 p-3 focus:border-mbh-gold outline-none transition-all placeholder:text-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Optional"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full border-b-2 border-gray-100 p-3 focus:border-mbh-gold outline-none transition-all placeholder:text-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Inquiry Type</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full border-b-2 border-gray-100 p-3 focus:border-mbh-gold outline-none transition-all bg-transparent"
                  >
                    <option>General Inquiry</option>
                    <option>Strategic Partnership</option>
                    <option>Investment Opportunity</option>
                    <option>Housekeeping Services</option>
                    <option>Automotive Query</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can MBH support your objective?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border-b-2 border-gray-100 p-3 focus:border-mbh-gold outline-none transition-all resize-none placeholder:text-gray-200"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-mbh-brown text-white font-bold uppercase tracking-widest py-6 hover:bg-mbh-gold transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Transmit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
