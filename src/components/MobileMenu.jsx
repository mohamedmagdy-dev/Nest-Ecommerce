// Import Image
import Logo from "../assets/logo.svg";
// Import Component
import Social from "./Social";
// Import Icons mui
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

// React Router
import { Link } from "react-router-dom";

// Import React
import { useEffect } from "react";

export default function MobileMenu({ style, closeFunction, links }) {
  // Too stop Scroll The Page when Menu Opened
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (style.includes("translate-x-[0%]") && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [style]);

  return (
    <div
      className={`lg:hidden mobile-menu overflow-y-scroll p-4 fixed z-50 top-0 left-0 h-screen w-screen md:w-fit transform transition-all duration-200 bg-white ${style} shadow-lg`}
    >
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 ">
        <img src={Logo} alt="Nest Logo" />
        <button
          onClick={() => closeFunction()}
          className="w-6 h-6 rounded-full flex justify-center items-center bg-green-400 text-white cursor-pointer"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>
      <div className="flex justify-between border border-gray-200 bg-gray-200 text-[#253D4E] font-bold p-2 grow rounded-sm my-6 gap-3">
        <input
          type="text"
          className="text-sm outline-none "
          placeholder="Search for items...."
        />
        <SearchIcon className="text-gray-300" />
      </div>
      <nav>
        <ul className="flex flex-col gap-5 mb-6">{links}</ul>
      </nav>
      <div className="border rounded text-sm border-gray-200 p-4 flex flex-col mb-6 gap-4">
        <Link onClick={() => closeFunction()} to={"/Account"}>
          <AccountBoxIcon fontSize="small" className="mr-2 text-green-500" />
          My Account
        </Link>
      </div>
      <div className="border rounded text-sm border-gray-200 p-4 flex flex-col mb-6 gap-4">
        <Link>
          <LocationOnIcon fontSize="small" className="mr-2 text-green-500" />
          Our Location
        </Link>
        <Link>
          <PersonIcon fontSize="small" className="mr-2 text-green-500" />
          Log In / Sign Up
        </Link>
        <a href="tel:(+01) - 2345 - 6789 ">
          <LocalPhoneIcon fontSize="small" className="mr-2 text-green-500" />
          (+01) - 2345 - 6789
        </a>
      </div>
      <Social style="mb-6" />
      <p className="pb-6">
        Copyright {new Date().getFullYear()} © Nest. All rights reserved.
        Powered by Not Me (:
      </p>
    </div>
  );
}
