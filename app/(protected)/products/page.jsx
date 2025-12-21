import LandingProudts from "@/components/LandingProudts";
import Products from "@/components/Products";

export const metadata = {
  title: "Products",
};

const page = async () => {
  return <div>
    <LandingProudts />
    <Products/>
  </div>;
};

export default page;
