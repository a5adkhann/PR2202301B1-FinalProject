import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../src/AppLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import DashBoardLayout from './dashboard/components/DashBoardLayout'
import Sidebar from './dashboard/components/Sidebar'
import TopNavbar from './dashboard/components/TopNavbar'
import AddCategory from './dashboard/components/pages/AddCategory'
import ViewCategory from './dashboard/components/pages/ViewCategory'
import AddProduct from './dashboard/components/pages/AddProduct'
import ViewProduct from './dashboard/components/pages/ViewProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import { useState } from 'react'
import Cart from './pages/Cart'

const App = () => {

  const [user, setUser] = useState(localStorage.getItem("user") || "");

  const loginUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser("");
  }

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
        <Route path='/' element={<Home/>}></Route>     
         <Route path='/categories' element={<Categories/>}></Route>
         <Route path='/products' element={<Products/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
        </Route>

      <Route path="dashboard" element={ user ? <DashBoardLayout logoutUser={logoutUser}/> : <Navigate to="/login"/>}>
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="topnavbar" element={<TopNavbar />} />
      <Route path="addcategory" element={<AddCategory />} />
      <Route path="viewcategory" element={<ViewCategory />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="viewproduct" element={<ViewProduct/>} />
     </Route>

       <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login loginUser={loginUser} />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
