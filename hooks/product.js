import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useProductFilterStore from "@/store/productFilterStore";

export const useEditProduct = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "/products/" + data.id,
        data
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};

export const useDeleteProduct = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(
        process.env.NEXT_PUBLIC_API_URL + "/products/" + id
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};

export const useGetAllProducts = () => {
  const { category } = useProductFilterStore((state) => state);
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/products",
        {
          params: category ? { category } : {},
        }
      );
      return res.data.products;
    },
  });
  return { products, isPending, error };
};

export const useAddProduct = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/products",
        data
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};