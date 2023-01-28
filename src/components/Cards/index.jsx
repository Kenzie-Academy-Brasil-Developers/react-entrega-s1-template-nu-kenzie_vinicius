import { FaTrash } from "react-icons/fa";
import "./style.css";

export function RenderCards({ name, type, price, cards, index, setCard }) {
  function classNameVerf() {
    if (type === "Entrada") {
      return "card input";
    } else {
      return "card output";
    }
  }

  function deleteCard() {
    cards().splice(index, 1);

    setCard(cards());
  }

  return (
    <li className={classNameVerf()}>
      <div>
        <h3>{name}</h3>
        <span>{type}</span>
      </div>
      <span>R$ {price}</span>
      <FaTrash onClick={deleteCard} />
    </li>
  );
}
