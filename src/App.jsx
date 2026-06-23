import "./App.css";
import Card from "./components/Card";
import ProductCard from "./components/ProductCard";

function App() {
  //  React Basic Mission - 1
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  const { name, price, brand } = product;

  //  React Basic Mission - 2
  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" },
  ];

  return (
    <main>
      <h1>React Basic Mission</h1>

      <section>
        <h2>어제 연습: 단일 상품</h2>

        <Card name={name} price={price} brand={brand} />
      </section>

      <section>
        <h2>오늘 과제: 상품 목록</h2>

        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            brand={product.brand}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
