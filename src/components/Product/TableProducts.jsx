import { useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { StockState } from "../Base_Ui";
import { Rating } from "./ProductInfo";
import { AddToCartButton } from "./ProductButtons";

export function TableProducts(props) {
  const dispatch = useDispatch();

  function EmptyCells() {
    const emptyCells = [];
    for (let i = 0; i < props.tableFelidsCount - 1; i++) {
      const Item = (
        <div
          key={i}
          className="table-cell border border-gray-300 p-4 align-middle"
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
                className="bg-red-600 rounded text-white cursor-pointer"
              >
                <RemoveIcon fontSize="small" />
              </button>
              <span className="font-bold">{product.quantity}</span>
              <button
                onClick={() => dispatch(props.increaseQuantity(product))}
                className="bg-green-600 rounded text-white cursor-pointer"
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

            {!!props.addItemButton?.isEnabled && (
              <>
                <span className="px-2">-</span>
                <button
                  onClick={() => {
                    dispatch(props.addItemButton.dispatch[0](product));
                    dispatch(props.addItemButton.dispatch[1](product));
                  }}
                  className="text-green-500 duration-200 ml-2 cursor-pointer"
                >
                  <ShoppingCartCheckoutIcon fontSize="medium" />
                </button>
              </>
            )}
          </div>
        </div>
      );
    });
  } else if (props.items.length > 0 && props.tableName === "compare") {
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
