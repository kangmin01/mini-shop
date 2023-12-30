import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { MdAddBox } from "react-icons/md";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useEffect, useState } from "react";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FcShop />
        <h1>Mini Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-xl">
            <MdAddBox />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
