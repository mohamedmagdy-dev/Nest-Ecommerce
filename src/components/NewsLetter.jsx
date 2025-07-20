import newsLetterBanner from "../assets/banner-10.png";
import deliveryGuy from "../assets/banner-9.png";

import { EmailInput } from "../components/Help-Items";
export default function NewsLetter() {
  return (
    <div
      className="newsLetter relative mt-10  rounded-2xl my-6 h-70 md:h-full select-none p-5 max-sm:flex  max-sm:items-center  max-sm:flex-col  max-sm:justify-center md:p-10 lg:p-20 bg-amber-400"
      style={{
        background: `url(${newsLetterBanner})`,
        backgroundSize: "cover",
      }}
    >
      <img
        src={deliveryGuy}
        alt="deliveryGuy"
        className="absolute bottom-0 lg:right-10 md:right-0 hidden md:block md:w-85 lg:w-120 "
      />
      <p className="text-3xl md:text-2xl lg:text-4xl text-[#253d4e] font-bold mb-3 text-center md:text-left">
        Stay home & get your daily <br />
        needs from our shop
      </p>
      <p className="text-gray-400 text-sm lg:text-md font-semibold text-center md:text-left">
        Start You'r Daily Shopping with Nest Mart
      </p>
      <EmailInput />
    </div>
  );
}
