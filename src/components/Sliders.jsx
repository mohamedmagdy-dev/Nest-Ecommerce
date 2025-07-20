// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";

import { useEffect } from "react";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import Images
import Slider1Image from "../assets/slider-1.png";
import Slider2Image from "../assets/slider-2.png";
// Import Mui icons
import EmailIcon from "@mui/icons-material/Email";

import { SectionTitle } from "./Filter";

const shownItemsCount = {
  320: {
    slidesPerView: 2,
  },
  640: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 5,
  },
  1024: {
    slidesPerView: 6,
  },
  1280: {
    slidesPerView: 8,
  },
};

export default function NewsLetterSlider() {
  return (
    <Swiper
      grabCursor
      navigation
      className=" rounded-2xl my-6 h-70 md:h-full select-none"
      modules={[Navigation, EffectFade, Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      effect={"fade"}
    >
      <SwiperSlide className="relative">
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] md:translate-x-[0%] md:left-7 max-md:px-4 max-md:w-full transform lg:left-20">
          <p className="text-3xl md:text-4xl lg:text-6xl text-[#253d4e] font-bold mb-3 text-center md:text-left ">
            Fresh Vegetables <br />
            Big Discount
          </p>
          <p className="text-gray-400 text-sm lg:text-lg font-semibold text-center md:text-left">
            Save Up To 50% Off On Your First Order
          </p>
          <div className="mt-6 bg-white rounded-full flex w-fit justify-between gap-2 items-center max-[410px]:hidden">
            <EmailIcon fontSize="small" className="text-gray-500 ml-5" />
            <input
              type="text"
              className="text-gray-500 grow outline-none font-bold   "
              placeholder="Your Email Address"
            />
            <button className="font-bold text-sm text-white rounded-full bg-[#3bb77e] px-5 py-4 ">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src={Slider1Image}
          alt="Slider1 Image"
          className="object-cover h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] md:translate-x-[0%] md:left-7 max-md:px-4 max-md:w-full transform lg:left-20">
          <p className="text-3xl md:text-4xl lg:text-6xl text-[#253d4e] font-bold mb-3 text-center md:text-left ">
            Don’t miss amazing
            <br />
            grocery deals
          </p>
          <p className="text-gray-400 text-sm lg:text-lg font-semibold text-center md:text-left">
            Sign up for the daily newsletter
          </p>
          <div className="mt-6 bg-white rounded-full flex justify-between w-fit gap-2 items-center max-[410px]:hidden">
            <EmailIcon fontSize="small" className="text-gray-500 ml-5" />
            <input
              type="text"
              className="text-gray-500 grow outline-none font-bold   "
              placeholder="Your Email Address"
            />
            <button className="font-bold text-sm text-white rounded-full bg-[#3bb77e] px-5 py-4 ">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src={Slider2Image}
          alt="Slider2 Image"
          className="object-cover h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export function FeaturedCategories() {
  const dispatch = useDispatch();
  const { featuredCategories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  // Get Categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function createCategories() {
    if (!isLoading && !error) {
      return featuredCategories.map((el) => {
        return (
          <SwiperSlide key={el.id}>
            <div
              className={`flex flex-col py-6 px-3  items-center  rounded border border-transparent duration-300 hover:border-green-400 hover:shadow-lg  `}
              style={{ background: el.bg_color }}
            >
              <img src={el.icon} alt={el.name} className="w-22" />
              <span className="whitespace-nowrap font-bold">{el.name}</span>
              <span className="whitespace-nowrap">{el.items_count} Items</span>
            </div>
          </SwiperSlide>
        );
      });
    }
  }

  return (
    <div className="  my-10 ">
      <SectionTitle title="Featured Categories" />
      <Swiper
        breakpoints={shownItemsCount}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        className="mt-10 select-none"
      >
        {createCategories()}
      </Swiper>
    </div>
  );
}

export function DailyBestSellsSlider(props) {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      spaceBetween={25}
      loop={true}
      grabCursor={true}
      className="select-none"
    >
      {props.products}
    </Swiper>
  );
}
