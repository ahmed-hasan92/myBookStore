import "./App.css";
import products from "./products";
function App() {
  const productList = products.map((product) => {
    return (
      <div className="child">
        <img src={product.image} alt=""></img>
        <h6>{product.name}</h6>
        <h6>{product.price}kd</h6>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>MY bookShop</h1>
      <p>The first book shop in the world contains useless books</p>
      <img
        src="https://media.istockphoto.com/id/120004828/photo/books-stacked-on-table-at-bookstore.jpg?s=612x612&w=0&k=20&c=NtNzx4xdP-6Dd3eomX2mf_-w2-JJhYbndBwLFRdCetY="
        alt="book"
      ></img>
      <div className="parent">{productList}</div>
    </div>
  );
}

export default App;
