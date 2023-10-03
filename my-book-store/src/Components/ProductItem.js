import React from "react";

const ProductItem = (props) => {
  return (
    <div className="child">
      <img src={props.product.image} />
      <h6>{props.product.name}</h6>

      <h6>{props.product.price}</h6>
    </div>
  );
};

export default ProductItem;
