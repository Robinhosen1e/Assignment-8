"use client";

import PopularProductCard from "@/component/PopularProductsCard";
import { useEffect, useState } from "react";
import { BsPercent } from "react-icons/bs";

const PopularProductPage = () => {
  const [product, setProduct] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All Product");

  useEffect(() => {
    fetch("https://assignments-8-server.onrender.com/topSellingProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // Unique Categories
  const categories = [
    "All Product",
    ...new Set(product.map((item) => item.category)),
  ];

  // Filter Products
  const filteredProducts =
    selectedCategory === "All Product"
      ? product
      : product.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="w-11/12 mx-auto my-20">

      {/* Title */}
      <div className="border-b-2 border-[#F48721] pb-2 mb-6 justify-between flex items-center">
        <h2 class="text-2xl font-bold text-[#F48721] flex items-center gap-1.5">
            Popular Products
            </h2>
        {/* Dropdown Filter */}
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg outline-none w-[220px]"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>

      

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((item) => (
          <PopularProductCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProductPage;