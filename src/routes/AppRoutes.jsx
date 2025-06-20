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
import ProductInformation from "../components/ProductInformation/ProductInformation";
import Cart from "../components/Cart/Cart";

const AppRoutes = () => {
  const [products,setProducts] = useState([]);
  const [token,setToken] = useState("");
  const [cartProducts,setCartProducts] = useState([]);

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
            <LoginRegisterFrame Component={Register} setToken={setToken}>
            </LoginRegisterFrame>
          </>
        } />

        <Route  path="/product_page/product_name/:product_name" 
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

        <Route path = "/product_page/:product_id" element={
            <>
              <NavBar token={token} setProducts={setProducts}/>
              
              <div className="flex justify-center mb-5">
                <ProductInformation cartProducts={cartProducts} setCartProducts={setCartProducts} token={token}/>
              </div>

              <Footer />
            </>
        }
        />

        <Route path ="/cart" element={
            <>
              <NavBar token={token} setProducts={setProducts}/>
              
              
              {/* <Cart cartProducts={cartProducts} token={token}/> */}
              

              <Footer />
            </>
        }
        />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
