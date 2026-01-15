// src/components/ShoppingList.jsx
import { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items = [], search: externalSearch, onSearchChange: externalOnSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [internalSearch, setInternalSearch] = useState("");

  // Use external props if provided, otherwise use internal state
  const search = externalSearch !== undefined ? externalSearch : internalSearch;
  const handleSearchChange = externalOnSearchChange !== undefined ? externalOnSearchChange : setInternalSearch;

  const filteredItems = items.filter((item) => {
    if (!item) return false;
    
    // Category filter
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    
    // Search filter
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="ShoppingList">
      <Filter search={search} onSearchChange={handleSearchChange} />
      <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Canned Goods">Canned Goods</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;