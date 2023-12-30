import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { MdAddBox } from "react-icons/md";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FcShop />
        <h1>Mini Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-xl">
          <MdAddBox />
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
