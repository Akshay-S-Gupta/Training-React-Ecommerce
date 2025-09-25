import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function SingleProduct() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="my-4" />
      <p className="mb-2">${product.price}</p>
      <button
        className="bg-pink-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
}
