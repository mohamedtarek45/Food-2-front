import Basket from "@/components/Basket";
import LandingProudt from "@/components/LandingProudt";
import OrderSummary from "@/components/OrderSummary";

export const metadata = {
  title: "Basket",
};
const page = () => {
  return (
    <div>
      <LandingProudt basket={true} />
      <Basket />
      <OrderSummary />
    </div>
  );
};

export default page;
