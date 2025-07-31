// IMport React Router
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Benefits from "./components/Benefits";
// Pages

import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Compare from "./pages/Compare";
import WhishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  // Get Products Information

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
        <Route path="/Products" element={<Products />} />
        <Route path={`/Products/:category`} element={<Products />} />
        <Route path={`/Products/:id`} element={<ProductDetails />} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
      {/* End Routes */}
      <NewsLetter />
      <Benefits />
      <Footer />
    </>
  );
}
