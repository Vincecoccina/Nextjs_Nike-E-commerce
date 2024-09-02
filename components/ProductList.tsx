import React from "react";
import ProductCard from "./ProductCard";
import Grow from "@mui/material/Grow";
import { Product } from "@/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="gap-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <Grow in={true} timeout={index * 400} key={index}>
          <div>
            <ProductCard product={product} />
          </div>
        </Grow>
      ))}
    </div>
  );
}
