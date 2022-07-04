import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      initialValues,
      onChange,
      product,
      value,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
