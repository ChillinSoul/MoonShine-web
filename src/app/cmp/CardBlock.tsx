import CardInt, { CardIntList } from "@/types/Card";
import Card from "./Card";

export default function CardList({ cards }: CardIntList) {
  return (
    <div className="card-list">
      <div className="flex items-center space-x-4">
        <a href="/"> Home</a>
        <a href="/user"> Profile</a>
        <a href="/login"> Login</a>
        <a href="/settings">Settings</a>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards?.map((card: CardInt) => <Card key={card.id} card={card} />)}
      </ul>
    </div>
  );
}
