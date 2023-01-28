import { RenderCards } from "../Cards";
import "./style.css";

export function UlRenderCard({ cards, setCard }) {
  return (
    <ul className="cards__list">
      {cards().map((card, index) => (
        <RenderCards
          name={card.description}
          type={card.type}
          price={card.value}
          key={card.id}
          cards={cards}
          index={index}
          setCard={setCard}
        />
      ))}
    </ul>
  );
}
