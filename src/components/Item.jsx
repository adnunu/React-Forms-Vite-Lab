// src/components/Item.jsx
function Item({ name, category }) {
  return (
    <li className={category.toLowerCase().replace(' ', '-')}>
      <span>{name}</span>
      <span className="category">{category}</span>
    </li>
  );
}

export default Item;