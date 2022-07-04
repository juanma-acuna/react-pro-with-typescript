import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-color text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {(args) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={args.reset}>Reset</button>
            <button onClick={() => args.increaseBy(-2)}>-2</button>
            {!args.isMaxCountReached && (
              <button onClick={() => args.increaseBy(2)}>+2</button>
            )}
            <span>
              {args.count} - {args.maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
