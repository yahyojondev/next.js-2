import React from "react";
import ProductWrapper from "../components/productWrapper/ProductWrapper";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Product() {
  let data = await getData();

  return (
    <div>
      <div className="container">
        <ProductWrapper data={data} />
      </div>
    </div>
  );
}
