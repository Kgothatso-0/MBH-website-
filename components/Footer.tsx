
import React from 'react';
import { Link } from 'react-router-dom';
import { MBHGroupLogo } from './Logos.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mbh-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-gray-900 pb-20">
          <div className="md:col-span-1">
            <MBHGroupLogo className="h-20 mb-8 items-start" light={true} />
            <p className="text-gray-500 text-sm leading-relaxed">
              Mokgatle Business Holdings is a diversified institutional group dedicated to sustainable value across African markets.
            </p>
          </div>
          <div>
            <h4 className="text-mbh-gold font-bold text-xs tracking-widest uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">The Group</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/capabilities" className="text-gray-400 hover:text-white transition-colors">Capabilities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-mbh-gold font-bold text-xs tracking-widest uppercase mb-8">Inquiries</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-gray-400">General: info@mbh-group.com</li>
              <li className="text-gray-400">Strategic: legal@mbh-group.com</li>
              <li className="text-gray-400">Careers: hr@mbh-group.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-mbh-gold font-bold text-xs tracking-widest uppercase mb-8">Headquarters</h4>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              Corporate Plaza, Menlyn Main<br />
              Pretoria, 0181<br />
              South Africa
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Mokgatle Business Holdings (PTY) LTD.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-mbh-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mbh-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
