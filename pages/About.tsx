
import React from 'react';

const About: React.FC = () => {
  const PRIMARY_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="pt-20">
      <div className="bg-mbh-tan py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">The Group</h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-mbh-brown mb-8 leading-none">About the Group</h1>
          <div className="w-24 h-1 bg-mbh-gold"></div>
        </div>
      </div>

      <section className="py-32 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-mbh-brown mb-8">Company Background</h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-10">
                Mokgatle Business Holdings (MBH) serves as the strategic backbone for a diverse portfolio of companies. We provide the governance and foresight required for sustainable growth.
              </p>
              <div className="space-y-6 border-l-2 border-mbh-gold pl-8">
                <p className="text-gray-500 italic">"We don't just own businesses; we build legacies through operational discipline."</p>
              </div>
            </div>
            <div className="relative">
              <img src={PRIMARY_IMAGE} alt="MBH HQ" className="w-full h-[600px] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-mbh-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h3 className="text-mbh-gold font-bold tracking-[0.3em] uppercase text-xs mb-8">Our Mission</h3>
          <p className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Empowering growth through institutional leadership and strategic support.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-mbh-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">Leadership</h2>
          <h3 className="font-serif text-4xl font-bold text-mbh-brown mb-10">Strategy-First Leadership</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            MBH is directed by an executive team focused on long-term alignment and cross-industry innovation. We prioritize strong governance and market positioning above all else.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
