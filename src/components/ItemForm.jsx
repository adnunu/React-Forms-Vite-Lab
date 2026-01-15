// Update src/components/ItemForm.jsx
import { useState } from "react";

function ItemForm({ onItemFormSubmit = () => {} }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) return;
    
    const newItem = {
      id: Date.now().toString(),  // Convert to string
      name: name.trim(),
      category: category
    };
    
    onItemFormSubmit(newItem);
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Canned Goods">Canned Goods</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;