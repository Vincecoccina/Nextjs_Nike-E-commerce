import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href="/"
      className="group border rounded-lg hover:scale-105 transition-transform duration-500 relative overflow-hidden"
    >
      {/* CARD HEADER */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-md">
        <Image
          src={category.img}
          alt={category.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 group-hover:opacity-100 blur-sm group-hover:blur-none brightness-85"
        />
        <div className="transition-opacity duration-500 absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-70 hover:opacity-0"></div>
        <h3 className="absolute bottom-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] text-2xl font-semibold text-gray-900 bg-opacity-75 px-2 py-1 rounded-md z-10 whitespace-nowrap text-white font-roboto">
          {category.name}
        </h3>
        <div className="absolute w-full h-[70px] bottom-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] bg-black opacity-25"></div>
      </div>
    </Link>
  );
}
