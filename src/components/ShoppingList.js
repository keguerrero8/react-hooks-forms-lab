import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// const items = [
//   { id: 1, name: "Yogurt", category: "Dairy" },
//   { id: 2, name: "Pomegranate", category: "Produce" },
//   { id: 3, name: "Lettuce", category: "Produce" },
//   { id: 4, name: "String Cheese", category: "Dairy" },
//   { id: 5, name: "Swiss Cheese", category: "Dairy" },
//   { id: 6, name: "Cookies", category: "Dessert" },
// ];

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchWord] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch (event) {
    setSearchWord(event.target.value)
  }

  //depending on what is typed into the search field in Filter component, we need to update this list
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    if (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return true
    }
    return false
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
