// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Compare from "./pages/Compare";
import WhishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
// IMport React Router
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      {/* Start Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/WhishList" element={<WhishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
      {/* End Routes */}
      <Footer />
    </>
  );
}
