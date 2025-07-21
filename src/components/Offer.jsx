import { useEffect, useState } from "react";
import { Rating, ProductAction } from "./Help-Items";

export default function Offer(props) {
  const startDate = new Date(props.offer.startOn);
  const expiryDate = new Date(startDate);
  expiryDate.setDate(startDate.getDate() + props.offer.expiresInDays);
  // const isExpired = now > expiryDate;
  const [time, setTime] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let intervalHandel = setInterval(() => {
      const now = new Date();
      const timeDiffMs = expiryDate - now;
      const days = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiffMs / 1000) % 60);
      setTime([days, hours, minutes, seconds]);
      if (timeDiffMs <= 0) {
        clearInterval(intervalHandel);
      }
    }, 1000);
    return () => {
      return clearInterval(intervalHandel);
    };
  }, []);

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
        <h3 className="text-[#253e4f] mb-1 font-bold text-lg">{props.offer.title}</h3>
        <Rating rate={props.offer.rate} />
        <span>
          By <span className="text-green-500">{props.offer.seller}</span>
        </span>
        <ProductAction
          price={props.offer.price}
          oldPrice={props.offer.oldPrice}
          product={props.product}
        />
      </div>
    </div>
  );
}
