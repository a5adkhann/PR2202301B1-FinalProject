import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Discover Your Style
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Shop the latest trends in fashion, accessories, and more.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
            <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Explore Deals
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;