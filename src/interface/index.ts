export interface IProduct {
  id: string;
  title: string;
  description: string;
  imgURl: string;
  price: string;
  colors: string[];
  category: { name: string; imgURL: string };
}
