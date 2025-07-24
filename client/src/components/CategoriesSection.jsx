import React, { useEffect, useState } from 'react'
import axios from 'axios';


const CategoriesSection = () => {
  
 const[categories , setCategories] = useState([]);
 
  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:2000/viewCategory');
      setCategories(res.data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []); // 


  return (
    <>
    
      <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Shop by Category</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
               src={`http://localhost:2000/uploads/${category.category_Image}`}
              alt={category.category_Name}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <p className="text-black text-4xl font-bold">{category.category_Name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

     
    </>
  )
}

export default CategoriesSection
