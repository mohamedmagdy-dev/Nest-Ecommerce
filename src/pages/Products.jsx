import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect, useState, useCallback, useMemo } from "react";
import Product from "../components/Product";
import {
  Loader,
  SectionInfo,
  SortBy,
  ShowItemInPage,
} from "../components/Base_Ui";
import { useParams } from "react-router";

import Pagination from "../components/Pagination";

export default function Products() {
  const { products, isLoading } = useSelector((state) => state.products);
  const [filteredItemsCount, SetFilteredItemsCount] = useState(0);
  const [filteredProduct, SetFilteredItems] = useState([]);
  const [userSorter, setUserSorter] = useState("All");
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const param = useParams();

  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProduct.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, filteredProduct]);

  const handleItemsPerPageChange = useCallback((count) => {
    setItemsPerPage(count);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, param.category]);

  useEffect(() => {
    let filterProducts;
    setCurrentPage(1);
    if (param?.category) {
      filterProducts = products.filter((product) => {
        return (
          product.category.replace(/\s+/g, "-").toLowerCase() == param.category
        );
      });
    } else {
      filterProducts = products;
    }
    SetFilteredItems(filterProducts);
    SetFilteredItemsCount(filterProducts.length);
  }, [param?.category, products, userSorter]);

  function getUserSorter(filter) {
    setUserSorter(filter);
  }

  function sortedByUser() {
    let sortedProducts = [...filteredProduct];
    if (userSorter == "low-price") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (userSorter == "high-price") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else if (userSorter == "avg-rating") {
      sortedProducts = sortedProducts.sort((a, b) => b.rate - a.rate);
    }
    SetFilteredItems(sortedProducts);
  }

  useEffect(() => sortedByUser(), [userSorter]);

  return (
    <div className="products ">
      <Loader isLoading={isLoading} />

      <div className="container mx-auto px-3 mb-6  mt-10">
        <div className="flex items-center justify-center sm:justify-between gap-5  flex-wrap">
          <SectionInfo
            sectionName={`${
              param?.category
                ? `All Products Of ${param.category.replaceAll("-", " ")}`
                : "All Products"
            }`}
            itemsCount={filteredItemsCount}
          />
          <div className="flex gap-4 flex-wrap max-sm:justify-center">
            <ShowItemInPage getItemsPerPage={handleItemsPerPageChange} />
            <SortBy getSorter={getUserSorter} sortProducts={sortedByUser} />
          </div>
        </div>

        <div
          className={`products grid min-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(1,minmax(100%,1fr))] gap-5 mt-10`}
        >
          {displayedProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredProduct.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />

      </div>
    </div>
  );
}
