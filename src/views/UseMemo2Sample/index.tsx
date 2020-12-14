import React, { useState, useMemo } from "react";
import styles from "./UseMemo2Sample.module.css";

const UseMemoSample: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };

  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  //  奇数かどうかを判断する
  const isOdd = useMemo(() => {
    let i = 0;
    // 計算時間を長くするためのwhile文
    while (i < 500000000) i++;
    return count1 % 2 !== 0;
  }, [count1]);

  return (
    <div>
      <div>
        <p>
          useMemoを使用しているため、Count2をクリックした際は、すぐに画面の表示が変わる。
        </p>
      </div>
      <div className={styles.row}>
        <button className={styles.button} onClick={AddCount1}>
          Count1: {count1}
        </button>

        <br />
        {/* 
        useMemo を使用しない
      */}
        <span>{isOdd ? "奇数" : "偶数"}</span>
      </div>
      <span> </span>
      <div className={styles.row}>
        <button className={styles.button} onClick={AddCount2}>
          Count2: {count2}
        </button>
      </div>
    </div>
  );
};

export default UseMemoSample;
