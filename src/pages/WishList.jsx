import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlicer";
export default function WishList() {
  const { whishItems, totalQuantity } = useSelector((state) => state.wishlist);
  return (
    <div className="cart py-10 min-h-[50vh]">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-end flex-wrap">
          <div>
            <h1 className="text-2xl font-bold mb-2">Your Cart</h1>
            <p className="mb-4 text-gray-600">
              There are <span className="text-green-600">{totalQuantity} </span>
              products in your cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
