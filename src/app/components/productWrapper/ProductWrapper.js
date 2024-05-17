"use client";
// import Product from "@/app/product/page";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductWrapper = ({ data }) => {
  console.log(data);

  const productItem = data?.products?.map((el) => (
    <div key={el.id} className="product__card">
      <Image src={el.images[0]} width={200} height={200} alt={el.title} />
      <div className="prduct__card__content">
        <h3>{el.title}</h3>
        <p className="card__brand">{el.brand}</p>
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 2}</del>
        </div>
        <div className="card__btn">
          <Button className="product__buy" variant="contained">
            buy
          </Button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="productWrapper">
      <div className="container">
        <div className="productWrapper__wrapper">
          <h2>Products</h2>
          <div className="product__cards">{productItem}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductWrapper;
