import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
  clearCart,
} from "../features/cart/cartSlice";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DiscountIcon from "@mui/icons-material/Discount";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useState } from "react";
import Table from "../components/Table";
import { TableProducts } from "../components/Product";
import { SectionInfo } from "../components/Base_Ui";
import toast from "react-hot-toast";

const coupons = [
  { code: "MEGO10", discount: 10 },
  { code: "SUMMER20", discount: 20 },
  { code: "DUCK20", discount: 90 },
];

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, coupon, discount } = useSelector(
    (state) => state.cart
  );

  // Handel Coupons Logic
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [msg, SetMsg] = useState("");

  function checkCoupon() {
    const found = coupons.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (totalPrice < 1) {
      SetMsg("Pls Select Some item First");
    } else {
      if (couponInput.trim().length < 1) {
        SetMsg("Pls Enter Coupon");
      } else {
        if (found) {
          setCouponApplied(true);
          SetMsg("Coupon Applied");
          dispatch(applyCoupon(found));
          toast.success("Coupon Applied");
        } else {
          setCouponApplied(false);
          SetMsg("Coupon Not Valid");
          toast.error("Coupon NotValid");
        }
      }
    }
  }

  function changeCoupon() {
    if (totalPrice < 1) {
      SetMsg("Pls Select Some item First");
    } else {
      dispatch(applyCoupon({ code: "", discount: 0 }));
      setCouponInput("");
      SetMsg("Enter New Coupon");
      setCouponApplied(false);
    }
  }

  return (
    <div className="cart py-10 min-h-[50vh]">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-end flex-wrap">
          <SectionInfo itemsCount={cartItems.length} sectionName="Cart" />

          <button
            onClick={() => dispatch(clearCart())}
            className="flex gap-1 cursor-pointer mb-4 text-red-500 font-bold"
          >
            <DeleteForeverIcon fontSize="small" />
            Clear Cart
          </button>
        </div>
        <div className="flex justify-between gap-10 items-start flex-wrap min-xl:flex-nowrap">
          <Table
            titles={["Product", "Unit Price", "Quantity", "Subtotal", "Remove"]}
            items={
              <TableProducts
                items={cartItems}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeFrom={removeFromCart}
                addItemButton={{ isEnabled: false }}
                tableFelidsCount={5}
                tableName="cart"
              />
            }
          />
          <div className="w-full lg:w-[500px]">
            <div className="checkout shadow-md rounded-xl p-5 ">
              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">Shipping</span>
                <span className="font-bold text-[#253e4f] text-xl">Free</span>
              </div>
              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">Estimate for</span>
                <span className="font-bold text-[#253e4f] text-xl">
                  United Kingdom
                </span>
              </div>
              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">Coupon</span>
                <span className="font-bold text-[#253e4f] text-xl">
                  {coupon ? coupon : "-"}
                </span>
              </div>
              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">Discount</span>
                <span className="font-bold text-[#253e4f] text-xl">
                  -${discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">
                  Total Before Discount
                </span>
                <span className="font-bold text-green-600 text-xl">
                  ${Math.max(totalPrice, 0).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center gap-3 border-b border-b-gray-200 py-3">
                <span className="font-bold text-gray-400">Total</span>
                <span className="font-bold text-green-600 text-xl">
                  ${Math.max(totalPrice - discount, 0).toFixed(2)}
                </span>
              </div>
              <button className="bg-green-600 w-full p-2 rounded cursor-pointer text-white font-bold text-sm my-3">
                Proceed To CheckOut
                <ShoppingCartCheckoutIcon
                  className="ml-[5px]"
                  fontSize="small"
                />
              </button>
            </div>
            <div className="coupon shadow-md rounded-xl p-5 mt-5 ">
              <h3 className="text-2xl font-bold mb-2">Apply Coupon</h3>
              <p className="mb-4 text-gray-600">Using A Promo Code?</p>
              <p
                className="mb-2"
                style={{ color: couponApplied ? "green" : "red" }}
              >
                {msg}
              </p>
              <div>
                <div className="flex gap-2 justify-between ">
                  <input
                    onChange={(e) => setCouponInput(e.target.value)}
                    type="text"
                    value={couponInput}
                    disabled={couponApplied}
                    placeholder="Enter Your Coupon"
                    className="w-full border border-gray-300 pl-3 p-2  outline-none rounded"
                  />
                  <button
                    onClick={() => changeCoupon()}
                    className="bg-green-600 rounded p-2 text-white cursor-pointer "
                  >
                    <ChangeCircleIcon fontSize="medium" />
                  </button>
                </div>
                <button
                  onClick={checkCoupon}
                  disabled={couponApplied}
                  className="bg-green-600 w-full p-2 rounded cursor-pointer text-white font-bold text-sm my-3"
                >
                  Apply
                  <DiscountIcon fontSize="small" className="ml-[5px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
