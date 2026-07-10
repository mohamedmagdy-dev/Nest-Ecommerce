import {Offer} from "../components/Offers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";
import SectionTitle from "../components/Base_Ui";
export default function Deals() {
  const { offers, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="Deals mt-10">
      <div className="container mx-auto px-3 mb-6">
        <SectionTitle title="All Offer & Deals " />
        <div className=" mt-10 grid min-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 ">
          {!error &&
            !isLoading &&
            offers.map((offer) => {
              return <Offer key={offer.id} offer={offer} />;
            })}
        </div>
      </div>
    </div>
  );
}
