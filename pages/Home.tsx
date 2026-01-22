
import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import { MBHAutomotiveLogo, MBHHousekeepingLogo, StudioMBHLogo } from '../components/Logos';

const Home: React.FC = () => {
  const PRIMARY_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-mbh-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={PRIMARY_IMAGE} 
            alt="MBH Corporate" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-6xl md:text-9xl text-white font-bold leading-none mb-6 tracking-tighter">
              MBH
            </h1>
            <h2 className="text-2xl md:text-3xl text-mbh-gold font-bold mb-8 tracking-[0.3em] uppercase">
              Mokgatle Business Holdings
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
              Managing a high-performance portfolio across Africa through strategic discipline and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-mbh-gold hover:bg-white hover:text-mbh-dark text-mbh-dark px-12 py-5 font-bold tracking-widest uppercase transition-all duration-300 text-center"
              >
                Contact Group
              </Link>
              <Link 
                to="/portfolio" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-mbh-dark px-12 py-5 font-bold tracking-widest uppercase transition-all duration-300 text-center"
              >
                Our Companies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Business Activities with Logos */}
      <section className="py-32 bg-mbh-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-mbh-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Operations</h2>
            <h3 className="font-serif text-5xl font-bold text-mbh-dark">Services & Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Housekeeping */}
            <div className="bg-white p-12 shadow-sm border-b-4 border-mbh-gold hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
              <MBHHousekeepingLogo className="h-24 mb-10" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Professional housekeeping and premium property maintenance services operated under the MBH group.
              </p>
            </div>
            
            {/* Automotive */}
            <div className="bg-white p-12 shadow-sm border-b-4 border-mbh-gold hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
              <MBHAutomotiveLogo className="h-24 mb-10" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Vehicle sales and diverse automotive business activities within the MBH strategic portfolio.
              </p>
            </div>

            {/* Studio MBH */}
            <div className="bg-white p-12 shadow-sm border-b-4 border-mbh-gold hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
              <StudioMBHLogo className="h-24 mb-10" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Strategic marketing, brand development, and creative growth support across MBH businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Core Focus</h2>
            <h3 className="font-serif text-4xl font-bold text-mbh-dark">Industries of Operation</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 divide-x divide-y divide-gray-100">
            {INDUSTRIES.map((industry, index) => (
              <div key={index} className="p-12 hover:bg-mbh-dark hover:text-white transition-all duration-300 group">
                <h4 className="text-lg font-bold mb-2 group-hover:text-mbh-gold transition-colors">{industry}</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Sector {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-40 bg-mbh-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-mbh-gold font-bold tracking-[0.5em] uppercase text-xs mb-10">Institutional Vision</h2>
          <p className="font-serif text-4xl md:text-6xl leading-tight font-bold">
            "Strategic leadership. Operational excellence. Sustainable growth."
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 bg-mbh-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-16 md:p-24 shadow-sm">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-mbh-dark mb-8">
              Open for Strategic Dialogue.
            </h3>
            <Link 
              to="/contact" 
              className="inline-block bg-mbh-gold text-mbh-dark hover:bg-mbh-dark hover:text-white px-16 py-6 font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
