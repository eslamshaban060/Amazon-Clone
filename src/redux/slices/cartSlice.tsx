import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/Data/ApiData/product";

// ✅ Cart Item type (Product + quantity)
export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
}

interface CartState {
  list: CartItem[];
  searchQuery: string;
  sortedBy: string;
}

// ✅ Load from localStorage if exists
const loadFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    try {
      const data = localStorage.getItem("Cartitems");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
  return [];
};

// ✅ Save to localStorage whenever list changes
const saveToLocalStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("Cartitems", JSON.stringify(items));
  }
};

const initialState: CartState = {
  list: loadFromLocalStorage(),
  searchQuery: "",
  sortedBy: "default",
};

const listSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item (or increase quantity if exists)
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // لو موجود نزود الكمية
      } else {
        state.list.unshift({ ...action.payload, quantity: 1 }); // لو مش موجود نضيفه بكمية = 1
      }
      saveToLocalStorage(state.list);
    },

    // ✅ Remove item completely
    removeItem: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.list);
    },

    // ✅ Decrease quantity (and remove if 0)
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.list.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.list = state.list.filter((item) => item.id !== action.payload);
        }
      }
      saveToLocalStorage(state.list);
    },

    // Update search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Change sorting method
    setSortedBy: (state, action: PayloadAction<string>) => {
      state.sortedBy = action.payload;
    },

    // Sort items
    sortItems: (state, action: PayloadAction<string>) => {
      let sortedItems = [...state.list];

      if (action.payload === "name") {
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === "price") {
        sortedItems.sort((a, b) => a.price - b.price);
      } else if (action.payload === "default") {
        sortedItems = [...state.list];
      }

      state.list = sortedItems;
      state.sortedBy = action.payload;
      saveToLocalStorage(state.list); // persist after sort
    },

    // Reset to default mock list
    resetItems: (state, action: PayloadAction<CartItem[]>) => {
      state.list = action.payload;
      saveToLocalStorage(state.list);
    },
  },
});

export const {
  addCartItem,
  removeItem,
  decreaseQuantity,
  setSearchQuery,
  setSortedBy,
  sortItems,
  resetItems,
} = listSlice.actions;

export default listSlice.reducer;
