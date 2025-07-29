import { ProductAction, Rating, Price } from "./Help-Items";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlicer";
// Mui icon
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function Product({ product }) {
  const [imgIndex, setImgIndex] = useState(0);
  let statColor;
  // Handel Product Color Stat
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

  return (
    <div
      onMouseEnter={() => setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
      className={`product flex flex-col All group relative justify-between ${product.category} rounded-xl border min-h-full border-gray-300 duration-200 hover:border-green-300 hover:shadow-md p-5`}
    >
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
            imgIndex == 0 ? "opacity-100" : "opacity-0"
          } duration-500  absolute  `}
        />
        <img
          src={`/assets/products/All Products/${product.images[1]}`}
          alt={product.title}
          className={`transform ${
            imgIndex == 1 ? "opacity-100 scale-[110%] " : "opacity-0"
          } duration-500 `}
        />
      </div>
      <div className="details">
        <span className="text-sm text-gray-400">{product.category}</span>
        {/* Product Route  */}
        <Link
          to={`/Products/${product.id}/${product.title
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
      <ProductOverLay
        product={product.product}
        style="opacity-0  group-hover:opacity-100 duration-300"
      />
    </div>
  );
}

export function ProductInRow({ product }) {
  return (
    <Link
      to={`/Products/${product.id}/${product.title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="product-in-row flex gap-3 duration-300 transform hover:translate-y-[-10px]">
        <img
          src={`/assets/products/Categoric Products/${product.image}`}
          className="h-20 rounded"
          alt={product.title}
        />
        <div className="info">
          <h3 className="duration-200 hover:text-green-500 font-bold">
            {product.title}
          </h3>
          <Rating rate={product.rate} />
          <Price price={product.price} oldPrice={product.oldPrice} />
        </div>
      </div>
    </Link>
  );
}

export function ProductOverLay(props) {
  const dispatch = useDispatch();

  return (
    <div
      className={`overlay absolute z-10 ${props.style} flex items-center justify-center bg-white shadow w-30 h-12 border border-green-400 rounded left-[50%] top-[50%] transform translate-[-50%]`}
    >
      <button
        onClick={() => dispatch(addToWishlist(props.product))}
        className="cursor-pointer text-green-600 border-r border-r-green-500 px-2"
      >
        <FavoriteIcon fontSize="small" />
      </button>
      <button className="cursor-pointer text-green-600 border-r border-r-green-500 px-2">
        <AlignVerticalCenterIcon fontSize="small" />
      </button>
      <button className="cursor-pointer text-green-600  px-2">
        <VisibilityIcon fontSize="small" />
      </button>
    </div>
  );
}

export function TableProducts(props) {
  const dispatch = useDispatch();
  if (props.items.length > 0) {
    return props.items.map((product) => {
      return (
        <div key={product.id} className="table-row">
          <div className="table-cell border border-gray-300 p-4">
            <div className="flex items-center gap-5 min-w-fit">
              <img
                src={`/assets/products/All Products/${product.images[0]}`}
                alt={product.title}
                className="w-20 h-20 object-cover border rounded-xl border-gray-300"
              />
              <div className="desc text-left">
                <h3 className="font-semibold">{product.title}</h3>
                <Rating rate={product.rate} />
              </div>
            </div>
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            ${product.price}
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => dispatch(props.decreaseQuantity(product))}
                className="bg-red-600 rounded text-white cursor-pointer "
              >
                <RemoveIcon fontSize="small" />
              </button>
              <span className="font-bold">{product.quantity}</span>
              <button
                onClick={() => dispatch(props.increaseQuantity(product))}
                className="bg-green-600 rounded text-white cursor-pointer "
              >
                <AddIcon fontSize="small" />
              </button>
            </div>
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            ${(product.price * product.quantity).toFixed(2)}
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            <button
              onClick={() => dispatch(props.removeFrom(product))}
              className="text-red-500 hover:text-red-700 duration-200 cursor-pointer"
            >
              <DeleteForeverIcon fontSize="medium" />
            </button>

            {!!props.addItemButton.isEnabled && (
              <>
                <span className="px-2">-</span>
                <button
                  onClick={() => {
                    dispatch(props.addItemButton.dispatch[0](product));
                    dispatch(props.addItemButton.dispatch[1](product));
                  }}
                  className="text-green-500   duration-200 ml-2 cursor-pointer"
                >
                  <ShoppingCartCheckoutIcon fontSize="medium" />
                </button>
              </>
            )}
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="table-row">
        <div className="table-cell border border-gray-300 p-4">
          <div className="flex items-center gap-5">
            <div className="desc text-left">No Product Selected ):</div>
          </div>
        </div>

        <div className="table-cell border border-gray-300 p-4 align-middle">
          Empty
        </div>

        <div className="table-cell border border-gray-300 p-4 align-middle">
          Empty
        </div>

        <div className="table-cell border border-gray-300 p-4 align-middle">
          Empty
        </div>

        <div className="table-cell border border-gray-300 p-4 align-middle">
          Empty
        </div>
      </div>
    );
  }
}
