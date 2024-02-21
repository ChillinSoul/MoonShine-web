"use client";
import Link from "next/link"; // Import Link from next/link
import CardInt from "@/types/Card";

// Remove `key` from the component props
const Card = ({ card }: { card: CardInt }) => {
  return (
    <li className="hover:scale-105">
      {/* Use Link for client-side navigation. Note that the `a` tag is still used but as a child of Link */}
      <Link legacyBehavior href={card.link} className="p-2">
        <a>
          <div className="h-full w-full rounded border-2 border-purple-500 p-4 hover:bg-purple-300">
            <h2 className="text-3xl text-purple-900">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Card;
