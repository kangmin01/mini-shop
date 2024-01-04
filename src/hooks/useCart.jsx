import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["carts", uid || ""], // 사용자별로 캐시가 이루어진다.
    queryFn: () => getCart(uid),
    enabled: !!uid, // 사용자가 없는 경우 쿼리가 수행되지 않도록 한다.
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]), // 로그인한 사용자의 카트만!
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
