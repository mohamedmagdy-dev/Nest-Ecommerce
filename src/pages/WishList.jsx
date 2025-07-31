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
import { SectionInfo } from "../components/Base_Ui";

export default function WishList() {
  const { wishItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="py-10 min-h-[50vh]">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between  flex-wrap gap-5 items-end">
          <SectionInfo itemsCount={wishItems.length} sectionName="WishList" />
          <div className="flex gap-5 justify-between w-full">
            <button
              onClick={() => {
                dispatch(addItemsToCart(wishItems));
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
              items={wishItems}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeFrom={removeFromWishlist}
              tableFelidsCount={5}
              tableName="wishlist"
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
