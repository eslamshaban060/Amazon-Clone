"use client";
// src/context/ListContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { mockLists } from "./data"; // Import initial mock data

// Shape of a single product/item
export default interface ListItem {
  id: number;
  title: string;
  price: number;
  shipping: string;
  image: string | { src: string; width?: number; height?: number }; // Allow both string URLs and imported images
}

// Shape of everything the context provides
interface ListContextType {
  list: ListItem[]; // Current list of items
  searchQuery: string; // Search keyword
  setSearchQuery: (query: string) => void; // Update search keyword
  removeItem: (id: number) => void; // Remove product by id
  sortedBy: string; // Current sorting method
  setSortedBy: (criteria: string) => void; // Change sorting method
  sortItems: (criteria: string) => void; // Sort list by criteria
  addItem: (item: ListItem) => void; // Add new item
}

// Create the context (initially undefined)
const ListContext = createContext<ListContextType | undefined>(undefined);

// Provider: wraps your app so children can use this context
export function ListProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<ListItem[]>(mockLists);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortedBy, setSortedBy] = useState<string>("default");

  // Add new product/item to the list
  const addItem = (item: ListItem) => {
    setList((prev) => [item, ...prev]);
  };

  // Sort items based on criteria
  const sortItems = (criteria: string) => {
    let sortedItems = [...list];

    if (criteria === "name") {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "price") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (criteria === "default") {
      // Reset back to original mock data
      sortedItems = [...mockLists];
    }

    setList(sortedItems);
    setSortedBy(criteria);
  };

  // Remove product by ID
  const removeItem = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ListContext.Provider
      value={{
        list,
        searchQuery,
        setSearchQuery,
        removeItem,
        sortedBy,
        setSortedBy,
        sortItems,
        addItem,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

// Hook for consuming the context safely
export const useList = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used inside a ListProvider");
  }
  return context;
};
