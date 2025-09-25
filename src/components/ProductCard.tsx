import type { IProduct } from "../interface";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product:IProduct
}

const ProductCard = ({product}: IProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 bg-white mx-auto">
      {/* Product Image */}
      <Image
        src={
          product.imgURl
        }
        alt={"hands"}
        className={"w-full h-48 object-cover rounded-md"}
      />

      {/* Product Name */}
      <h1 className="text-lg xl:text-base font-semibold mt-3 text-gray-800">
        {textSlicer( product.title,20)}
      </h1>

      {/* Short Description */}
      <p className="my-2 text-sm text-gray-600 leading-relaxed">
        {textSlicer(product.description,50)}
      </p>

      {/* Color choices */}
      <div className="flex space-x-2 my-3">
        <span className="w-6 h-6 bg-indigo-600 rounded-full cursor-pointer border border-gray-200" />
        <span className="w-6 h-6 bg-fuchsia-600 rounded-full cursor-pointer border border-gray-200" />
        <span className="w-6 h-6 bg-sky-600 rounded-full cursor-pointer border border-gray-200" />
      </div>

      {/* Price and category icon */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-gray-900">{product.category.name}</span>
        <Image
          src={
            product.category.imgURL
          }
          alt={product.category.name}
          className={"w-10 h-10 rounded-full object-cover"}
        />
      </div>

      {/* buttons */}
      <div className="flex gap-3 mt-5">
        {/* children */}
        <Button
          className={"bg-indigo-600 hover:bg-indigo-700"}
          onClick={() => {
            console.log("clicked on edit");
          }}
        >
          Edit
        </Button>

        <Button
          className={"bg-red-600 hover:bg-red-700 active:bg-red-800"}
          onClick={() => {
            console.log("clicked on destroy");
          }}
        >
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
