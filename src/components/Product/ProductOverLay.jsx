import VisibilityIcon from "@mui/icons-material/Visibility";
import { AddToWishListButton, CompareButton } from "./ProductButtons";

export function ProductOverLay({ product, style, showQuickSee }) {
  return (
    <div
      className={`overlay absolute z-3 ${style} flex items-center justify-center bg-white shadow w-30 h-10 border border-green-400 rounded left-[50%] top-[50%] transform translate-[-50%]`}
    >
      <AddToWishListButton
        product={product}
        style="text-green-600 border-r border-r-green-500 px-2"
      />

      <CompareButton
        product={product}
        style="text-green-600 border-r border-r-green-500 px-2"
      />
      <button
        onClick={() => showQuickSee()}
        className="cursor-pointer text-green-600 px-2"
      >
        <VisibilityIcon fontSize="small" />
      </button>
    </div>
  );
}
