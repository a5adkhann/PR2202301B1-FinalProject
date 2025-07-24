import React, { useRef, useState } from 'react'

import axios from 'axios'

const AddCategory = () => {
  const[categoryName , setCategoryName] = useState("");
  const[categoryImage, setCategoryImage] = useState("");
  const fileInputRef = useRef(null);

  const handleCategorySubmission = async(e) =>{
    e.preventDefault();

    try{
    const formData = new FormData();
    formData.append("categoryName" , categoryName);
    formData.append("categoryImage" , categoryImage);

    const response = await axios.post("http://localhost:2000/addCategory", formData);

    console.log(response);

    setCategoryName("");        
    
    if(fileInputRef.current.value){
      fileInputRef.current.value = "";
    } 
  
    }catch(error){
      console.log(error);
    }
    
  }



  return (
    <>
     <form onSubmit={handleCategorySubmission} encType="multipart/form-data">
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>

  <label className="label">Category-Name</label>
  <input type="text" className="input" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>

  <label className="label">Category--Image</label>
  <input type="file" ref={fileInputRef} className="input" onChange={(e) => setCategoryImage(e.target.files[0])}/>
   
 <button className="btn btn-neutral mt-4">Add-category</button>


</fieldset>
     </form>
    </>
  )
}

export default AddCategory
