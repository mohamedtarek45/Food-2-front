
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useEditCategory = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async ({ id, categoryName }) => {
      const res = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "/categories/" + id,
        {
          categoryName
        }
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};

export const useGetAllCategories = () => {
  const {
    data: categories,
    isPending,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/categories"
      );
      return res.data.categories;
    },
  });
  return { categories, isPending, error };
};
export const useAddCategory = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async ({categoryName}) => {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/categories",
        {
          categoryName
        }
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};

export const useDeleteCategory = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(
        process.env.NEXT_PUBLIC_API_URL + "/categories/" + id
      );
      return res.data;
    },
  });
  return { mutateAsync, isPending, error };
};