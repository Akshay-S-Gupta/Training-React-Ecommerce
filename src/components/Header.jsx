import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { state } = useCart();
  return (
    <header className="flex justify-between p-4 shadow-md bg-white">
      <Link to="/" className="font-bold text-xl">
        CakeStore
      </Link>
      <nav className="flex gap-4">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({state.items.length})</Link>
      </nav>
    </header>
  );
}
