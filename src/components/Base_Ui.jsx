import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// Mui Icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmailIcon from "@mui/icons-material/Email";

import LoaderGif from "../assets/loading.gif";

export default function SectionTitle({ title }) {
  return (
    <h2 className="font-bold text-2xl sm:text-4xl  text-[#253d4e]">{title}</h2>
  );
}

export function Filter({ filterCategories, getFilterBy }) {
  return (
    <ul className="flex gap-4 flex-wrap whitespace-nowrap items-center ">
      {filterCategories.map((category, index) => {
        return (
          <li
            key={index}
            onClick={() => getFilterBy(category)}
            className="cursor-pointer font-bold duration-200 hover:text-green-500"
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export function EmailInput() {
  return (
    <div
      className={`mt-6 bg-white rounded-full flex max-sm:mx-auto w-fit justify-between gap-2 items-center max-[410px]:hidden`}
    >
      <EmailIcon fontSize="small" className="text-gray-500 ml-5" />
      <input
        type="text"
        className="text-gray-500 grow outline-none font-bold   "
        placeholder="Your Email Address"
      />
      <button className="font-bold text-sm text-white rounded-full cursor-pointer bg-[#3bb77e] px-5 py-4 ">
        Subscribe
      </button>
    </div>
  );
}

export function ShopButton(props) {
  return (
    <button>
      <Link
        to={`/Products${props.route || ""}`}
        className={`bg-[#3bb77e] font-bold text-white flex justify-between items-center duration-300 gap-1 hover:gap-2 px-4 py-2 rounded `}
      >
        {props.title}
        <ArrowRightAltIcon />
      </Link>
    </button>
  );
}

export function Loader(props) {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Make A Delay For Loader
  useEffect(() => {
    setShowLoader(true);
    setFadeOut(false);

    setFadeOut(true);
    const handle = setTimeout(() => {
      setShowLoader(false);
    }, 1500); //
    return () => clearTimeout(handle);
  }, [props.isLoading]);
  return (
    <>
      {!!showLoader && (
        <div
          className={`loader fixed z-11  bg-white h-screen w-full top-0 left-0 flex items-center justify-center select-none transition-opacity duration-1500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img src={LoaderGif} alt="Loader " className="pointer-events-none" />
        </div>
      )}
    </>
  );
}

export function SectionInfo(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 capitalize">
        {props.sectionName}
      </h1>
      <p className="mb-4 text-gray-600">
        There are <span className="text-green-600">{props.itemsCount} </span>
        products
      </p>
    </div>
  );
}

export function StockState(prop) {
  return prop.stock > 0 ? (
    <span className="bg-green-200 text-green-600 font-bold text-sm rounded p-2  whitespace-nowrap">
      In Stock
    </span>
  ) : (
    <span className="bg-red-400 text-red-800 font-bold rounded p-1 whitespace-nowrap">
      Out Of Stock
    </span>
  );
}

export function SortBy(props) {
  const [sorter, setSorter] = useState("");
  return (
    <select
      className="shadow-md p-2 rounded border border-gray-200 outline-none cursor-pointer"
      value={sorter}
      onChange={(e) => {
        setSorter(e.target.value);
        props.getSorter(e.target.value);
      }}
    >
      <option value="">Select Sorter</option>
      <option value="low-price">Price: Low To High</option>
      <option value="high-price">Price: High To Low</option>
      <option value="avg-rating">Avg: Rating</option>
    </select>
  );
}

export function ShowItemInPage(props) {
  const [pageItemsCount, setPageItemsCount] = useState(15);

  return (
    <select
      className="shadow-md p-2 rounded border border-gray-200 outline-none cursor-pointer"
      value={pageItemsCount}
      onChange={(e) => {
        setPageItemsCount(parseInt(e.target.value));
        props.getItemsPerPage(parseInt(e.target.value));
      }}
    >
      <option value="15">Show: 15 </option>
      <option value="20">Show: 20 </option>
      <option value="30">Show: 30 </option>
      <option value="40">Show: 40 </option>
      <option value="50">Show: 50 </option>
    </select>
  );
}
