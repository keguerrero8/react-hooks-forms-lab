import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

// const items = [
//   { id: 1, name: "Yogurt", category: "Dairy" },
//   { id: 2, name: "Pomegranate", category: "Produce" },
//   { id: 3, name: "Lettuce", category: "Produce" },
//   { id: 4, name: "String Cheese", category: "Dairy" },
//   { id: 5, name: "Swiss Cheese", category: "Dairy" },
//   { id: 6, name: "Cookies", category: "Dessert" },
// ];

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
