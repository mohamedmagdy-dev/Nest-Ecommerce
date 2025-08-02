// IMport React Router
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Benefits from "./components/Benefits";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
// Pages
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Compare from "./pages/Compare";
import WhishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./components/SignUp";
import Page404 from "./pages/Page404";

// SubRoutes In MyAccount Page
import {
  Dashboard,
  MyAddress,
  TrackOrder,
  Orders,
  AccountDetails,
} from "./pages/MyAccount";

// Toaster
import { Toaster } from "react-hot-toast";
export default function App() {
  // Get Products Information

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
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
        <Route path={`/Products/:id/:title`} element={<ProductDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
        {/* Protected Route */}
        <Route
          path="/MyAccount/*"
          element={
            <ProtectedRoutes>
              <MyAccount />
            </ProtectedRoutes>
          }
        >
          <Route
            path="Dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="Orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="TrackOrder"
            element={
              <ProtectedRoutes>
                <TrackOrder />
              </ProtectedRoutes>
            }
          />
          <Route
            path="MyAddress"
            element={
              <ProtectedRoutes>
                <MyAddress />
              </ProtectedRoutes>
            }
          />
          <Route
            path="AccountDetails"
            element={
              <ProtectedRoutes>
                <AccountDetails />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
      {/* End Routes */}
      <NewsLetter />
      <Benefits />
      <Footer />
    </>
  );
}
