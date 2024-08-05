import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-[60px] bg-gray-200 flex flex-col items-center justify-center">
        <p className="font-[500] text-md">Voir toutes les actualités</p>
        <p className="font-[700] text-sm underline cursor-pointer">Voir</p>
      </div>
      <Slider />
      <div className="px-6">
        <h3 className="text-2xl font-[600]">En ce moment</h3>
        <ProductList />
      </div>
    </div>
  );
}
