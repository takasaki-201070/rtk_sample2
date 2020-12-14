import React from "react";
import AppContext from "./AppContext";
import Contexthildren from "./ContextChildren";
import styles from "./UseContext1.module.css";

const UseContext1: React.FC = () => {
  return (
    <AppContext.Provider value={"value from index.tsx"}>
      <div className={styles.row}>
        <h3>Parent</h3>
        <p>AppContextに定義した値を孫コンポーネントから参照される</p>
        <p>値の更新はuseReducerで処理する</p>
        <Contexthildren />
      </div>
    </AppContext.Provider>
  );
};

export default UseContext1;
