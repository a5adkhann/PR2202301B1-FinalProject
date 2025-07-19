import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState("");


    const handleCategorySubmission = async(e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("categoryName", categoryName);
            formData.append("categoryImage", categoryImage);

            const response = await axios.post("http://localhost:2000/addcategory", formData);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }




    return (
        <>
            <form className='flex justify-center mt-[10%]' onSubmit={handleCategorySubmission} enctype="multipart/form-data">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                <legend className="fieldset-legend">Add Category</legend>

                <label className="label">Name</label>
                <input type="text" className="input w-[100%]" placeholder="Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />

                <label className="label">Image</label>
                <input type="file" className="input w-[100%]" onChange={(e) => setCategoryImage(e.target.files[0])}/>

                <button className="btn btn-neutral mt-4">Add</button>
            </fieldset>
            </form>
        </>
    )
}

export default AddCategory
