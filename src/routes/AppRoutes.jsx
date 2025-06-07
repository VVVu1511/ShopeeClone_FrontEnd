import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";
import Filter from "../components/Filter/Filter";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";
import React from 'react';
import Login from "../components/Login/Login"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Filter />} />

        <Route path="/home" element={<Login />} />

        <Route path = "/test" element={
          
          <>
            {/* <NavBar />
            
            <div className="flex justify-center mb-5">
              <Filter />
              <ProductGrid />
            </div>

            <Footer /> */}

            <Login></Login>
          </>
          
          } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
