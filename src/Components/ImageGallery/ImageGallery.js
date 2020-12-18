import React from "react";
import styles from "./Imagegallery.module.css";

export default function ImageGallery({ children }) {
  return (
    <div className={styles["container"]}>
      <ul className={styles["ImageGallery"]}>{children}</ul>
    </div>
  );
}
