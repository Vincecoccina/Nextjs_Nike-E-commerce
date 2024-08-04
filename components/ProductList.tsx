import { Product } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

const PRODUCTS: Product[] = [
  {
    name: "Nike Sportswear Tech Fleece",
    desc: "Pantalon de jogging pour Homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fdbf7f4-2e55-4be2-8eea-816f1da06482/M+NK+TCH+FLEECE+JGGR.png",
    price: 49.99,
  },
  {
    name: "Air Jordan 1 Low",
    desc: "Chaussure pour homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245/cd83452d-3a6c-4742-9129-3693e06a26e2/AIR+JORDAN+1+LOW.png",
    price: 129.99,
  },
  {
    name: "Air Jordan 1 Mid",
    desc: "Chaussure pour homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245/288a2235-54ce-4f8e-a133-0117cbc381b4/AIR+JORDAN+1+MID.png",
    price: 139.99,
  },
  {
    name: "Nike Dri-FIT Pacer",
    desc: "Pull à 1/4 de zip pour Femme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db954233-2f91-4700-bfe7-9b9e16d40d7a/W+NK+DF+PACER+HZ.png",
    price: 39.49,
  },
];

export default function ProductList() {
  return (
    <div className="px-6">
      <h3 className="text-2xl font-[600]">En ce moment</h3>
      <div className="gap-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
