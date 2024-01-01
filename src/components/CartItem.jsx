import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = (e) => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = (e) =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = (e) => removeFromCart(uid, id);

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <AiOutlineMinusSquare onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} />
          <RiDeleteBin6Line onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
