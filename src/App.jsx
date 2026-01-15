// src/App.jsx
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";  // Changed from "./ShoppingList"
import ItemForm from "./components/ItemForm";          // Changed from "./ItemForm"
import itemsData from "./data/items";
import "./App.css";

function App() {
  const [items, setItems] = useState(itemsData);
  const [search, setSearch] = useState("");

  const handleSearchChange = (searchText) => {
    setSearch(searchText);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <header>
        <h1>Shopping List</h1>
      </header>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList 
        items={items} 
        search={search}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;