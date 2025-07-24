import React, { useRef, useState } from 'react'
import axios from 'axios';

const AddProduct = () => {
 const [productName , setProductName] = useState("");
    const [productPrice , setProductPrice] = useState("");
    const [productImage , setProductImage] = useState("");
    const fileInputRef = useRef(null);


  const handleProductSubmission = async(e) =>{
    e.preventDefault();

    try{
    const formData = new FormData();
    formData.append("productName" , productName);
    formData.append("productPrice" , productPrice);
    formData.append("productImage" , productImage);

    const response = await axios.post("http://localhost:2000/addProduct", formData);

    console.log(response);

    setProductName("");        
    setProductPrice("");
    setProductImage(""); 

    if(fileInputRef.current.value){
      fileInputRef.current.value = "";
    }

    
    }catch(error){
      console.log(error);
    }
    
  }




  return (
     <>
   <form onSubmit={handleProductSubmission} encType="multipart/form-data">
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>

  <label className="label">Producct-Name</label>
  <input type="text" className="input" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)}/>

<label className="label">Product-Price</label>
  <input type="number" className="input" placeholder="Product Name" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>


  <label className="label">Product-Image</label>
  <input type="file" ref={fileInputRef} className="input" onChange={(e) => setProductImage(e.target.files[0])}/>
   
 <button className="btn btn-neutral mt-4">Add-Product</button>


</fieldset>
     </form>
    </>

  )
}

export default AddProduct
