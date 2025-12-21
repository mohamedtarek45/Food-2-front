import { create } from "zustand";

const useProductFilterStore = create((set) => ({
  category: null,
  setCtegory: (Category) => set({ category: Category }),
  reset: () => set({ category: null }),
}));
export default useProductFilterStore;
