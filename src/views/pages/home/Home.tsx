import useAPI from "hooks/useAPI";
import ProductsArray from "views/components/home/ProductsArray";
import Dslider from "../../components/custom/Dslider";
import ProductService from "services/Product.service";

const Home = () => {
  const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);

  return (
    <main>
      <div className="py-20">
        <Dslider />
        <div>{products && <ProductsArray products={products} />}</div>
      </div>
    </main>
  );
};

export default Home;
