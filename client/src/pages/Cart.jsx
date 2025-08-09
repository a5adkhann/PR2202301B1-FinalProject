import React, { useContext } from 'react'
import { cartContext } from '../components/CartContext';
import axios from 'axios'

const Cart = () => {
    const {cart} = useContext(cartContext);

    const {removeFromCart} = useContext(cartContext);

    const handleOrderSubmission = async() => {
        try{
            const orders = {
                pName : cart.product_Name,
                pPrice : cart.product_Price,
                pQuantity : cart.quantity,
                total_amount : cart.product_Price * cart.quantity
            }

            const response = await axios.post("http://localhost:2000/neworder", { orders });
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

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
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((c, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{c.product_Name}</td>
                                <td>${c.product_Price}</td>
                                <td>{c.quantity}</td>
                                <td>
                                    <img src={`http://localhost:2000/uploads/${c.product_Image}`} width={100} alt="" />
                                </td>
                                <td>
                                    ${c.product_Price * c.quantity}
                                </td>
                                <td>
                                    <button className="btn btn-soft btn-error" onClick={() => removeFromCart(c._id)}>Remove</button>
                                </td>
                            </tr>
                            ))}
                     
                        </tbody>
                    </table>
                </div>

            <div className='flex justify-center mt-3'>
            <button onClick={handleOrderSubmission} className="border px-20 py-2 font-bold bg-gray-400 text-white">Checkout</button>
            </div>
            </div>
        </>
    )
}

export default Cart
