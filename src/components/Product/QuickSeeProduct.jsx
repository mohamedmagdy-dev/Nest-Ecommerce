import { useRef } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Rating, ProductAction } from "./ProductInfo";

export function QuickSeeProduct({ product, handelClose }) {
  const p = useRef();

  return (
    <div
      ref={p}
      onClick={(e) => (p.current === e.target ? handelClose() : "")}
      className="fixed z-10 top-0 left-0 bg-[#00000070] h-screen w-screen hidden md:block"
    >
      <div
        className={`p-5 absolute z-11 bg-white md:w-[700px] shadow rounded-lg border border-gray-200 top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]`}
      >
        <button
          onClick={() => handelClose()}
          className="w-6 h-6 absolute right-5 top-5 rounded-full flex justify-center items-center duration-200 focus:bg-green-500 hover:bg-green-500 bg-green-400 text-white cursor-pointer"
        >
          <CloseIcon fontSize="small" />
        </button>
        <div className="flex items-center border border-gray-200 rounded-xl mb-5">
          <img
            className="w-[50%]"
            src={`/assets/products/All Products/${product.images[0]}`}
            alt={product.title}
          />
          <img
            className="w-[50%]"
            src={`/assets/products/All Products/${product.images[1]}`}
            alt={product.title}
          />
        </div>
        {/* Product Route */}
        <Link
          to={`/Products/${product.id}/${product.title
            .trim()
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <h3 className="text-[#253d5f] font-bold text-xl ">{product.title}</h3>
        </Link>
        <Rating rate={product.rate} />
        <span className="text-sm text-gray-400 ">
          By <span className="text-green-500">{product.seller}</span>
        </span>
        <p className="text-[#253d5f] font-bold text-lg mt-4">
          {product.description.text}
        </p>
        <ProductAction
          price={product.price}
          oldPrice={product.oldPrice}
          product={product}
        />
      </div>
    </div>
  );
}
