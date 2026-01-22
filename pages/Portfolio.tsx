
import React from 'react';
import { SUBSIDIARIES } from '../constants';
import { SubsidiaryStatus } from '../types';
import { MBHAutomotiveLogo, MBHHousekeepingLogo, StudioMBHLogo } from '../components/Logos';

const StatusBadge: React.FC<{ status: SubsidiaryStatus }> = ({ status }) => {
  const colors = {
    [SubsidiaryStatus.ACTIVE]: 'bg-green-100 text-green-800',
    [SubsidiaryStatus.LAUNCHING]: 'bg-mbh-gold text-mbh-dark',
    [SubsidiaryStatus.COMING_SOON]: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
};

const getLogoForSub = (name: string) => {
  if (name.includes('Automotive')) return <MBHAutomotiveLogo className="h-10" />;
  if (name.includes('Housekeeping')) return <MBHHousekeepingLogo className="h-10" />;
  if (name.includes('Studio')) return <StudioMBHLogo className="h-10" />;
  return null;
};

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-mbh-tan py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-mbh-gold font-bold tracking-[0.4em] uppercase text-xs mb-6">Investments</h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-mbh-dark mb-10 leading-none">The Portfolio</h1>
          <p className="max-w-2xl text-gray-500 text-xl leading-relaxed">
            A diversified selection of businesses aligned with MBH's institutional vision.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {SUBSIDIARIES.map((sub) => (
              <div key={sub.id} className="group border border-gray-100 flex flex-col md:flex-row overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="md:w-1/2 overflow-hidden">
                  <img 
                    src={sub.imageUrl} 
                    alt={sub.name} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      {getLogoForSub(sub.name) || <div className="font-bold text-mbh-dark text-xl italic underline decoration-mbh-gold decoration-4">MBH</div>}
                      <StatusBadge status={sub.status} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-mbh-dark mb-4">{sub.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {sub.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-8 border-t border-gray-50 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{sub.industry}</span>
                    <button className="text-mbh-dark font-bold text-[10px] uppercase tracking-widest hover:text-mbh-gold transition-colors">Details →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
