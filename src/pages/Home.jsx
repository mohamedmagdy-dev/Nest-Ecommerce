import NewsLetterSlider, {
  FeaturedCategories,
  DailyBestSellsSlider,
} from "../components/Sliders";
import shopCardOne from "../assets/banner-1.png";
import shopCardTwo from "../assets/banner-2.png";
import shopCardThree from "../assets/banner-3.png";
import DailyBestSellsBanner from "../assets/banner-4.png";

import Category from "../components/Category";
import Product from "../components/Product";
import Filter, { SectionTitle } from "../components/Filter";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect, useState } from "react";

import ShopButton from "../components/Help-Items";

import { SwiperSlide } from "swiper/react";

export default function Home() {
  // Get Products Information
  const { products, categories, isLoading, error } = useSelector(
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
        <p className="font-bold text-3xl whitespace-nowrap">
          There Is No Product In This Section :)
        </p>
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
          <div className="flex  justify-between gap-5 overflow-hidden ">
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
      </div>
    </div>
  );
}
