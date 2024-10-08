"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/img/banner1.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/img/banner2.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/img/banner3.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-80px)] overflow-x-hidden">
        <div
          className="w-max h-full flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            >
              {/* TEXT CONTAINER */}
              <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                <p className="text-xl lg:text-3xl 2xl:text-5xl">
                  {slide.description}
                </p>
                <p className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                  {slide.title}
                </p>
                <Link href={slide.url}>
                  <button className="rounded-md bg-black text-white py-3 px-4 ">
                    SHOP NOW
                  </button>
                </Link>
              </div>
              {/* IMAGE CONTAINER */}
              <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
              }`}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[400px] w-full flex flex-col items-center py-7 gap-5">
        <h1 className="text-6xl text-center uppercase font-roboto font-[300]">
          Des Années d'efforts pour<br /><span className="font-bold"> quelques secondes</span>
        </h1>
        <p className="text-md text-center text-gray-600 font-roboto">
          Le travail de toute une vie pour un moment décisif. Découvre comment
          Sha'Carri <br /> Richardson ecrit l'histoire avec ses chronos.
        </p>
        <button className="py-2 px-5 bg-black rounded-full text-white">
          Decouvrir
        </button>
      </div>
    </>
  );
}
