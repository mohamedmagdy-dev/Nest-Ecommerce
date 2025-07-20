import { ProductAction, Rating, Price } from "./Help-Items";

import { useState } from "react";

export default function Product(props) {
  const [imgIndex, setImgIndex] = useState(0);
  let statColor;
  // Handel Product Color Stat
  switch (props.stat) {
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

  return (
    <div
      onMouseEnter={() => setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
      className={`product flex flex-col All relative justify-between ${props.category} rounded-xl border min-h-full border-gray-300 duration-200 hover:border-green-300 hover:shadow-md p-5`}
    >
      <span
        className="absolute text-white flex w-15 h-7 items-center justify-center rounded-br-xl rounded-tl-xl top-0 left-0 text-sm z-10"
        style={{ backgroundColor: statColor }}
      >
        {props.stat}
      </span>
      <div className="overflow-hidden relative">
        <img
          src={`/assets/products/All Products/${props.images[0]}`}
          alt={props.title}
          className={`${
            imgIndex == 0 ? "opacity-100" : "opacity-0"
          } duration-500  absolute`}
        />
        <img
          src={`/assets/products/All Products/${props.images[1]}`}
          alt={props.title}
          className={`transform ${
            imgIndex == 1 ? "opacity-100 scale-[110%] " : "opacity-0"
          } duration-500`}
        />
      </div>
      <div className="details">
        <span className="text-sm text-gray-400">{props.category}</span>
        <h3 className="text-[#253d5f] font-bold text-lg ">{props.title}</h3>
        <Rating rate={props.rate} />
        <span className="text-sm text-gray-400 ">
          By <span className="text-green-500">{props.seller}</span>
        </span>
        <ProductAction price={props.price} oldPrice={props.oldPrice} />
      </div>
    </div>
  );
}

export function ProductInRow(props) {
  return (
    <div className="product-in-row flex gap-3 duration-300 transform hover:translate-y-[-10px]">
      <img src={`/assets/products/Categoric Products/${props.img}`} className="h-20 rounded" alt={props.title} />
      <div className="info">
        <h3 className="duration-200 hover:text-green-500 font-bold">{props.title}</h3>
        <Rating rate={props.rate} />
        <Price price={props.price} oldPrice={props.oldPrice} />
      </div>
    </div>
  );
}
