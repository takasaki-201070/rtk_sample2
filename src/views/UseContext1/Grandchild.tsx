import React, { useContext } from "react";
import AppContext from "./AppContext";
import styles from "./Grandchild.module.css";

const Grandchild: React.FC = () => {
  const value = useContext(AppContext);

  return (
    <div className={styles.grandchilddiv}>
      <h3>Grandchild</h3>
      <p>useContextを使用して、createContextで定義された値を参照する</p>
      <p> {value}</p>
    </div>
  );
};

export default Grandchild;
