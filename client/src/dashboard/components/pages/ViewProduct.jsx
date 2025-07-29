import React, { useState, useEffect } from 'react';
import axios from 'axios';  // 👈 Only once!

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:2000/viewProducts');
      setProducts(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

   const handleDelete =  async(id) => {
    try{
    const response = await axios.delete(`http://localhost:2000/deleteProduct/${id}`);
    console.log(response);
    fetchProducts();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, idx) => (
            <tr key={pro._id}>
              <th>{idx + 1}</th>
              <td>{pro.product_Name}</td>
              <td>{pro.product_Price}</td>
              <td>{pro.product_Category}</td>
              <td>
                {pro.product_Image && (
                  <img
                    src={`http://localhost:2000/uploads/${pro.product_Image}`}
                    alt={pro.product_Name}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </td>
              <td className='flex gap-2'>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error" onClick={() => handleDelete(pro._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;
