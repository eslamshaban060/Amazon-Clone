import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Shape of a single product/item
export interface ListItem {
  id: number;
  title: string;
  description: string;
  price: number;
  shipping: string;
  image: string;
}

interface ListState {
  list: ListItem[];
  searchQuery: string;
  sortedBy: string;
}

// ✅ Load from localStorage if exists
const loadFromLocalStorage = (): ListItem[] => {
  if (typeof window !== "undefined") {
    try {
      const data = localStorage.getItem("items");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
  return [];
};

// ✅ Save to localStorage whenever list changes
const saveToLocalStorage = (items: ListItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("items", JSON.stringify(items));
  }
};

const initialState: ListState = {
  list: loadFromLocalStorage(),
  searchQuery: "",
  sortedBy: "default",
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // Add item
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.list.unshift(action.payload);
      saveToLocalStorage(state.list); // persist
    },

    // Remove item by id
    removeItem: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.list); // persist
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
        sortedItems = [...sortItems];
      }

      state.list = sortedItems;
      state.sortedBy = action.payload;
      saveToLocalStorage(state.list); // persist after sort
    },

    // Reset to default mock list
    resetItems: (state, action: PayloadAction<ListItem[]>) => {
      state.list = action.payload;
      saveToLocalStorage(state.list);
    },
  },
});

export const {
  addItem,
  removeItem,
  setSearchQuery,
  setSortedBy,
  sortItems,
  resetItems,
} = listSlice.actions;

export default listSlice.reducer;
