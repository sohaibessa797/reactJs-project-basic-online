import { v4 as uuidv4 } from "uuid";
import type { IProduct, IFormInput } from "../interface";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "Mercedes-Maybach S-Class",
    description: "Luxury sedan with comfort and advanced technology.",
    imgURl: "https://images.unsplash.com/photo-1508974239320-0a029497e820",
    price: "150000",
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Luxury Cars",
      imgURL: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
  },
  {
    id: uuidv4(),
    title: "BMW X7",
    description: "Full-size luxury SUV with premium features and performance.",
    imgURl:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "120000",
    colors: ["#000000", "#FFFFFF", "#808080"],
    category: {
      name: "SUV",
      imgURL:
        "https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc3V2fGVufDB8fDB8fHww",
    },
  },
  {
    id: uuidv4(),
    title: "Tesla Model S",
    description:
      "High-performance electric sedan with cutting-edge technology.",
    imgURl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "100000",
    colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
    category: {
      name: "Electric Cars",
      imgURL:
        "https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhciUyMHN1dnxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    id: uuidv4(),
    title: "Audi A8",
    description: "Elegant design with state-of-the-art driving assistance.",
    imgURl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "95000",
    colors: ["#FF69B4", "#FF1493", "#C71585"],
    category: {
      name: "Luxury Cars",
      imgURL: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
  },
  {
    id: uuidv4(),
    title: "Porsche Cayenne",
    description: "Luxury SUV combining sportiness with everyday practicality.",
    imgURl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "110000",
    colors: ["#8B0000", "#B22222", "#DC143C"],
    category: {
      name: "SUV",
      imgURL:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
  },
];

export const forInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
    placeholder: "Enter product title",
    required: true,
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter product description",
    required: true,
  },
  {
    id: "image",
    name: "image",
    label: "Product Image",
    type: "file",
    required: false,
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "0.00",
    required: true,
  },
  {
    id: "ctogry",
    name: "ctogry",
    label: "Category",
    type: "select",
    required: true,
    options: [
      { value: "clothing", label: "Clothing" },
      { value: "electronics", label: "Electronics" },
      { value: "kitchen", label: "Kitchen" },
      { value: "accessories", label: "Accessories" },
    ],
  },
  {
    id: "color",
    name: "color",
    label: "Color",
    type: "color",
    required: false,
  },
];
