// Import Components
import NewsLetterSlider, {
  FeaturedCategories,
  DailyBestSellsSlider,
} from "../components/Sliders";
import Offers from "../components/Offers";
import Category from "../components/Category";
import Product, { ProductInRow } from "../components/Product/index.jsx";
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

function ProductList({ products, filter, type }) {
  const filteredProducts = products.filter((product) => {
    if (type === "best-sells") {
      return product.stat === filter;
    }
    if (type === "popular") {
      return filter === "All" ? true : product.category === filter;
    }
    return false;
  });

  if (filteredProducts.length === 0) {
    return <p className="font-bold text-3xl whitespace-nowrap">No Product here</p>;
  }

  const limitedProducts = filteredProducts.slice(0, 10);

  return (
    <>
      {limitedProducts.map((product) => (
        <Product key={product.id} product={product} isSlider={false} />
      ))}
    </>
  );
}

function TopSectionProductsList({ categories, index, isLoaded }) {
  if (!isLoaded || !categories[index] || !categories[index].products) {
    return null;
  }
  return (
    <>
      {categories[index].products.map((product) => (
        <ProductInRow key={product.id} product={product} />
      ))}
    </>
  );
}

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
  const [popularSectionFilter, setPopularSectionFilter] = useState("All");

  // Daily Best Sells
  const [bestSellsSectionFilter, setBestSellsSectionFilter] = useState("New");

  let categoriesOfProductLoaded =
    !isLoading && !error && Array.isArray(categories) && categories.length > 2;

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
              getFilterBy={setPopularSectionFilter}
            />
          </div>
          <div
            className={`products grid min-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 mt-10`}
          >
            {!error && !isLoading && (
              <ProductList
                products={products}
                filter={popularSectionFilter}
                type="popular"
              />
            )}
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
              getFilterBy={setBestSellsSectionFilter}
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
                !error && !isLoading
                  ? products
                      .filter((p) => p.stat === bestSellsSectionFilter)
                      .slice(0, 10)
                  : []
              }
            />
          </div>
        </div>

        <Offers />
        <div className="top-products mt-10  grid min-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-10 lg:gap-5 ">
          <TopSection title="Top Selling">
            <TopSectionProductsList categories={categories} index={1} isLoaded={categoriesOfProductLoaded} />
          </TopSection>
          <TopSection title="Trending Products">
             <TopSectionProductsList categories={categories} index={2} isLoaded={categoriesOfProductLoaded} />
          </TopSection>
          <TopSection title="Recently added">
             <TopSectionProductsList categories={categories} index={3} isLoaded={categoriesOfProductLoaded} />
          </TopSection>
          <TopSection title="Top Rated">
             <TopSectionProductsList categories={categories} index={0} isLoaded={categoriesOfProductLoaded} />
          </TopSection>
        </div>
      </div>
    </div>
  );
}
