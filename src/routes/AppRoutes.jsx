import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";
import Filter from "../components/Filter/Filter";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";
import React from 'react';
import Login from "../components/Login/Login"
import Register from "../components/Register/Register";
import LoginRegisterFrame from "../components/LoginRegisterFrame/LoginRegisterFrame";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={
          <>
            <NavBar />
            
            <div className="flex justify-center mb-5">
              <Filter />
              <ProductGrid />
            </div>

            <Footer />
          </>
          
        } />

        <Route path = "/login" element={
          <>
            <LoginRegisterFrame Component={Login}>
            </LoginRegisterFrame>
          </>
          
          } />

        <Route path = "/register" element={
          <>
            <LoginRegisterFrame Component={Register}>
            </LoginRegisterFrame>
          </>
        } />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
