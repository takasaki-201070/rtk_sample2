import React, { useState, useEffect } from "react";
import styles from "./useEffect3Sample.module.css";

const UseEffect1Sample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [datetime, setDatetime] = useState<string[]>([]);

  useEffect(() => {
    const date1 = new Date();
    const date2 =
      date1.getFullYear() +
      "/" +
      (date1.getMonth() + 1) +
      "/" +
      date1.getDate() +
      " " +
      date1.getHours() +
      ":" +
      date1.getMinutes() +
      ":" +
      date1.getSeconds();
    setDatetime([...datetime, date2]);
  }, []);

  return (
    <div>
      <div>
        <p>useEffectの処理は、コンポーネントの起動時に実行される。</p>
        <p>
          useEffectの第２引数にcountを指定していない場合は、コンポーネントの起動時のみ実行する。
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.inputArea}>
          <div>
            <p>count</p>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
          <div>
            <p>count2</p>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => {
                setCount2(count + 1);
              }}
            >
              +
            </button>
            <span className={styles.value}>{count2}</span>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => {
                setCount2(count - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className={styles.dispArea}>
          {datetime && (
            <ul>
              {datetime.map((date) => (
                <li key={date.length}>{date}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseEffect1Sample;
