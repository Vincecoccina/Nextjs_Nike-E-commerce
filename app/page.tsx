import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Category, Product } from "@/types";

export default function Home() {
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
    {
      name: "Jordan Sport",
      desc: "Haut à manches courtes Diamond pour femme",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7dbe41e5-53d4-496b-a6e3-59a0b33ad352/W+J+SPT+DIAMOND+SS+TOP.png",
      price: 44.99,
    },
    {
      name: "Nike Slam",
      desc: "T-shirt à manches courtes Dri-FIT pour femme",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/889aab35-6e54-4dfe-a563-7321c3c6faec/W+NK+DF+SLAM+SS+TEE.png",
      price: 34.99,
    },
  ];

  const CATEGORIES: Category[] = [
    {
      id: 1,
      name: "Homme",
      slug: "homme",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c6dceea-1187-4286-9a8d-a5c7cab4137c/t-shirt-sportswear-pour-nzHp7r.png",
    },
    {
      id: 2,
      name: "Femme",
      slug: "femme",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6c5d6cdc-fe4a-40f2-9b0f-648fe1f29d55/haut-jordan-essentials-pour-7rf80k.png",
    },
    {
      id: 3,
      name: "Enfant",
      slug: "enfant",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d2e013df-7835-4567-b919-170a541dd0a4/sweat-a-capuche-et-zip-sportswear-tech-fleece-pour-plus-age-3vNgHD.png",
    },
    {
      id: 4,
      name: "Lifestyle",
      slug: "lifestyle",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/416fc7f2-500e-474c-83d2-fa691976b32c/chaussure-air-max-dn-electric-pour-JmsxTC.png",
    },
    {
      id: 5,
      name: "Haut et T-shirt",
      slug: "haut_et_tshirt",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d5d91f5f-260b-413a-b140-93c5e4de9ec4/debardeur-court-one-classic-dri-fit-pour-KhqkVs.png",
    },
  ];

  return (
    <div className="">
      <div className="w-full h-[60px] bg-gray-200 flex flex-col items-center justify-center">
        <p className="font-[500] text-md">Voir toutes les actualités</p>
        <p className="font-[700] text-sm underline cursor-pointer">Voir</p>
      </div>
      <Slider />
      <div className="px-6 mb-[100px]">
        <h3 className="text-2xl font-montserrat font-light">
          En ce <span className="font-[600] ">moment</span>
        </h3>
        <ProductList products={PRODUCTS} />
      </div>
      <div className="px-6 mb-[100px]">
        <h3 className="text-2xl font-montserrat font-light">
          Nos <span className="font-[600] ">catégories</span>
        </h3>
        <CategoryList categories={CATEGORIES} />
      </div>
      <div className="px-6 mb-[100px]">
        <h3 className="text-2xl font-montserrat font-light">
          Nos <span className="font-[600] ">modèles iconiques</span>
        </h3>
        <ProductList products={PRODUCTS} />
      </div>
      <div className="px-6 mb-7">
        <Banner />
      </div>
    </div>
  );
}
