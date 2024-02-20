import CardInt, { CardIntList } from "@/types/Card";
import Card from "./Card";

export default function CardList({ cards }: CardIntList) {
  return (
    <div className="card-list">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards?.map((card: CardInt) => <Card key={card.id} card={card} />)}
      </ul>
    </div>
  );
}
