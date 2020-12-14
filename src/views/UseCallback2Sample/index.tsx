import React, { useState } from "react";
import CountDisplay from "./CountDisplay";
import CountClick from "./CountClick";
import styles from "./UseCallback2Sample.module.css";

const UseCallback2Sample: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };

  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  return (
    <div className={styles.row}>
      <p>
        子コンポーネントの export に React.memo
        を追加することで、ボタンをクリック時にの
      </p>
      <p>コンポーネント再読み込みを抑止できる</p>
      <CountDisplay name="count1" count={count1} />
      <CountClick handleClick={AddCount1}>AddCount1</CountClick>
      <p> </p>
      <CountDisplay name="count2" count={count2} />
      <CountClick handleClick={AddCount2}>AddCount2</CountClick>
    </div>
  );
};

export default UseCallback2Sample;
