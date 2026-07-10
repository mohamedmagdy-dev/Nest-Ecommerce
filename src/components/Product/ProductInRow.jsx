import { Link } from "react-router-dom";
import { Rating, Price } from "./ProductInfo";

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
