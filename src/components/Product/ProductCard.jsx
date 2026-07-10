import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating, ProductAction } from "./ProductInfo";
import { ProductOverLay } from "./ProductOverLay";
import { QuickSeeProduct } from "./QuickSeeProduct";

export default function Product({ product, isSlider }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [showQuickSee, setShowQuickSee] = useState(false);

  let statColor;
  switch (product.stat) {
    case "New":
      statColor = "#3bb77e";
      break;
    case "Sale":
      statColor = "#67bcee";
      break;
    case "Hot":
      statColor = "#f74b81";
      break;
    case "Save":
      statColor = "#f59758";
      break;
    default:
      statColor = "#fff";
  }

  function handelShowQuickSee() {
    setShowQuickSee((prev) => !prev);
  }

  function QuickSee() {
    if (!!showQuickSee && isSlider === false) {
      return (
        <QuickSeeProduct product={product} handelClose={handelShowQuickSee} />
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
      className={`product flex flex-col All group relative justify-between ${product.category} rounded-xl border min-h-full border-gray-300 duration-200 hover:border-green-300 hover:shadow-md p-5`}
    >
      {QuickSee()}

      <span
        className="absolute text-white flex w-15 h-7 items-center justify-center rounded-br-xl rounded-tl-xl top-0 left-0 text-sm z-9"
        style={{ backgroundColor: statColor }}
      >
        {product.stat}
      </span>
      <div className="overflow-hidden relative">
        <img
          src={`/assets/products/All Products/${product.images[0]}`}
          alt={product.title}
          className={`${
            imgIndex === 0 ? "opacity-100" : "opacity-0"
          } duration-500 absolute`}
        />
        <img
          src={`/assets/products/All Products/${product.images[1]}`}
          alt={product.title}
          className={`transform ${
            imgIndex === 1 ? "opacity-100 scale-[110%] " : "opacity-0"
          } duration-500`}
        />
      </div>
      <div className="details">
        <span className="text-sm text-gray-400">{product.category}</span>
        {/* Product Route */}
        <Link
          to={`/Products/${product.id}/${product.title
            .trim()
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <h3 className="text-[#253d5f] font-bold text-lg ">{product.title}</h3>
        </Link>
        <Rating rate={product.rate} />
        <span className="text-sm text-gray-400 ">
          By <span className="text-green-500">{product.seller}</span>
        </span>
        <ProductAction
          price={product.price}
          oldPrice={product.oldPrice}
          product={product}
        />
      </div>
      {!isSlider && (
        <ProductOverLay
          product={product}
          style="opacity-0 group-hover:opacity-100 duration-300"
          showQuickSee={handelShowQuickSee}
        />
      )}
    </div>
  );
}
