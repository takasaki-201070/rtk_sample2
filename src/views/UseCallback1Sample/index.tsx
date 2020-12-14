import React, { useState } from "react";
import CountDisplay from "./CountDisplay";
import CountClick from "./CountClick";
import styles from "./UseCallback1Sample.module.css";

const UseCallback1Sample: React.FC = () => {
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
        ※コンソールへログを出力しているので、ログの出力内容から動作状況を確認すること。
      </p>
      <p>
        AddCount1ボタンをクリックした場合、count1とcount2のボタンと値表示のコンポーネントが
      </p>
      <p>
        両方とも読み込まれている。コンポーネントを再利用する際に、子のコンポーネント全てが再読み込み
      </p>
      <p>されることによって、パフォーマンスが悪くなる。</p>
      <CountDisplay name="count1" count={count1} />
      <CountClick handleClick={AddCount1}>AddCount1</CountClick>
      <p> </p>
      <CountDisplay name="count2" count={count2} />
      <CountClick handleClick={AddCount2}>AddCount2</CountClick>
    </div>
  );
};

export default UseCallback1Sample;
