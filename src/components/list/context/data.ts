// src/data/mockLists.ts

// Import product images
import img1 from "../lists-images/card2 (4).png";
import img2 from "../lists-images/card2 (5).png";
import img3 from "../lists-images/card2 (6).png";
import img4 from "../lists-images/card2 (7).png";
import img5 from "../lists-images/card2 (4).png";

// Import the ListItem type (for type safety";
import ListItem from "./ListContext";

// Example single product
export const all: ListItem[] = [
  {
    id: 109,
    title: "CASIO Smart Watch 7 Lite",
    price: 699,
    shipping: "Free",
    image: img5,
  },
];

// Mock list of products (initial data for the app)
export const mockLists: ListItem[] = [
  {
    id: 101,
    title: "Oraimo Smart Watch 5 Lite",
    price: 799,
    shipping: "Free",
    image: img1,
  },
  {
    id: 102,
    title: "ConnectME Ultra Max Smart Watch",
    price: 899,
    shipping: "EGP 26",
    image: img2,
  },
  {
    id: 103,
    title: "ConnectME Ultra Max Smart Watch",
    price: 999,
    shipping: "EGP 26",
    image: img3,
  },
  {
    id: 202,
    title: "Balloons Pack",
    price: 150,
    shipping: "EGP 10",
    image: img4,
  },
];
