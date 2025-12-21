import FilterSection from "./FilterSection";
import ProductsList from "./ProductsView";

const Products = () => {
  return (
    <div
      className=" container bg-white my-15 grid 3xl:grid-cols-[341.77px_1fr] gap-x-8 xl:gap-x-12.5 
        grid-cols-1 lg:grid-cols-[300px_1fr] gap-y-8 "
    >
      <FilterSection />
      <ProductsList />
    </div>
  );
};

export default Products;
