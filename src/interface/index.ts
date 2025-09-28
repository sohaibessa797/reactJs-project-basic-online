export interface IProduct {
  id: string;
  title: string;
  description: string;
  imgURl: string;
  price: string;
  colors: string[];
  category: { name: string; imgURL: string };
}

export interface IFormInput {
  id: string;           
  name: string;       
  label: string;
  type: "text" | "textarea" | "number" | "file" | "color" | "select";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; 
}
