import "./App.css";
import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "jma-product-card";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

function App() {
  return (
    <div className="App App-header">
      <h1>Hola mundo</h1>
      <ProductCard
        product={product1}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
