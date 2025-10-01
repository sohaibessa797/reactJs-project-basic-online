// ** productObj == errorsObj (title , description , imgURl , price)
export const productValidation = (product: {
  title: string;
  description: string;
  imgURl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imgURl: string;
    price: string;
  } = {
    title: "",
    description: "",
    imgURl: "",
    price: "",
  };

  // ✅ Title Validation
  if (!product.title.trim()) {
    errors.title = "Title is required";
  } else if (product.title.trim().length < 10) {
    errors.title = "Title must be at least 10 characters";
  } else if (product.title.trim().length > 80) {
    errors.title = "Title must be less than 80 characters";
  }

  // ✅ Description Validation
  if (!product.description.trim()) {
    errors.description = "Description is required";
  } else if (product.description.length < 20) {
    errors.description = "Description must be at least 20 characters";
  }

  // ✅ Image URL Validation
if (!product.imgURl.trim()) {
  errors.imgURl = "Image URL is required";
} else {
  const urlPattern = /^(https?|ftp):\/\/[^\s]+$/i;
  if (!urlPattern.test(product.imgURl.trim())) {
    errors.imgURl = "Please enter a valid image URL (e.g. https://example.com/image.jpg)";
  }
}

  // ✅ Price Validation
  if (!product.price.trim()) {
    errors.price = "Price is required";
  } else if (isNaN(Number(product.price)) || Number(product.price) <= 0) {
    errors.price = "Price must be a positive number";
  }

  return errors;
};
