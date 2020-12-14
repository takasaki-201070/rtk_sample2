import React, { useState, useEffect } from "react";
import styles from "./useEffect1Sample.module.css";

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
  }, [count]);

  return (
    <>
      <div>
        <p>
          useEffectの処理は、画面起動時とstateがリダイレクトされるタイミングで実行される。
        </p>
        <p>
          useEffectの第２引数にcountを指定しているため、ステートの中でcountが変わった場合のみリダイレクトする。
        </p>
        <p>count2が変更されても、useEffectは実行されない。</p>
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
    </>
  );
};

export default UseEffect1Sample;
