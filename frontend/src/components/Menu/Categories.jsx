import React from "react";
import styles from "./Menu.module.css"
const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.categories-container}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={styles.category-btn}
          onClick={() => filterItems(category)}>
           {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;