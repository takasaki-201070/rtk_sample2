import React, { useState } from "react";
import styles from "./UseMemo1Sample.module.css";

const UseMemoSample: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };

  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  const isOdd = () => {
    //  奇数かどうかを判断する
    let i = 0;
    // 計算時間を長くするためのwhile文
    while (i < 500000000) i++;
    return count1 % 2 !== 0;
  };

  return (
    <div>
      <div>
        <p>useMemoは処理速度を高速化させるための関数である。</p>
        <p>
          このコンポーネントは処理速度が遅い例として、useMemoを未使用の処理内容である。
        </p>
        <p>
          Count1ボタンをクリックした際は、処理速度が遅い処理を実行しているため、画面の表示が切り替わるまでに
        </p>
        <p>時間ががかかるが、Count2をクリックした場合も同様に遅い</p>
        <p>useMemoを使用する事で、Count2をクリックした場合の処理が早くなる</p>
      </div>
      <div className={styles.row}>
        <button className={styles.button} onClick={AddCount1}>
          Count1: {count1}
        </button>

        <br />
        {/* 
        useMemo を使用しない
      */}
        <span>{isOdd() ? "奇数" : "偶数"}</span>
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
