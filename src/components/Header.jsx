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
// Import Images
import Logo from "../assets/logo.svg";
// Import React
import { useEffect } from "react";
// import React Routes
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.categories);

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
    style
  ) {
    let categoriesJsx = [];
    // Check If The Data AllReady Comes
    if (isLoading || items.length === 0) return null;

    for (let i = 0; i < catCount; i++) {
      if (i == catCount) break;
      categoriesJsx.push(
        <li
          key={items[i].id}
          className={addIcon ? "flex items-center gap-2" : style}
        >
          {addIcon ? (
            <img className="h-7" src={items[i].icon} alt={items[i].name} />
          ) : (
            ""
          )}
          <Link to={`/categories/${items[i].name}`}>{items[i].name}</Link>
        </li>
      );
    }
    return categoriesJsx;
  }

  return (
    <header>
      <div className="container mx-auto px-3">
        {/* Start Top Header */}
        <div className="topHeader py-5 flex justify-between items-center gap-8">
          <Link to={"/Home"}>
            <img className="w-40" src={Logo} alt="Nest Logo" />
          </Link>
          <div className="product-search border border-green-400 p-2 grow rounded-sm flex gap-3">
            <select className="outline-none">
              <option key={1} value="">
                All Category
              </option>
              {!isLoading && !error && categoriesJsx()}
            </select>
            <input
              type="text"
              className="grow text-sm border-none outline-none border-l border-solid border-gray-300 pl-3"
              placeholder="Search for items...."
            />
            <SearchIcon className="text-gray-300" />
          </div>
          <div className="header-actions flex gap-5">
            <Link to="/Compare" className="compare flex items-center relative">
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
              <span className="text-gray-500">Wishlist</span>
            </Link>
            <Link to="/Cart" className="cart flex items-center relative">
              <span className="counter flex justify-center items-center rounded-xl absolute top-[-10px] left-[10px] w-5 h-5 bg-green-500 text-white">
                1
              </span>
              <ShoppingCartCheckoutIcon />
              <span className="text-gray-500">Cart</span>
            </Link>
            <Link to="/MyAccount" className="Account flex items-center">
              <AccountBoxIcon />
              <span className="text-gray-500">Account</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Start Navigation */}
      <nav className="border-y border-gray-200 py-3 ">
        <div className="container mx-auto flex justify-between items-center gap-5 px-3">
          <div className="categories ">
            <button className="cursor-pointer flex items-center gap-2 bg-green-600 text-white py-[8px] px-[10px] rounded-sm hover:bg-green-700 duration-200">
              <DashboardIcon />
              Browse All Categories
              <KeyboardArrowUpIcon />
            </button>
            {/* <ul className="grid grid-rows-2 grid-cols-2 gap-3">
              {ShowCategoriesInNav(undefined, true)}
            </ul> */}
          </div>
          <ul className="flex items-center gap-5 justify-center grow">
            <li className="font-semibold hover:text-green-500 duration-200">
              <Link to={"/Deals"} className="flex items-center">
                <LocalFireDepartmentIcon className="text-green-400" />
                Deals
              </Link>
            </li>
            <li className="text-green-400 font-semibold hover:text-green-500 duration-200">
              <Link to={"/"}>Home</Link>
            </li>

            {ShowCategoriesInNav(
              6,
              false,
              "font-semibold hover:text-green-500 duration-200"
            )}
          </ul>
          <div className="support flex items-center gap-3">
            <SupportAgentIcon fontSize="large" />
            <span className="leading-5 flex items-center flex-col">
              <span className="text-green-400 text-[24px] font-semibold block tracking-wider 	">
              1900 - 888
              </span>
              <span className="text-[14px]">24/7 Support Center</span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
