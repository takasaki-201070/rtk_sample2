import React from "react";
import styles from "./CountClick.module.css";

interface POROPS {
  handleClick: VoidFunction;
  children: string;
}
const CountClick: React.FC<POROPS> = ({ handleClick, children }) => {
  console.log("clicked", children);
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          handleClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(CountClick);
