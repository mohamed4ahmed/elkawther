import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Products(Menu) - ELKAWTHER MARKET";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
