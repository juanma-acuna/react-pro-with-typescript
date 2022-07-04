import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // Así lo hace Fernando Herrera
    // setShoppingCart((oldShoppingCart) => {
    //   if (!count) {
    //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
    //     console.log(toDelete);
    //     return rest;
    //   }
    //   return {
    //     ...oldShoppingCart,
    //     [product.id]: {
    //       ...product,
    //       count,
    //     },
    //   };
    // });

    // // Mi solución creo que es más limpia
    // if (!count) {
    //   delete shoppingCart[product.id];
    //   setShoppingCart({ ...shoppingCart });
    //   return;
    // }
    // setShoppingCart({
    //   ...shoppingCart,
    //   [product.id]: {
    //     ...product,
    //     count,
    //   },
    // });

    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCard = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      // borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };
    });
  };
  return { shoppingCart, onProductCountChange };
};
