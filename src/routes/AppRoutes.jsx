import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";
import Filter from "../components/Filter/Filter";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";
import React, { useState } from 'react';
import Login from "../components/Login/Login"
import Register from "../components/Register/Register";
import LoginRegisterFrame from "../components/LoginRegisterFrame/LoginRegisterFrame";

const AppRoutes = () => {
  const [products,setProducts] = useState([]);
  const [token,setToken] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/home" element={
          <>
            <NavBar token={token} setProducts={setProducts}/>
            
            <div className="flex justify-center mb-5">
              <Filter setProducts={setProducts} token={token} />
              <ProductGrid products={products} setProducts={setProducts} token={token}/>
            </div>

            <Footer />
          </>
          
        } />

        <Route path = "/login" element={
          <>
            <LoginRegisterFrame Component={Login} setToken={setToken}>
            </LoginRegisterFrame>
          </>
          
          } />

        <Route path = "/register" element={
          <>
            <LoginRegisterFrame Component={Register}>
            </LoginRegisterFrame>
          </>
        } />

        <Route  path="/product_page/:product_name" 
                element={
          <>
            <NavBar token={token} setProducts={setProducts}/>
              
              <div className="flex justify-center mb-5">
                <Filter setProducts={setProducts} token={token} />
                <ProductGrid products={products} setProducts={setProducts} token={token}/>
              </div>

              <Footer />
          </>
        
        }/>



      </Routes>
    </Router>
  );
};

export default AppRoutes;
