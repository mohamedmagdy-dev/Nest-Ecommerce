// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";

// Import Mui
import SearchIcon from "@mui/icons-material/Search";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

// Import Images
import Logo from "../assets/logo.svg";

// Import React
import { useEffect, useState, useRef } from "react";

// import React Routes
import { Link } from "react-router-dom";

// Import Component
import MobileMenu from "./MobileMenu";

export default function Header() {
  // Handel Categories Menu
  const [showCatMenu, setShowCatMenu] = useState(false);
  const categoriesMenu = useRef(null);
  const toggleCatMenuButton = useRef(null);

  // Handel Mobile Menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.categories);
    // Handel CartItems Counter in ui
  const { totalQuantity } = useSelector((state) => state.cart);

  // Create Items
  function categoriesJsx() {
    return items.map((item) => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    });
  }

  // Get Categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Show Some Categories
  function ShowCategoriesInNav(
    catCount = items.length,
    addIcon = false,
    style = ""
  ) {
    let categoriesJsx = [];
    // Check If The Data AllReady Comes
    if (isLoading || items.length === 0) return null;

    for (let i = 0; i < catCount; i++) {
      if (i == catCount) break;
      categoriesJsx.push(
        <li key={items[i].id}>
          <Link
            to={`/categories/${items[i].name}`}
            className={`${style} whitespace-nowrap`}
          >
            {addIcon ? (
              <img className="h-7" src={items[i].icon} alt={items[i].name} />
            ) : (
              ""
            )}
            {items[i].name}
          </Link>
        </li>
      );
    }
    return categoriesJsx;
  }

  // Handel Click OutSide
  useEffect(() => {
    function handelClickOutSide(event) {
      if (
        categoriesMenu.current &&
        !categoriesMenu.current.contains(event.target) &&
        toggleCatMenuButton.current &&
        !toggleCatMenuButton.current.contains(event.target)
      ) {
        setShowCatMenu(false);
      }
    }
    document.addEventListener("mousedown", handelClickOutSide);
    return () => document.removeEventListener("mousedown", handelClickOutSide);
  }, []);

  // Handel Close Mobile Menu
  function closeMobileMenu() {
    setShowMobileMenu(false);
  }



  return (
    <header className="border-b border-gray-200 md:border-none">
      <div className="container mx-auto px-3">
        {/* Start Top Header */}
        <div className="py-5 flex justify-between items-center gap-8">
          {/* Logo */}
          <Link to={"/Home"}>
            <img className="w-40" src={Logo} alt="Nest Logo" />
          </Link>
          {/* Search */}
          <div className="hidden lg:flex border border-green-400 p-2 grow rounded-sm  gap-3">
            <select className="outline-none cursor-pointer ">
              <option key={1} value="">
                All Category
              </option>
              {!isLoading && !error && categoriesJsx()}
            </select>
            <input
              type="text"
              className="grow text-sm outline-none border-l border-gray-300 pl-3"
              placeholder="Search for items...."
            />
            <SearchIcon className="text-gray-300" />
          </div>
          {/* Header Actions */}
          <div className="header-actions flex gap-5 ">
            <Link
              to="/Compare"
              className="compare items-center relative  hidden lg:flex"
            >
              <span className="counter flex justify-center items-center rounded-xl absolute top-[-10px] left-[10px] w-5 h-5 bg-green-500 text-white">
                3
              </span>
              <AlignVerticalCenterIcon />

              <span className="text-gray-500 ">Compare</span>
            </Link>
            <Link
              to="/WhishList"
              className="wishlist flex items-center relative"
            >
              <span className="counter flex justify-center items-center rounded-xl absolute top-[-10px] left-[10px] w-5 h-5 bg-green-500 text-white">
                2
              </span>
              <FavoriteIcon />
              <span className="text-gray-500 hidden lg:flex">Wishlist</span>
            </Link>
            <Link to="/Cart" className="cart flex items-center relative">
              <span className="counter flex justify-center items-center rounded-xl absolute top-[-10px] left-[10px] w-5 h-5 bg-green-500 text-white">
                {totalQuantity}
              </span>
              <ShoppingCartCheckoutIcon />
              <span className="text-gray-500 hidden lg:flex">Cart</span>
            </Link>
            <div className="my-account relative group">
              <Link
                to="/MyAccount"
                className="Account items-center hidden lg:flex "
              >
                <AccountBoxIcon />
                <span className="text-gray-500">Account</span>
              </Link>

              <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-5 transform transition-all duration-300 ease-in-out flex absolute bg-white p-4 w-50 right-0 translate-y-8 z-10 border border-gray-200 rounded flex-col gap-5 shadow">
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm">
                    <AccountBoxIcon fontSize="small" />
                    My Account
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm ">
                    <LocationOnIcon fontSize="small" />
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm">
                    <HomeFilledIcon fontSize="small" />
                    My Voucher
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm">
                    <FavoriteIcon fontSize="small" />
                    My Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm">
                    <SettingsIcon fontSize="small" />
                    Setting
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 duration-200 hover:text-green-500 items-center text-sm">
                    <LoginIcon fontSize="small" />
                    Log in
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setShowMobileMenu((prev) => !prev)}
              className="cursor-pointer lg:hidden"
            >
              <MenuIcon fontSize="large" />
            </button>
            <MobileMenu
              style={
                showMobileMenu ? "translate-x-[0%]" : "translate-x-[-100%]"
              }
              closeFunction={closeMobileMenu}
              links={ShowCategoriesInNav(
                undefined,
                true,
                "flex items-center gap-3 p-3 border border-gray-200 rounded font-bold text-md duration-300 hover:border-green-400 hover:shadow-sm cursor-pointer"
              )}
            />
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="hidden md:block border-y border-gray-200 py-3 ">
        <div className="container mx-auto flex justify-between items-center gap-5 px-3">
          {/* All Categories Button */}
          <div className="hidden lg:block relative">
            <button
              ref={toggleCatMenuButton}
              onClick={() => setShowCatMenu((prev) => !prev)}
              className=" whitespace-nowrap cursor-pointer flex items-center gap-2 bg-green-600 text-white py-[8px] px-[10px] rounded-sm hover:bg-green-700 duration-200"
            >
              <DashboardIcon />
              Browse All Categories
              <KeyboardArrowUpIcon />
            </button>
            <ul
              ref={categoriesMenu}
              className={`
                z-20
                rounded border
                transition-all duration-200 linear
                transform ${
                  showCatMenu
                    ? "opacity-100 translate-y-7"
                    : "opacity-0 translate-y-10"
                }
                ${showCatMenu ? "pointer-events-auto" : "pointer-events-none"}
                shadow-md border-green-600 grid grid-rows-2 grid-cols-2 gap-3 absolute bg-white p-6  min-w-130 
            `}
            >
              {ShowCategoriesInNav(
                undefined,
                true,
                "flex items-center gap-3 p-3 border border-gray-200 rounded font-bold text-md duration-300 hover:border-green-400 hover:shadow-sm cursor-pointer"
              )}
            </ul>
          </div>
          {/* Categories Links */}
          <ul className="flex items-center gap-5 justify-center grow flex-wrap">
            <li className="font-semibold hover:text-green-500 duration-200 ">
              <Link to={"/Deals"} className="flex items-center ">
                <LocalFireDepartmentIcon className="text-green-400" />
                Deals
              </Link>
            </li>
            <li className="text-green-400 font-semibold hover:text-green-500 duration-200">
              <Link to={"/"}>Home</Link>
            </li>

            {ShowCategoriesInNav(
              4,
              false,
              "font-semibold hover:text-green-500 duration-200 "
            )}
          </ul>
          {/* Support Text */}
          <div className="items-center gap-3  hidden lg:flex">
            <SupportAgentIcon fontSize="large" />
            <span className="leading-5 flex items-center flex-col">
              <span className="text-green-400 text-[24px] font-semibold block tracking-wider 	">
                1900 - 888
              </span>
              <span className="text-[14px] whitespace-nowrap">
                24/7 Support Center
              </span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
