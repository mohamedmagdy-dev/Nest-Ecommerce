import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlicer";
import { addToCompare } from "../features/compare/compareSlice";
import { addItemToCart } from "../features/cart/cartSlice";

// Mui icon
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

import { StockState } from "./Base_Ui";

// Toaster
import toast from "react-hot-toast";
export default function Product({ product, isSlider }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [showQuickSee, setShowQuickSee] = useState(false);

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

  function handelShowQuickSee() {
    setShowQuickSee((prev) => !prev);
  }

  function QuickSee() {
    if (!!showQuickSee && isSlider == false) {
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

export function ProductInRow({ product }) {
  return (
    <Link
      to={`/Products/${product.id}/${product.title
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="product-in-row flex gap-3 duration-300 transform hover:translate-y-[-10px]">
        <img
          src={`/assets/products/Categoric Products/${product.image}`}
          className="h-20 rounded"
          alt={product.title}
        />
        <div className="info ">
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
  return (
    <div
      className={`overlay absolute z-3 ${props.style} flex items-center justify-center bg-white shadow w-30 h-10 border border-green-400 rounded left-[50%] top-[50%] transform translate-[-50%]`}
    >
      <AddToWishListButton
        product={props.product}
        style="text-green-600 border-r border-r-green-500 px-2"
      />

      <CompareButton
        product={props.product}
        style="text-green-600 border-r border-r-green-500 px-2"
      />
      <button
        onClick={() => props.showQuickSee()}
        className="cursor-pointer text-green-600  px-2"
      >
        <VisibilityIcon fontSize="small" />
      </button>
    </div>
  );
}

export function AddToWishListButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToWishlist(props.product));
        toast.success("Added to wishlist!");
      }}
      className={`cursor-pointer ${props.style}`}
    >
      <FavoriteIcon fontSize="small" />
    </button>
  );
}

export function CompareButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToCompare(props.product));
        toast.success("Added to compare!");
      }}
      className={`cursor-pointer ${props.style}`}
    >
      <AlignVerticalCenterIcon fontSize="small" />
    </button>
  );
}

export function TableProducts(props) {
  const dispatch = useDispatch();
  function EmptyCells() {
    const emptyCells = [];

    for (let i = 0; i < props.tableFelidsCount - 1; i++) {
      const Item = (
        <div
          key={i}
          className="table-cell border border-gray-300 p-4  align-middle"
        >
          Empty
        </div>
      );
      emptyCells.push(Item);
    }
    return emptyCells;
  }
  if (props.items.length > 0 && props.tableName !== "compare") {
    return props.items.map((product) => {
      return (
        <div key={product.id} className="table-row ">
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
  } else if (props.items.length > 0 && props.tableName == "compare") {
    return props.items.map((product) => {
      return (
        <div key={product.id} className="table-row">
          <div className="table-cell border border-gray-300 min-w-50 p-4 align-middle">
            <img
              src={`/assets/products/All Products/${product.images[0]}`}
              alt={product.title}
              className="w-40 h-40 object-cover border rounded-xl border-gray-300"
            />
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            <h3 className="font-semibold whitespace-nowrap">{product.title}</h3>
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            ${product.price}
          </div>
          <div className="table-cell border border-gray-300 p-4 align-middle w-fit">
            <Rating rate={product.rate} />
          </div>

          <div className="table-cell border border-gray-300 p-4 min-w-50 align-middle">
            <p>{product.description.text}</p>
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            <StockState stock={product.stock} />
          </div>

          <div className="table-cell border border-gray-300 p-4 min-w-40 align-middle">
            {product.description.size} Gram
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            {product.description.dimensions}
          </div>

          <div className="table-cell border border-gray-300 p-4 align-middle">
            {product.stock > 0 ? <AddToCartButton product={product} /> : "-"}
          </div>
          <div className="table-cell border border-gray-300 p-4 align-middle">
            <button
              onClick={() => dispatch(props.removeFrom(product))}
              className="text-red-500 hover:text-red-700 duration-200 cursor-pointer"
            >
              <DeleteForeverIcon fontSize="medium" />
            </button>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="table-row">
        <div className="table-cell border border-gray-300 p-4">
          <div className="flex items-center gap-5">
            <div className="desc text-left whitespace-nowrap">
              No Product Selected ):
            </div>
          </div>
        </div>
        {EmptyCells()}
      </div>
    );
  }
}

export function Price(props) {
  return (
    <span className="text-green-600 font-bold text-lg">
      ${props.price}
      {props.oldPrice && (
        <span className="old-price ml-2 text-del  line-through text-gray-400">
          ${props.oldPrice}
        </span>
      )}
    </span>
  );
}

// Handel Rating Ui
export function Rating(props) {
  let counter = 1;
  let rates = [];

  const fullStars = Math.floor(props.rate);
  const hasHalfStar = props.rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    rates.push(
      <StarIcon key={counter} className="text-[#fdc040]" fontSize="small" />
    );
    counter++;
  }

  if (hasHalfStar) {
    rates.push(
      <StarHalfIcon key={counter} className="text-[#fdc040]" fontSize="small" />
    );
    counter++;
  }

  for (let i = 0; i < emptyStars; i++) {
    rates.push(
      <StarBorderIcon
        key={counter}
        className="text-gray-400"
        fontSize="small"
      />
    );
    counter++;
  }

  return (
    <div className="rate my-2 flex gap-5 items-center ">
      <div className="flex">{rates}</div>
      <span>({props.rate})</span>
    </div>
  );
}

// ACtion Section In Product
export function ProductAction(props) {
  return (
    <div
      className={`action mt-2 flex  items-center gap-2 flex-bottom ${
        props.product.stock > 0 ? "justify-between" : "justify-center"
      }`}
    >
      {props.product.stock > 0 ? (
        <>
          <Price price={props.price} oldPrice={props.oldPrice} />
          <AddToCartButton product={props.product} />
        </>
      ) : (
        <span className="bg-red-400 text-red-800 font-bold rounded p-1 whitespace-nowrap">
          Out Of Stock
        </span>
      )}
    </div>
  );
}

export function AddToCartButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addItemToCart(props.product));
        toast.success("Added to cart!");
      }}
      className="cursor-pointer whitespace-nowrap bg-[#def9ec] text-[#3bb79d] rounded p-2 text-sm duration-200 hover:bg-green-600 active:bg-green-600 active:text-white hover:text-white"
    >
      <ShoppingCartIcon fontSize="small" />
      <span className="ml-2">{props.title || "Add"}</span>
    </button>
  );
}

export function QuickSeeProduct({ product, handelClose }) {
  const p = useRef();

  return (
    <div
      ref={p}
      onClick={(e) => (p.current == e.target ? handelClose() : "")}
      className="fixed z-10 top-0 left-0 bg-[#00000070] h-screen w-screen hidden md:block"
    >
      <div
        className={` p-5 absolute z-11 bg-white   md:w-[700px] shadow rounded-lg border border-gray-200 top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]  `}
      >
        <button
          onClick={() => handelClose()}
          className="w-6 h-6 absolute right-5 top-5 rounded-full flex justify-center items-center duration-200 focus:bg-green-500 hover:bg-green-500 bg-green-400 text-white cursor-pointer"
        >
          <CloseIcon fontSize="small" />
        </button>
        <div className="flex items-center border border-gray-200 rounded-xl mb-5">
          <img
            className="w-[50%] "
            src={`/assets/products/All Products/${product.images[0]}`}
            alt={product.title}
          />
          <img
            className="w-[50%]"
            src={`/assets/products/All Products/${product.images[1]}`}
            alt={product.title}
          />
        </div>
        {/* Product Route  */}
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
