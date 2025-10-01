import { useState, type ChangeEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, forInputList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interface";

const App = () => {
  /* ــــــ State ــــــ*/
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    id: "",
    title: "",
    description: "",
    imgURl: "",
    price: "",
    colors: [],
    category: { name: "", imgURL: "" },
  });

  /* ــــــ Handler ــــــ*/
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  /* ــــــ Render ــــــ*/
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = forInputList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        htmlFor={input.id}
        className="text-sm font-medium text-gray-700 mb-1"
      >
        {input.label}
      </label>
      <Input
        type={input.type || "text"}
        placeholder={input.placeholder}
        name={input.name}
        id={input.id}
        onChange={onChangeHandler}
        value={product[input.name]}
      />
    </div>
  ));

  return (
    <main className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
      <Button onClick={openModal} className="bg-amber-400 w-full">
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      <div>
        <div>
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title="Add A New Product"
          >
            <form className="flex flex-col gap-4">
              {renderFormInputList}
              <div className="flex justify-end gap-3 mt-4">
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800"
                  onClick={closeModal}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </main>
  );
};

export default App;
