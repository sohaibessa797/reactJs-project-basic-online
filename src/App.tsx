import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
      <Button className={"bg-indigo-600 hover:bg-indigo-700 w-full items-center "} onClick={openModal}>Add</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      
      <div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
          <Button className={"bg-indigo-600 hover:bg-indigo-700"} onClick={openModal}>Submit</Button>
          <Button className={"bg-red-600 hover:bg-red-700 active:bg-red-800"} onClick={closeModal}>Cansle</Button>
        </Modal>
      </div>
    </main>
  );
};

export default App;
