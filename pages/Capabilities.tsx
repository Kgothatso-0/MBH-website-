
import React from 'react';
import { CAPABILITIES, SERVICES } from '../constants.tsx';

const Capabilities: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-mbh-tan py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Performance</h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-mbh-brown mb-8 leading-none">Strategic <br/>Capabilities</h1>
          <p className="max-w-2xl text-gray-600 text-xl leading-relaxed">
            Unlocking value through institutional oversight and specialized support frameworks.
          </p>
        </div>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {CAPABILITIES.map((cap, index) => (
              <div key={index} className="space-y-6">
                <span className="text-mbh-gold font-bold text-sm tracking-[0.3em] uppercase">Phase 0{index + 1}</span>
                <h3 className="text-2xl font-serif font-bold text-mbh-brown">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-6">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview repeated for reinforcement */}
      <section className="py-32 bg-mbh-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Operations</h2>
            <h3 className="font-serif text-4xl font-bold text-mbh-brown">Core Business Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-white p-12 shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-mbh-brown mb-4 uppercase tracking-tighter">{service.name}</h4>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-mbh-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-8">Group Standards</h3>
          <h4 className="font-serif text-4xl md:text-5xl font-bold mb-12 max-w-3xl mx-auto">Scaling with institutional precision.</h4>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="border-l border-gray-800 pl-8 text-left">
              <span className="block text-mbh-gold text-3xl font-bold mb-2">High</span>
              <span className="text-xs uppercase text-gray-500 tracking-widest">Efficiency</span>
            </div>
            <div className="border-l border-gray-800 pl-8 text-left">
              <span className="block text-mbh-gold text-3xl font-bold mb-2">Sustainable</span>
              <span className="text-xs uppercase text-gray-500 tracking-widest">Growth</span>
            </div>
            <div className="border-l border-gray-800 pl-8 text-left">
              <span className="block text-mbh-gold text-3xl font-bold mb-2">Focused</span>
              <span className="text-xs uppercase text-gray-500 tracking-widest">Leadership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
