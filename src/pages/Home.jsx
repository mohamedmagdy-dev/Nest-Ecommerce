import NewsLetterSlider, {
  FeaturedCategories,
  DailyBestSellsSlider,
} from "../components/Sliders";

import ShopButton, { EmailInput } from "../components/Help-Items";
import Offer from "../components/Offer";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import shopCardOne from "../assets/banner-1.png";
import shopCardTwo from "../assets/banner-2.png";
import shopCardThree from "../assets/banner-3.png";
import BenefitIcon1 from "../assets/icon-1.svg";
import BenefitIcon2 from "../assets/icon-2.svg";
import BenefitIcon3 from "../assets/icon-3.svg";
import BenefitIcon4 from "../assets/icon-4.svg";
import BenefitIcon5 from "../assets/icon-5.svg";

import DailyBestSellsBanner from "../assets/banner-4.png";

import Category from "../components/Category";
import Product, { ProductInRow } from "../components/Product";
import Filter, { SectionTitle } from "../components/Filter";
import TopSection from "../components/TopSection";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import Benefits from "../components/Benefits";

export default function Home() {
  // Get Products Information
  const { products, categories, offers, isLoading, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Popular Products
  // Filter Products by Items
  const [popularSectionFilter, setPopularSectionFilter] = useState("All");
  // Get Selected Category Filter
  function getPopularFilter(filter) {
    setPopularSectionFilter(filter);
  }

  // Daily Best Sells

  // Filter Products by Items
  const [bestSellsSectionFilter, setBestSellsSectionFilter] = useState("New");
  // Get Selected Category Filter
  function getBestSellsFilter(filter) {
    setBestSellsSectionFilter(filter);
  }

  function createProducts(productFilter, sectionType, isSlider = false) {
    const filteredProducts = products.filter((product) => {
      if (sectionType == "best-sells") {
        return product.stat == productFilter;
      }

      if (sectionType == "popular") {
        return productFilter == "All"
          ? true
          : product.category == productFilter;
      }
    });
    if (filteredProducts.length == 0) {
      return (
        <p className="font-bold text-3xl whitespace-nowrap">No Product :)</p>
      );
    } else {
      return filteredProducts.map((product) => {
        if (isSlider) {
          return (
            <SwiperSlide key={product.id}>
              <Product
                stat={product.stat}
                title={product.title}
                rate={product.rate}
                price={product.price}
                images={product.images}
                oldPrice={product.oldPrice}
                category={product.category}
                seller={product.seller}
              />
            </SwiperSlide>
          );
        } else {
          return (
            <Product
              key={product.id}
              stat={product.stat}
              title={product.title}
              rate={product.rate}
              price={product.price}
              images={product.images}
              oldPrice={product.oldPrice}
              category={product.category}
              seller={product.seller}
            />
          );
        }
      });
    }
  }

  let categoriesOfProductLoaded =
    !isLoading && !error && Array.isArray(categories) && categories.length > 2;

  function TopSectionProducts(index) {
    if (categoriesOfProductLoaded) {
      return categories[index].products.map((product) => {
        return (
          <ProductInRow
            key={product.id}
            title={product.title}
            img={product.image}
            rate={product.rate}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        );
      });
    }
  }

  return (
    <div className="home">
      <div className="container mx-auto px-3 mb-6">
        <NewsLetterSlider />
        <FeaturedCategories />
        <div
          className={`shop-cards grid min-sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 `}
        >
          <Category
            image={shopCardOne}
            title="Everyday Fresh & Clean with Our Products"
          />
          <Category
            image={shopCardTwo}
            title="Make your Breakfast Healthy and Easy"
          />
          <Category
            image={shopCardThree}
            title="The best Organic Products Online"
          />
        </div>
        <div className="popular-products mt-10">
          <div className="flex justify-between flex-wrap items-center gap-5">
            <SectionTitle title="Popular Products" />

            <Filter
              filterCategories={[
                "All",
                "Milks & Dairies",
                "Coffees & Teas",
                "Pet Foods",
                "Meats",
                "Vegetables",
                "Fruits",
              ]}
              getFilterBy={getPopularFilter}
            />
          </div>
          <div
            className={`products grid min-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 mt-10`}
          >
            {!error &&
              !isLoading &&
              createProducts(popularSectionFilter, "popular")}
          </div>
        </div>
        <div className="daily-best-sells mt-10">
          <div className="flex justify-between flex-wrap items-center gap-5 mb-10">
            <SectionTitle title="Daily Best Sells" />
            <Filter
              filterCategories={["New", "Sale", "Hot"]}
              getFilterBy={getBestSellsFilter}
            />
          </div>
          <div className="flex  justify-between gap-5 overflow-hidden  lg:h-115 ">
            <div
              className="hidden lg:flex flex-col justify-between p-10 rounded-xl max-w-75  min-w-75 items-center "
              style={{
                background: `url(${DailyBestSellsBanner})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-5xl font-bold text-[#253d4e]">
                Bring nature into your home
              </h3>

              <ShopButton />
            </div>
            <DailyBestSellsSlider
              products={
                !error &&
                !isLoading &&
                createProducts(bestSellsSectionFilter, "best-sells", true)
              }
            />
          </div>
        </div>
        <div className="deal-of-day mt-10">
          <div className="flex justify-between gap-5 items-center">
            <SectionTitle title="Deals Of The Day" />
            <Link className="font-semibold text-gray-400 duration-200 hover:text-green-400">
              All Deals <ChevronRightIcon fontSize="small" />
            </Link>
          </div>
          <div className="mt-10 grid min-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 ">
            {!error &&
              !isLoading &&
              offers.map((offer) => {
                return <Offer key={offer.id} offer={offer} />;
              })}
          </div>
        </div>
        <div className="top-products mt-10  grid min-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-10 lg:gap-5 ">
          <TopSection title="Top Selling">{TopSectionProducts(1)}</TopSection>
          <TopSection title="Trending Products">
            {TopSectionProducts(2)}
          </TopSection>
          <TopSection title="Recently added">
            {TopSectionProducts(3)}
          </TopSection>
          <TopSection title="Top Rated">{TopSectionProducts(0)}</TopSection>
        </div>
        <NewsLetter />
        <div className="benefits grid min-sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-10 lg:gap-5  ">
          <Benefits
            key="1"
            title="Best prices & offers"
            desc="Orders $50 or more"
            image={BenefitIcon1}
          />
          <Benefits
            key="2"
            title="Free delivery"
            desc="24/7 amazing services"
            image={BenefitIcon2}
          />
          <Benefits
            key="3"
            title="Great daily deal"
            desc="When you sign up"
            image={BenefitIcon3}
          />
          <Benefits
            key="4"
            title="Wide assortment"
            desc="Mega Discounts"
            image={BenefitIcon4}
          />
          <Benefits
            key="5"
            title="Easy returns"
            desc="Within 30 days"
            image={BenefitIcon5}
          />
        </div>
      </div>
    </div>
  );
}
