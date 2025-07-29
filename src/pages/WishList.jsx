import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
  clearWishlist,
} from "../features/wishlist/wishlistSlicer";
import { addItemToCart, addItemsToCart } from "../features/cart/cartSlice";
import Table from "../components/Table";
import { TableProducts } from "../components/Product";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function WishList() {
  const dispatch = useDispatch();
  const { whishItems, totalQuantity } = useSelector((state) => state.wishlist);
  return (
    <div className="py-10 min-h-[50vh]">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between  flex-wrap gap-5 items-end">
          <div>
            <h1 className="text-2xl font-bold mb-2">Your WishList</h1>
            <p className="mb-4 text-gray-600">
              There are <span className="text-green-600">{totalQuantity} </span>
              products in your WishList
            </p>
          </div>
          <div className="flex gap-5 justify-between w-full">
            <button
              onClick={() => {
                dispatch(addItemsToCart(whishItems));
                dispatch(clearWishlist());
              }}
              className="font-bold text:lg  text-green-600 mb-4 cursor-pointer flex items-center gap-2"
            >
              <ShoppingCartCheckoutIcon fontSize="medium" />
              Add All To Cart
            </button>
            <button
              onClick={() => {
                dispatch(clearWishlist());
              }}
              className="flex gap-1 cursor-pointer mb-4 text-red-500 font-bold"
            >
              <DeleteForeverIcon fontSize="small" />
              Clear Wishlist
            </button>
          </div>
        </div>
        <Table
          titles={[
            "Product",
            "Unit Price",
            "Quantity",
            "Subtotal",
            "Remove / Add",
          ]}
          items={
            <TableProducts
              items={whishItems}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeFrom={removeFromWishlist}
              addItemButton={{
                isEnabled: true,
                dispatch: [addItemToCart, removeFromWishlist],
              }}
            />
          }
        />
      </div>
    </div>
  );
}
