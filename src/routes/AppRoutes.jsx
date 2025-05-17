import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Container from "../components/Container";
// import Modal from "../components/Modal";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <>
            <Home />
            
            {/* <Header />

            <Container />

            <Footer />

            <Modal /> */}
          </>
          } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
