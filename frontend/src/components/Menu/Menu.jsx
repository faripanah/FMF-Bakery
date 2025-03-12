import React, { useState } from "react";
import Categories from "./Categories";
import ItemInfo from "./ItemInfo";
import menu from "./menuItems";
import "./Menu.module.css";

const allCategories = ["All", ...new Set(menu.map((item) => item.category))];

const Menu = () => {
  const [items, setItems] = useState(menu);
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div className={Styles.menu-container}>
      <h2 className={styles.menu-title}>Our Menu</h2>
      <Categories categories={allCategories} filterItems={filterItems} />
      <div className={styles.menu-grid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.menu-item}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.img} alt={item.title} className={styles.menu-img} />
            <h4 className={styles.menu-item-title}>{item.title}</h4>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemInfo item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Menu;



