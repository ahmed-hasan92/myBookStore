import ProductItem from "./ProductItem";

let products = [
  {
    name: "The book of all books",
    price: 14,
    image:
      "https://cdn.penguin.co.uk/dam-assets/books/9780141992860/9780141992860-jacket-large.jpg",
  },
  {
    name: "The empty book",
    price: 0.5,
    image: "https://m.media-amazon.com/images/I/51QhRz77fTL.jpg",
  },
  {
    name: "The book of nothing",
    price: 1,
    image:
      "https://m.media-amazon.com/images/I/61QzYdkKuYL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "A book of stupid stuff",
    price: 2,
    image: "https://m.media-amazon.com/images/I/413OQxByz3L.jpg",
  },
  {
    name: "The dump book",
    price: 4.5,
    image:
      "https://production.builder.blurb.com/pdf-processing/files/P13464403-b9113384251a714a74100c7000cf54f814966c4f2370ee5981d43efe3c417856?Expires=1696168455",
  },
];

const ProductList = () => {
  const productList = products.map((product) => {
    return <ProductItem product={product} />;
  });

  return <div className="parent">{productList}</div>;
};

export default ProductList;
