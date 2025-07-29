import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect } from "react";
import Product from "../components/Product";
import { SectionTitle } from "../components/Filter";
export default function Products() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="products ">
      <div className="container mx-auto px-3 mb-6  mt-10">
        <SectionTitle title="All Products" />

        <div
          className={`products grid min-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 mt-10`}
        >
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
