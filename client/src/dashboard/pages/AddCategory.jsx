import React from 'react'

const AddCategory = () => {
    return (
        <>
            <form className='flex justify-center mt-[10%]'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                <legend className="fieldset-legend">Add Category</legend>

                <label className="label">Name</label>
                <input type="text" className="input w-[100%]" placeholder="Name" />

                <label className="label">Image</label>
                <input type="file" className="input w-[100%]" />

                <button className="btn btn-neutral mt-4">Add</button>
            </fieldset>
            </form>
        </>
    )
}

export default AddCategory
