// Mui Icons
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
  // Handel Rating Ui
  function Rating() {
    let counter = 1;
    let rates = [];
    let decimalOnly = props.rate - Math.floor(props.rate);

    for (let i = 1; i <= props.rate; i++) {
      rates.push(
        <StarIcon key={counter} className="text-[#fdc040]" fontSize="small" />
      );
      counter++;
    }

    if (decimalOnly >= 0.5) {
      rates.push(
        <StarHalfIcon
          key={counter}
          className="text-[#fdc040]"
          fontSize="small"
        />
      );
      counter++;
    } else {
      rates.push(
        <StarBorderIcon
          key={counter}
          className="text-gray-400"
          fontSize="small"
        />
      );
      counter++;
    }

    for (let i = 1; i <= props.rate - rates.length; i++) {
      rates.push(
        <StarBorderIcon
          key={counter}
          className="text-gray-400"
          fontSize="small"
        />
      );
      counter++;
    }

    return rates;
  }

  return (
    <div
      onMouseEnter={() => setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
      className={`product flex flex-col All relative justify-between ${props.category} rounded-xl border border-gray-300 duration-200 hover:border-green-300 hover:shadow-md p-5`}
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
        <div className="rate my-2 flex justify-between items-center">
          <div>{<Rating />}</div>
          <span>({props.rate})</span>
        </div>
        <span className="text-sm text-gray-400 ">
          By <span className="text-green-500">{props.seller}</span>
        </span>
        <div className="action mt-2 flex justify-between items-center ga-2 flex-bottom">
          <span className="text-green-600 font-bold">
            ${props.price}
            {props.oldPrice && (
              <span className="old-price ml-2 text-del line-through text-gray-400">
                ${props.oldPrice}
              </span>
            )}
          </span>
          <button className="cursor-pointer bg-[#def9ec] text-[#3bb79d] rounded p-2 text-sm duration-200 hover:bg-green-600 hover:text-white">
            <ShoppingCartIcon fontSize="small" />
            <span className="ml-2">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
