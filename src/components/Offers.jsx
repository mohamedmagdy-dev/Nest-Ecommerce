import { useEffect, useState } from "react";
import { Rating, ProductAction } from "./Product";
import { Link } from "react-router-dom";
import SectionTitle from "./Base_Ui";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
// Import Mui Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function Offers() {
  const { offers, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="deal-of-day mt-10">
      <div className="flex justify-between gap-5 items-center">
        <SectionTitle title="Deals Of The Day" />
        <Link
          to={"/Deals"}
          className="font-semibold text-gray-400 duration-200 hover:text-green-400"
        >
          All Deals <ChevronRightIcon fontSize="small" />
        </Link>
      </div>
      <div className="mt-10 grid min-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 ">
        {!error &&
          !isLoading &&
          offers.slice(0, 4).map((offer) => {
            return <Offer key={offer.id} offer={offer} />;
          })}
      </div>
    </div>
  );
}

export function Offer(props) {
  const startDate = new Date(props.offer.startOn);
  const expiryDate = new Date(startDate);
  expiryDate.setDate(startDate.getDate() + props.offer.expiresInDays);
  const [offerEnd, setOfferEnd] = useState(false);
  const [time, setTime] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let intervalHandel;

    if (props.offer.isOfferOn) {
      intervalHandel = setInterval(() => {
        const now = new Date();
        const timeDiffMs = expiryDate - now;
        const days = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiffMs / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiffMs / 1000) % 60);
        setTime([days, hours, minutes, seconds]);
        if (timeDiffMs <= 0) {
          setOfferEnd(true);
          clearInterval(intervalHandel);
        }
      }, 1000);
    } else {
      const now = new Date();
      const timeDiffMs = expiryDate - now;
      const days = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiffMs / 1000) % 60);
      setTime([days, hours, minutes, seconds]);
      setOfferEnd(true);
    }
    return () => {
      return clearInterval(intervalHandel);
    };
  }, []);

  function ShowProductAction() {
    if (offerEnd) {
      return (
        <div className="mt-2 w-fit mx-auto text-center bg-red-400 text-red-800 font-bold rounded p-2 whitespace-nowrap">
          Offer Closed
        </div>
      );
    } else if (props.offer.isOfferOn && offerEnd == false) {
      return (
        <ProductAction
          price={props.offer.price}
          oldPrice={props.offer.oldPrice}
          product={props.offer}
        />
      );
    }
  }

  return (
    <div
      className="offer p-5 rounded-xl mb-30"
      style={{
        background: `url(${props.offer.bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="timer flex justify-center  gap-5 mb-5 transform translate-y-30">
        <span className="bg-white flex flex-col w-fit items-center p-2 rounded text-sm text-green-500 font-bold group select-none">
          <span className="duration-200 transform group-hover:translate-y-[-3px] ">
            {time[0].toString().padStart(2, "0")}
          </span>
          <span className="text-gray-400 font-normal">Days</span>
        </span>
        <span className="bg-white flex flex-col w-fit items-center p-2 rounded text-sm text-green-500 font-bold group select-none">
          <span className="duration-200 transform group-hover:translate-y-[-3px] ">
            {time[1].toString().padStart(2, "0")}
          </span>
          <span className="text-gray-400 font-normal">Hours</span>
        </span>
        <span className="bg-white flex flex-col w-fit items-center p-2 rounded text-sm text-green-500 font-bold group select-none">
          <span className="duration-200 transform group-hover:translate-y-[-3px] ">
            {time[2].toString().padStart(2, "0")}
          </span>
          <span className="text-gray-400 font-normal">Mins</span>
        </span>
        <span className="bg-white flex flex-col w-fit items-center p-2 rounded text-sm text-green-500 font-bold group select-none">
          <span className="duration-200 transform group-hover:translate-y-[-3px] ">
            {time[3].toString().padStart(2, "0")}
          </span>
          <span className="text-gray-400 font-normal">Sec</span>
        </span>
      </div>
      <div className="info bg-white rounded-lg p-5  shadow-md transform translate-y-30">
        <Link
          to={`/Products/${props.offer.id}/${props.offer.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <h3 className="text-[#253e4f] mb-1 font-bold text-lg ">
            {props.offer.title}
          </h3>
        </Link>
        <Rating rate={props.offer.rate} />
        <span>
          By <span className="text-green-500">{props.offer.seller}</span>
        </span>
        {ShowProductAction()}
      </div>
    </div>
  );
}
