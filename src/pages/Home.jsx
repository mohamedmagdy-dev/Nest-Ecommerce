// Import Components
import NewsLetterSlider, {
  FeaturedCategories,
  DailyBestSellsSlider,
} from "../components/Sliders";
import Offers from "../components/Offers";
import Category from "../components/Category";
import Product, { ProductInRow } from "../components/Product";
import SectionTitle, {
  ShopButton,
  Filter,
  Loader,
} from "../components/Base_Ui";
import TopSection from "../components/TopSection";

// Import Imgs
import shopCardOne from "../assets/banner-1.png";
import shopCardTwo from "../assets/banner-2.png";
import shopCardThree from "../assets/banner-3.png";
import DailyBestSellsBanner from "../assets/banner-4.png";



// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

// Import React hooks
import { useEffect, useState } from "react";

// Import SWiper
import { SwiperSlide } from "swiper/react";

// Import React Router
import { Link } from "react-router-dom";

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
        <p className="font-bold text-3xl whitespace-nowrap">No Product here</p>
      );
    } else {
      filteredProducts.length = 10;
      return filteredProducts.map((product) => {
        if (isSlider) {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} isSlider={true} />
            </SwiperSlide>
          );
        } else {
          return (
            <Product key={product.id} product={product} isSlider={false} />
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
        return <ProductInRow key={product.id} product={product} />;
      });
    }
  }

  return (
    <div className="home">
      <Loader isLoading={isLoading} />
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
                "Vegetables",
                "Fruits",
                "Canned Goods",
                "Pantry Staples",
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
          <div className="mt-10 flex justify-center ">
            <ShopButton title="Show More" />
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
          <div className="flex  justify-between gap-5 overflow-hidden  lg:h-118 ">
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

              <ShopButton title="Shop Now" />
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

        <Offers />
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
      </div>
    </div>
  );
}
