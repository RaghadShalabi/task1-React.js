import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const product = {
    name: "IPhone 14",
    price: 1200,
    description: "A premium smartphone with a advanced features.",
  };

  const increment = () => setCounter(counter + 1);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increase</button>
      <br />
      <button onClick={() => setIsShow(!isShow)}>Show Product</button>
      <section style={{ display: isShow ? "block" : "none" }}>
        <h1>Product Details</h1>
        <p>
          <b>Name:</b> {product.name}
        </p>
        <p>
          <b>Price:</b> ${product.price}
        </p>
        <p>
          <b>Description:</b> {product.description}
        </p>
      </section>
    </div>
  );
}

export default App;
