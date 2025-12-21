import CardDetail from "@/components/CardDetail";
import LandingProudt from "@/components/LandingProudt";
import PageDetail from "@/components/PageDetail";
import axios from "axios";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } =await params;
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/products/" + id
    );

    return {
      title: data.product.name,
    };
  } catch (error) {
    return {
      title: "Product Not Found",
    };
  }
}
const page = async ({ params }) => {
  const { id } = await params;
  let Product;
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/products/" + id
    );
    Product = data.product;
  } catch (error) {
    return notFound();
  }

  return (
    <div>
      <LandingProudt />
      <CardDetail product={Product} />
      <PageDetail product={Product} />
    </div>
  );
};

export default page;
