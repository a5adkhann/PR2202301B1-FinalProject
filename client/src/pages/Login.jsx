import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({loginUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:2000/login", {
                email,
                password
            })
            console.log(response);
            loginUser(response.data.registeredUser);

            setEmail("");
            setPassword("");
            navigate("/dashboard");
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

                    <form className="space-y-4" onSubmit={handleLogin}>
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
                            Login
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Don't have an account?</span>{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login
