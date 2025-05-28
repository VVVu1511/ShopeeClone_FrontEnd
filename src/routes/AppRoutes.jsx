import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import NavBar from "../components/NavBar/NavBar";
import Filter from "../components/Filter/Filter";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Filter />} />

        <Route path="/home" element={<Filter />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
