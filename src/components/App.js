import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

import { useState } from "react"; 
function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkModeOn, setIsDark] = useState(false)
  const appClass = darkModeOn ? "App dark" : "App light"

  function handleClick(e) {
      setIsDark((isDark) => {
       return !isDark
      })
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkModeOn ? "Dark Mode ": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
