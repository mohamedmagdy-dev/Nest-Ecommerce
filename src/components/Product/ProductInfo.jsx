import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { AddToCartButton } from "./ProductButtons";

export function Price({ price, oldPrice }) {
  return (
    <span className="text-green-600 font-bold text-lg">
      ${price}
      {oldPrice && (
        <span className="old-price ml-2 text-del line-through text-gray-400">
          ${oldPrice}
        </span>
      )}
    </span>
  );
}

export function Rating({ rate }) {
  let counter = 1;
  let rates = [];

  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.5;
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
      <span>({rate})</span>
    </div>
  );
}

export function ProductAction({ product, price, oldPrice }) {
  return (
    <div
      className={`action mt-2 flex items-center gap-2 flex-bottom ${
        product.stock > 0 ? "justify-between" : "justify-center"
      }`}
    >
      {product.stock > 0 ? (
        <>
          <Price price={price} oldPrice={oldPrice} />
          <AddToCartButton product={product} />
        </>
      ) : (
        <span className="bg-red-400 text-red-800 font-bold rounded p-1 whitespace-nowrap">
          Out Of Stock
        </span>
      )}
    </div>
  );
}
