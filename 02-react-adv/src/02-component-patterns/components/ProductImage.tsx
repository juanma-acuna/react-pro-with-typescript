import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  const imgToShow: string = img || product.img || noImage;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
      alt="Product"
    />
  );
};
