import CategoryDashboard from "@/components/CategoryDashboard";
import LandingAdmin from "@/components/LandingAdmin";
import ProductDashboard from "@/components/ProductDashboard";

const page = () => {
  return <div>
    <LandingAdmin />
    <CategoryDashboard />
    <ProductDashboard />  
  </div>;
};

export default page;
