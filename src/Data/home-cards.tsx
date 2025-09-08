import { images } from "../Data/homeCardsImage";

interface Item {
  name: string;
  image: string | { src: string; width?: number; height?: number }; // Allow both string URLs and imported images
}

export default interface Section {
  title: string;
  title2: string;
  items: Item[];
  link: string;
}

export const cardsData: Section[] = [
  {
    title: "Revamp your home in ",
    title2: "style",

    items: [
      { name: "Cushion covers, bedsheets & more", image: images[0] },
      { name: "Figurines, vases & more", image: images[1] },
      { name: "Home storage", image: images[2] },
      { name: "Lighting solutions", image: images[3] },
    ],
    link: "Explore all",
  },
  {
    title: "Appliances for your ",
    title2: "home | Up to 55% off ",
    items: [
      { name: "Air Conditioners", image: images[4] },
      { name: "Refrigerators", image: images[5] },
      { name: "Microwaves", image: images[6] },
      { name: "Washing machines", image: images[7] },
    ],
    link: "See more",
  },
  {
    title: "Starting $149 |",
    title2: " Headphones",
    items: [
      { name: "boAt (Starting $249)", image: images[8] },
      { name: "Boult (Starting $149)", image: images[9] },
      { name: "Noise (Starting $69)", image: images[10] },
      { name: "Zebronics (Starting $149)", image: images[11] },
    ],
    link: "See all offers",
  },
  {
    title: "Starting $99 | Amazon",
    title2: "Brands & more",
    items: [
      { name: "Storage boxes (Starting $239)", image: images[12] },
      { name: "Up to 60% off Storage & more", image: images[13] },
      { name: "Gym (Starting $99) Toys & games", image: images[14] },
      { name: "Up to 60% off Jackets, dresses & more", image: images[15] },
    ],
    link: "Shop now",
  },
  {
    title: "Automotive essentials | ",
    title2: " Up to 60% off",
    items: [
      { name: "Cleaning accessories", image: images[16] },
      { name: "Tyre & rim care", image: images[17] },
      { name: "Helmets", image: images[18] },
      { name: "Vacuum cleaner", image: images[19] },
    ],
    link: "See more",
  },
  {
    title: "Up to 60% off | Styles ",
    title2: "for women",
    items: [
      { name: "Women's Clothing", image: images[20] },
      { name: "Footwear+Handbags", image: images[21] },
      { name: "Watches", image: images[22] },
      { name: "Fashion Jewellery", image: images[23] },
    ],
    link: "End of season sale",
  },
  {
    title: "Starting ₹199 | Amazon ",
    title2: "Brands & more",
    items: [
      { name: "Bedsheets (Starting ₹199)", image: images[24] },
      { name: "Curtains (Starting ₹199)", image: images[25] },
      { name: "Ironing boards & more (Minimum 40% off)", image: images[26] },
      { name: "Home decor (Up to 60% off)", image: images[27] },
    ],
    link: "See more",
  },
  {
    title: "Starting ₹99 | Home ",
    title2: " improvement essentials",
    items: [
      { name: "Spin mops, wipes & more", image: images[28] },
      { name: "Bathroom hardware & accessories", image: images[29] },
      { name: "Hammers, screwdrivers & more", image: images[30] },
      { name: "Extension boards, plugs & more", image: images[31] },
    ],
    link: "Explore more",
  },
];
