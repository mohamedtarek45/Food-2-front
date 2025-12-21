import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      products: [],
      totalCount: 0,
      totalPrice: 0,
      reset: () => set({ products: [], totalCount: 0, totalPrice: 0 }),
      AddProduct: (product) =>
        set((state) => {
          const exists = state.products.find((p) => p.id === product.id);
          if (exists) {
            return {
              ...state,
              products: state.products.map((p) =>
                p.id === product.id ? { ...p, count: p.count + 1 } : p
              ),
              totalPrice: state.totalPrice + product.price * 1,
            };
          }
          return {
            ...state,
            products: [
              ...state.products,
              {
                ...product,
                count:1,
              },
            ],
            totalPrice: state.totalPrice + product.price * 1,
            totalCount: state.totalCount + 1,
          };
        }),

      RemoveProduct: (product) =>
        set((state) => ({
          ...state,
          products: state.products.filter((p) => !(p.id === product.id)),
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - product.price * product.count,
        })),

      IncreaseProduct: (product) =>
        set((state) => ({
          ...state,
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, count: p.count + 1 } : p
          ),
          totalPrice: state.totalPrice + product.price,
        })),

      DecreaseProduct: (product) =>
        set((state) => ({
          ...state,
          products: state.products.map((p) =>
            p.id === product.id && p.count > 1
              ? { ...p, count: p.count - 1 }
              : p
          ),
          totalPrice: state.totalPrice - product.price,
        })),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
