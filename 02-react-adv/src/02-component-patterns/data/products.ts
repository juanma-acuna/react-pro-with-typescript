import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
  alt: "Coffee Mug",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
  alt: "Coffee Mug - Meme",
};

export const products: Product[] = [product1, product2];
