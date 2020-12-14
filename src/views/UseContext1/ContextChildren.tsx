import React from "react";
import Grandchild from "./Grandchild";
import styles from "./ContextChildren.module.css";

const ContextChildren: React.FC = () => {
  return (
    <div className={styles.childdiv}>
      <h3>Children</h3>
      <Grandchild />
    </div>
  );
};

export default ContextChildren;
