import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import DashboardLayout from './dashboard/DashboardLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import AddCategory from './dashboard/pages/AddCategory'
import ViewCategories from './dashboard/pages/ViewCategories'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/categories" element={<Categories/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                </Route>
                <Route path='/dashboard' element={<DashboardLayout/>}>
                    <Route path="addcategory" element={<AddCategory/>}></Route>
                    <Route path="viewcategories" element={<ViewCategories/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
