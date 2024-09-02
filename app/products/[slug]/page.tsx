import { Product } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";


const getProduct = async(slug: string) => {
  const res = await fetch(`${process.env.URL}/api/products/${slug}`, {
    cache: "no-store"
  })
  return res.json(); 
}

const SingleProductPage = async ({params} : {params: {slug: string}}) => {
 const {slug} = params;
 const product = await getProduct(slug)
  return (
    <div className="w-[65%] mx-auto my-[100px] flex gap-6">
      <div className="w-[60%] flex justify-center rounded-md overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-lg transform transition-transform duration-300 hover:scale-125"
        />
      </div>
      <div className="w-[40%]">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-xl font-bold font-montserrat">
              {product.name}
            </h1>
            <p className="text-gray-700 font-montserrat">{product.desc}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              {product.price.toFixed(2)} €
            </p>
            <p className="text-md font-semibold text-emerald-600">
              {product.discount}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-[15px] font-[600] font-montserrat">
              <p className="text-gray-800">Selectionner la taille</p>
              <p className="cursor-pointer text-gray-500">Guide des tailles</p>
            </div>
            <div className="w-[100%] mt-3 grid grid-cols-3 gap-3">
              {product.allSizes.map((size : string, index: number) => (
                <button
                  key={index}
                  className={`border px-3 py-3 rounded ${
                    product.availableSizes.includes(size)
                      ? "text-black border-slate-300 hover:border-slate-500"
                      : "text-gray-400 border-gray-300 bg-gray-200 cursor-not-allowed"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="text-lg font-semibold w-full bg-black text-white rounded-full py-4 hover:bg-gray-400">
              Ajouter au panier
            </button>
            <button className="text-lg font-semibold w-full bg-white text-black border border-slate-300 rounded-full py-4 flex items-center justify-center gap-2 hover:border-black">
              Ajouter aux favoris
              <Heart/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
