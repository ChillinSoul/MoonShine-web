interface CardInt {
  id: number;
  title: string;
  link: string;
  description: string;
}
export default CardInt;

export interface CardIntList {
  cards: CardInt[];
}
