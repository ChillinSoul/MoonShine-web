export interface CardInt {
  id: number;
  title: string;
  link: string;
  description: string;
  child?: HTMLElement;
}

export interface CardIntList {
  cards: CardInt[];
}
