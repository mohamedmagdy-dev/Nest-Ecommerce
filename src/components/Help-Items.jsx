import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// Mui Icons
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";

// Handel Add To Cart Button
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ShopButton(props) {
  return (
    <button>
      <Link
        to={`/${props.route}`}
        className="bg-[#3bb77e] font-bold text-white flex justify-between items-center duration-300 gap-1 hover:gap-2 px-4 py-2 rounded"
      >
        Shop Now
        <ArrowRightAltIcon />
      </Link>
    </button>
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
    <div className="rate my-2 flex justify-between items-center">
      <div>{rates}</div>
      <span>({props.rate})</span>
    </div>
  );
}

// ACtion Section In Product
export function ProductAction(props) {
  const dispatch = useDispatch();

  return (
    <div className="action mt-2 flex justify-between items-center ga-2 flex-bottom">
      <Price price={props.price} oldPrice={props.oldPrice} />
      <button
        onClick={() => dispatch(addToCart(props.product))}
        className="cursor-pointer bg-[#def9ec] text-[#3bb79d] rounded p-2 text-sm duration-200 hover:bg-green-600 active:bg-green-600 active:text-white hover:text-white"
      >
        <ShoppingCartIcon fontSize="small" />
        <span className="ml-2">Add</span>
      </button>
    </div>
  );
}

export function Price(props) {
  return (
    <span className="text-green-600 font-bold">
      ${props.price}
      {props.oldPrice && (
        <span className="old-price ml-2 text-del line-through text-gray-400">
          ${props.oldPrice}
        </span>
      )}
    </span>
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
