import React, { useState, useCallback } from "react";
import CountDisplay from "./CountDisplay";
import CountClick from "./CountClick";
import styles from "./UseCallback3Sample.module.css";

const UseCallback3Sample: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, [count1]);

  const AddCount2 = useCallback(() => {
    setCount2((prevCount2) => prevCount2 + 1);
  }, [count2]);

  return (
    <div className={styles.row}>
      <p>
        useCallback を使用する事で値の表示時も変更された state
        に対応するコンポーネントのみが
      </p>
      <p>再読み込みされる</p>
      <CountDisplay name="count1" count={count1} />
      <CountClick handleClick={AddCount1}>AddCount1</CountClick>
      <p> </p>
      <CountDisplay name="count2" count={count2} />
      <CountClick handleClick={AddCount2}>AddCount2</CountClick>
    </div>
  );
};

export default UseCallback3Sample;
