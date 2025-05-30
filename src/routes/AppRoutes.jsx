import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";
import Filter from "../components/Filter/Filter";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../Footer/Footer";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Filter />} />

        <Route path="/home" element={<Filter />} />

        <Route path = "/test" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
