import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img src={product.image} alt={product.name} className="mb-4" />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>${product.price}</p>
      <div className="flex gap-2 mt-2">
        <button
          className="bg-pink-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="border px-3 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
}
