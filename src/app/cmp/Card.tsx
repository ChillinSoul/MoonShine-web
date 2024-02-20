import Link from "next/link";
import CardInt from "@/types/Card";
const Card = ({ card, key }: { card: CardInt; key: number }) => {
  return (
    <li key={key} className="hover:scale-105">
      <a className="p-2" href={card.link}>
        <div className="h-full w-full rounded border-2 border-purple-500 p-4 hover:bg-sky-700">
          <h2 className="text-3xl text-purple-500">{card.title} </h2>
          <p>{card.description}</p>
        </div>
      </a>
    </li>
  );
};

export default Card;
