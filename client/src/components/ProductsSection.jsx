import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ProductsSection = () => {

  const[products , setProducts] = useState([]);

  const fetchProducts = async () =>{
       try{

      const res = await axios.get('http://localhost:2000/viewProducts');
       setProducts(res.data.products)
       }catch(error){
        console.error(err);
       }
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);


  
  return (
   <>
     <div className='py-16 px-6 md:px-20'>
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Latest Collection</h2>
        <div className="products-container md:grid-cols-3 sm:grid-cols-2 gap-20 grid-cols-1 grid">
            {products.map((product) => (
            <div className="product border border-gray-300 shadow-md">
                <div className="product-img">
                    <img src={`http://localhost:2000/uploads/${product.product_Image}`} alt={product.product_Name} />
                </div>
                <div className="product-text p-3">
                    <p>{product.product_Name}</p>
                    <p>{product.product_Price}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
   </>
  )
}

export default ProductsSection
