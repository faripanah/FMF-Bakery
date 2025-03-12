import React from "react";
import styles from "./Menu.module.css"
const ItemInfo = ({ item, onClose }) => {
  return (
    <div className={styles.item-info-overlay}>
      <div className={stylesitem-info}>
        <button className={styles.close-btn} onClick={onClose}>
          &times;
        </button>
        <img src={item.img} alt={item.title} className={styles.item-info-img} />
        <h3 className={styles.item-info-title}>{item.title}</h3>
        <p className={styles.item-info-desc}>{item.desc}</p>
        <p className={styles.item-info-price}>${item.price.toFixed(2)}</p>
        <button className={styles.add-to-cart-btn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemInfo;
