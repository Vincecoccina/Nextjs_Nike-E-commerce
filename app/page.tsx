import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Category, Product } from "@/types";


const getCategories = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
};

const Home = async() => {
  const categories = await getCategories();
  
  const PRODUCTS: Product[] = [
    {
      name: "Nike Sportswear Tech Fleece",
      desc: "Pantalon de jogging pour Homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fdbf7f4-2e55-4be2-8eea-816f1da06482/M+NK+TCH+FLEECE+JGGR.png",
      price: 49.99,
      slug: "nike-sportswear-tech-fleece",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Air Jordan 1 Low",
      desc: "Chaussure pour homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245/cd83452d-3a6c-4742-9129-3693e06a26e2/AIR+JORDAN+1+LOW.png",
      price: 129.99,
      slug: "air-jordan-1-low",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Air Jordan 1 Mid",
      desc: "Chaussure pour homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245/288a2235-54ce-4f8e-a133-0117cbc381b4/AIR+JORDAN+1+MID.png",
      price: 139.99,
      slug: "air-jordan-1-mid",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Dri-FIT Pacer",
      desc: "Pull à 1/4 de zip pour Femme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db954233-2f91-4700-bfe7-9b9e16d40d7a/W+NK+DF+PACER+HZ.png",
      price: 39.49,
      slug: "nike-dri-fIT-pacer",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Jordan Sport",
      desc: "Haut à manches courtes Diamond pour femme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7dbe41e5-53d4-496b-a6e3-59a0b33ad352/W+J+SPT+DIAMOND+SS+TOP.png",
      price: 44.99,
      slug: "jordan-sport",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Slam",
      desc: "T-shirt à manches courtes Dri-FIT pour femme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/889aab35-6e54-4dfe-a563-7321c3c6faec/W+NK+DF+SLAM+SS+TEE.png",
      price: 34.99,
      slug: "nike-slam",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
  ];
  const PRODUCTS_ICON: Product[] = [
    {
      name: "Nike Air Max Dn",
      desc: "Chaussure",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b1ebdb3-9043-492d-94bf-8ab78dccafb9/AIR+MAX+DN.png",
      price: 169.99,
      slug: "nike-air-max-dn",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Air Max Plus",
      desc: "Chaussure pour ado",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da256504-e628-4ca8-9de6-ebfae816cd3d/NIKE+AIR+MAX+PLUS+GS.png",
      price: 94.99,
      slug: "nike-air-max-plus",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Air Max 97",
      desc: "Chaussure pour ado",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ue8xtawkyqcfaunnufcy/NIKE+AIR+MAX+97+%28GS%29.png",
      price: 86.99,
      slug: "nike-air-max-97",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Air Max 90",
      desc: "Chaussure pour homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27c57bfc-7213-4149-843f-5c28b34a1789/NIKE+AIR+MAX+90.png",
      price: 149.99,
      slug: "nike-air-max-90",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Nike Air Max Plus",
      desc: "Chaussure pour ado",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67088401-10b3-4f8b-8dd9-d7c0905bc697/NIKE+AIR+MAX+PLUS+%28GS%29.png",
      price: 144.99,
      slug: "nike-air-max-plus",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Air Jordan 1 Mid",
      desc: "Chaussure pour Homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5225bb43-07ec-4e3b-a001-7559106621a3/AIR+JORDAN+1+MID.png",
      price: 134.99,
      slug: "air-jordan-1-mid",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Air Jordan 1 Mid",
      desc: "Chaussure pour Homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1b1785a7-b7b2-4b09-915f-257fd37b7653/AIR+JORDAN+1+MID.png",
      price: 134.99,
      slug: "air-jordan-1-mid",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
    },
    {
      name: "Jumpman MVP",
      desc: "Chaussure pour Homme",
      discount: "",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ede48e2-7cfa-4a17-8ccf-f0ae3f851a46/JORDAN+MVP.png",
      price: 169.99,
      slug: "jumpan-mvp",
      allSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      availableSizes: ["S", "M", "L"],
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
        <CategoryList categories={categories} />
      </div>
      <div className="px-6 mb-[100px]">
        <h3 className="text-2xl font-montserrat font-light">
          Nos <span className="font-[600] ">modèles iconiques</span>
        </h3>
        <ProductList products={PRODUCTS_ICON} />
      </div>
      <div className="px-6 mb-7">
        <Banner />
      </div>
    </div>
  );
}
export default Home;