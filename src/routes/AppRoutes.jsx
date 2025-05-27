import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<ProductCard />} />

        <Route path="/home" element={<NavBar />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
