import { BsCart4 } from "react-icons/bs";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });

  return (
    <div className="relative">
      <BsCart4 className="text-3xl" />
      {products && (
        <p className="flex justify-center items-center w-5 h-5 bg-brand text-white font-semibold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
