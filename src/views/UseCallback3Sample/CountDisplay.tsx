import React from "react";
import styles from "./CountDisplay.module.css";

interface POROPS {
  name: string;
  count: number;
}

const CountDisplay: React.FC<POROPS> = ({ name, count }) => {
  console.log(`display ${name}`);
  return <div className={styles.value}>{count}</div>;
};

export default React.memo(CountDisplay);
