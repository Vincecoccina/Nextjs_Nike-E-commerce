"use client";
import { PRODUCTS_CART } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartModal() {
  const cartItem = true;

  const calculateTotal = () => {
    return PRODUCTS_CART.reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0);
  };
  return (
    <div className="absolute w-[400px] p-4 rounded-md top-10 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white flex flex-col gap-6">
      {!cartItem ? (
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-600 font-[700]">
            Votre panier est vide.
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-montserrat font-light">Votre <span className="font-[600] ">panier</span></h3>
          <div className="mt-5 flex flex-col gap-5">
            {PRODUCTS_CART.map((product) => (
              <>
                <div className="flex gap-3">
                  <div className="h-[100px] w-[100px]">
                    <Image
                      src={product.img}
                      alt=""
                      width={72}
                      height={93}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-md font-bold text-gray-800 font-montserrat">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-400 font-[600] font-montserrat">
                          {product.desc}
                        </p>
                      </div>
                      <div>
                        <span>{product.price} €</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-montserrat">
                        Qty : {product.qty}
                      </span>
                      <button className="text-sky-500 font-[600] font-montserrat text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
              </>
            ))}
            <div>
              <div className="text-lg font-[700] flex justify-between">
              <p className="text-xl font-montserrat font-light">Sous-<span className="font-[600] ">total</span></p>
                <p>{calculateTotal()} €</p>
              </div>
              <div className="mt-7 flex items-center justify-between font-montserrat">
                <Link
                  href="/"
                  className="px-5 py-3 bg-black text-white rounded-md"
                >
                  Voir mon panier
                </Link>
                <Link
                  href="/"
                  className="px-5 py-3 bg-white text-black rounded-md border border-gray-700"
                >
                  Payer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
