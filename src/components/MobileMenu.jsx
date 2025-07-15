import Logo from "../assets/logo.svg";

// Import Icons mui
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
// React Router
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
  return (
    <div
      className={`mobile-menu p-4 absolute z-30 top-0 left-0 min-h-screen w-screen md:w-fit transform transition-all duration-200 bg-white ${props.style} shadow-lg`}
    >
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 ">
        <img src={Logo} alt="Nest Logo" />
        <button
          onClick={() => props.closeFunction()}
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
        <ul className="flex flex-col gap-5 mb-6">{props.links}</ul>
      </nav>
      <div className="border rounded text-sm border-gray-200 p-4 flex flex-col mb-6 gap-4">
        <Link className="">
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
      <div className="social flex gap-3 mb-6">
        <span className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white">
          <FacebookIcon fontSize="small" />
        </span>
        <span className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white">
          <XIcon fontSize="small" />
        </span>
        <span className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white">
          <InstagramIcon fontSize="small" />
        </span>
        <span className=" w-7 h-7 rounded-full flex justify-center items-center bg-green-500 text-white">
          <YouTubeIcon fontSize="small" />
        </span>
      </div>
      <p className="pb-6">
        Copyright {new Date().getFullYear()} © Nest. All rights reserved.
        Powered by Not Me (:
      </p>
    </div>
  );
}
