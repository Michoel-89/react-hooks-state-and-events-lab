import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? 'in-cart' : ''
  function handleClick(e) {
    setInCart(inCart => !inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{ inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
