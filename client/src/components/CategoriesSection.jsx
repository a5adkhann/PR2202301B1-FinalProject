import React from 'react';

const CategoriesSection = () => {
  const categoryData = [
    {
      id: 1,
      category_name: 'Men',
      category_image: 'https://themewagon.github.io/cozastore/images/banner-02.jpg',
    },
    {
      id: 2,
      category_name: 'Women',
      category_image: 'https://themewagon.github.io/cozastore/images/banner-01.jpg',
    },
    {
      id: 3,
      category_name: 'Accessories',
      category_image: 'https://themewagon.github.io/cozastore/images/banner-03.jpg',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Shop by Category</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={category.category_image}
              alt={category.category_name}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <p className="text-black text-4xl font-bold">{category.category_name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
