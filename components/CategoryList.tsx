import { Category } from "@/types";
import React from "react";
import CategoryCard from "./CategoryCard";

interface Props {
    categories: Category[];
  }

export default function CategoryList({ categories }: Props ) {
  return (
    <div className="gap-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}
