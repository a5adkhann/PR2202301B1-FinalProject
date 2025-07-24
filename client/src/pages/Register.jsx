import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisteration = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:2000/register", {
                name,
                email, 
                password
            });
            console.log(response);

            setName("");
            setEmail("");
            setPassword("");
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

                    <form className="space-y-4" onSubmit={handleRegisteration}>
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Already have an account?</span>{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
