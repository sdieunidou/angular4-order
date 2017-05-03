export class OrderRow {
  title: string;
  author: string;
  price: number;
  quantity: number;

  constructor(
    title: string,
    author: string,
    price: number,
    quantity: number
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}
