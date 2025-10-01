import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, forInputList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interface";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const defaultProductObj = {
    id: "",
    title: "",
    description: "",
    imgURl: "",
    price: "",
    colors: [],
    category: { name: "", imgURL: "" },
  };

  /* ــــــ State ــــــ*/
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imgURl: "",
    price: "",
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
    setErrors({...errors,[name]:''});
  };
  const onCancle = () => {
    closeModal();
    setProduct(defaultProductObj);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // ✅ تحقق من القيم
    const validationErrors = productValidation(product);
    setErrors(validationErrors);

    // ✅ نتأكد هل فيه أي خطأ
    const hasErrors = Object.values(validationErrors).some((err) => err !== "");

    if (hasErrors) {
      console.log("❌ Form has errors");
      return;
    }

    // ✅ لو مافيش أخطاء → نكمل
    console.log("✅ Product submitted", product);

    // ممكن تضيفه للـ list أو تبعته للـ API
    // productList.push(product);

    // نغلق المودال ونرجّع القيم الافتراضية
    onCancle();
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
      <ErrorMessage message={errors[input.name as keyof typeof errors]} />
    </div>
  ));

  return (
    <main className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28">
      <Button
        onClick={openModal}
        className="bg-amber-400 px-10 py-3 text-sm rounded-md mx-auto m-5 block"
      >
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
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
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
                  onClick={onCancle}
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
