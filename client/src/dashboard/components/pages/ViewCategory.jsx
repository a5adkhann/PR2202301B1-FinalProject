import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'; 

const ViewCategory = () => {

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

 const handleDelete =  async(id) => {
    try{
    const response = await axios.delete(`http://localhost:2000/deleteCategory/${id}`);
    console.log(response);
    fetchCategories();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
   <>
   
   <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
        <th>Action</th>
     
      </tr>
    </thead>
    <tbody>
     {categories.map((cat, idx) => (
            <tr key={cat._id}>
              <th>{idx + 1}</th>
              <td>{cat.category_Name}</td>
              <td>
                {cat.category_Image && (
                  <img
                    src={`http://localhost:2000/uploads/${cat.category_Image}`}
                    alt={cat.category_Name}
                    style={{ width: 50, height: 50 }}
                  />
                )}
              </td>
            <td className='flex gap-2'>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error" onClick={() => handleDelete(cat._id)}>Delete</button>
              </td>
            </tr>
          ))}
  
    </tbody>
  </table>
</div>

   
   </>
  )
}

export default ViewCategory
