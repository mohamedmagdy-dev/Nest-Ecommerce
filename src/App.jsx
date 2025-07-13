// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Compare from "./pages/Compare";
import WhishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import { Route, Routes } from "react-router-dom";

// IMport React Router
export default function App() {
  return (
    < >
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
      {/* <Footer /> */}
    </>
  );
}
