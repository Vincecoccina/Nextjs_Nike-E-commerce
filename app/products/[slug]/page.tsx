import { Product } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SinglePage() {
  const PRODUCT: Product = {
    name: "Nike Sportswear Tech Fleece",
    desc: "Pantalon de jogging pour Homme",
    discount:
      "Membres Nike : -20 % dès 100 € d'achat. -25 % dès 150 € d'achat. Saisis le code BTS24 pendant le paiement sur Nike.com et sur la Nike App. Valable jusqu'au 5 septembre 2024 à 9 h CEST.",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fdbf7f4-2e55-4be2-8eea-816f1da06482/M+NK+TCH+FLEECE+JGGR.png",
    price: 49.99,
    allSizes: [
      "XS",
      "S",
      "M",
      "M Tall",
      "L Tall",
      "L",
      "XL",
      "XXL",
      "XXL Tall",
      "3XL",
      "3XL Tall",
      "4XL",
    ],
    availableSizes: ["S", "M", "L", "XXL"],
    slug: "nike-sportswear-tech-fleece",
  };
  return (
    <div className="w-[65%] mx-auto my-[100px] flex gap-6">
      <div className="w-[60%] flex justify-center rounded-md overflow-hidden">
        <Image
          src={PRODUCT.img}
          alt={PRODUCT.name}
          width={600}
          height={600}
          className="object-cover rounded-lg transform transition-transform duration-300 hover:scale-125"
        />
      </div>
      <div className="w-[40%]">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-xl font-bold font-montserrat">
              {PRODUCT.name}
            </h1>
            <p className="text-gray-700 font-montserrat">{PRODUCT.desc}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              {PRODUCT.price.toFixed(2)} €
            </p>
            <p className="text-md font-semibold text-emerald-600">
              {PRODUCT.discount}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-[15px] font-[600] font-montserrat">
              <p className="text-gray-800">Selectionner la taille</p>
              <p className="cursor-pointer text-gray-500">Guide des tailles</p>
            </div>
            <div className="w-[100%] mt-3 grid grid-cols-3 gap-3">
              {PRODUCT.allSizes.map((size, index) => (
                <button
                  key={index}
                  className={`border px-3 py-3 rounded ${
                    PRODUCT.availableSizes.includes(size)
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
