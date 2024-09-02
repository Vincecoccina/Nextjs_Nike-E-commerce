import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Category, Product } from "@/types";

const getProduct = async (visibility : number) => {
  const res = await fetch(`${process.env.URL}/api/products?visibility=${visibility}`, {
    cache: "no-store",
  });

  return res.json();
};

const getCategories = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
};

const Home = async () => {
  const { products : newProducts } = await getProduct(1);
  const { products : iconicProducts } = await getProduct(2);
  const categories = await getCategories();

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
        <ProductList products={newProducts} />
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
        <ProductList products={iconicProducts} />
      </div>
      <div className="px-6 mb-7">
        <Banner />
      </div>
    </div>
  );
};
export default Home;
