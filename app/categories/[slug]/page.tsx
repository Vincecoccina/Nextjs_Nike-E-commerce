import ProductList from "@/components/ProductList";
import formatSlug from "@/utils/FormatSlug";

type Props = {
  params: {
    slug: string;
  };
};

const getProducts = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/products?cat=${slug}`, {
    cache: "no-store",
  });
  return res.json();
};

const categoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const { products, count } = await getProducts(slug);
  return (
    <div className="px-[50px] mt-[100px]">
      <h1 className="text-[25px] font-[600]">{formatSlug(slug)} ({count})</h1>
      <div className="">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default categoryPage;
