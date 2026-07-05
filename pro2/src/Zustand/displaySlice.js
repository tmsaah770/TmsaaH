
import {create} from "zustand";
import db from "../../server/db.json";

export const useDisplay = create((set) => ({
     products : [],
     isLoading : true,
     getProducts: async (category) => {
          const data = category
               ? db.products.filter(p => p.category === category)
               : db.products;
          set({ products: data, isLoading: false });
     }
})) 