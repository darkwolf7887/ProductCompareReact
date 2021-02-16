import React from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    if (nameSearch /* && nameSearch.length > 2 */ ) {
      // nameSearch = nameSearch.toLowerCase();
      // return products.filter((product) => 
      //   product.name.toLowerCase().includes(nameSearch)
      // )
      return products.filter((product) => {
        const price = +product.price.slice(1);
        return price < nameSearch;
      });
    }
    return products;
  };

  return (
    <div className="row mt-3">
      {renderProducts().map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
