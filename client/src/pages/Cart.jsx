import React, { useContext } from 'react'
import { cartContext } from '../components/CartContext';

const Cart = () => {
    const {cart} = useContext(cartContext);

    const {removeFromCart} = useContext(cartContext);

    return (
        <>
            <div className='my-20'>
                <div className="overflow-x-auto mx-auto rounded-box border w-[40%] border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((c, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{c.product_Name}</td>
                                <td>{c.product_Price}</td>
                                <td>
                                    <img src={`http://localhost:2000/uploads/${c.product_Image}`} width={100} alt="" />
                                </td>
                                <td>
                                    <button className="btn btn-soft btn-error" onClick={() => removeFromCart(c._id)}>Remove</button>
                                </td>
                            </tr>
                            ))}
                     
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart
