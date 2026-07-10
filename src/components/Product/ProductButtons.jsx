import { useDispatch } from "react-redux";
import { addToWishlist } from "../../features/wishlist/wishlistSlicer";
import { addToCompare } from "../../features/compare/compareSlice";
import { addItemToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

import FavoriteIcon from "@mui/icons-material/Favorite";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function AddToWishListButton({ product, style }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToWishlist(product));
        toast.success("Added to wishlist!");
      }}
      className={`cursor-pointer ${style}`}
    >
      <FavoriteIcon fontSize="small" />
    </button>
  );
}

export function CompareButton({ product, style }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToCompare(product));
        toast.success("Added to compare!");
      }}
      className={`cursor-pointer ${style}`}
    >
      <AlignVerticalCenterIcon fontSize="small" />
    </button>
  );
}

export function AddToCartButton({ product, title }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addItemToCart(product));
        toast.success("Added to cart!");
      }}
      className="cursor-pointer whitespace-nowrap bg-[#def9ec] text-[#3bb79d] rounded p-2 text-sm duration-200 hover:bg-green-600 active:bg-green-600 active:text-white hover:text-white"
    >
      <ShoppingCartIcon fontSize="small" />
      <span className="ml-2">{title || "Add"}</span>
    </button>
  );
}
