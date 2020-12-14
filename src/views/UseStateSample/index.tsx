import React, { useState } from "react";
import styles from "./UseStateSample.module.css";
import { TextField } from "@material-ui/core";

interface ARRTYPE {
  id: number;
  name: string;
}

const UseStateSample: React.FC = () => {
  /* 
    count がstateを格納する変数
    setCount がstateの値を更新する関数
  */
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [obj, setObj] = useState({ text1: "", text2: "", num1: 0 });
  const [arrayText, setarrayText] = useState<ARRTYPE[]>([]);

  const newArryaPush = () => {
    setarrayText([...arrayText, { id: arrayText.length, name: "Hello react" }]);
  };

  return (
    <>
      <div>
        <p>useStateの引数には、stateの初期値を渡す</p>
        <p>
          useStateの戻り値には、stateの値を格納する変数と、stateを更新する関数名を定義する
        </p>
        <h3>数値のカウントアップ</h3>
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
        <h3>テキスト入力</h3>
        <TextField
          className={styles.textbox}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <span className={styles.textvalue}>{text}</span>
      </div>
      <div>
        <h3>一度に複数の処理（片方の処理しか実行されない）</h3>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            setCount2(count2 + 1);
            setCount2(count2 + 1);
          }}
        >
          +
        </button>
        <span className={styles.value}>{count2}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            setCount2(count2 - 1);
            setCount2(count2 - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <h3>一度に複数の処理（両方の処理が実行される）</h3>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            setCount3((prevCount) => prevCount + 1);
            setCount3((prevCount) => prevCount + 1);
          }}
        >
          +
        </button>
        <span className={styles.value}>{count3}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            setCount3((prevCount) => prevCount - 1);
            setCount3((prevCount) => prevCount - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <h3>オブジェクト型の保持</h3>
        <div>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => setObj({ ...obj, num1: obj.num1 + 1 })}
          >
            +
          </button>
          <span className={styles.value}>{obj.num1}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => setObj({ ...obj, num1: obj.num1 - 1 })}
          >
            -
          </button>
        </div>
        <div>
          <TextField
            variant="outlined"
            label="テキスト１"
            name="テキスト１"
            className={styles.textbox}
            onChange={(e) => {
              setObj({ ...obj, text1: e.target.value });
            }}
          />
          <span className={styles.textvalue}>{obj.text1}</span>
        </div>
        <div>
          <TextField
            variant="outlined"
            label="テキスト２"
            className={styles.textbox}
            onChange={(e) => {
              setObj({ ...obj, text2: e.target.value });
            }}
          />
          <span className={styles.textvalue}>{obj.text2}</span>
        </div>
      </div>

      <div>
        <h3>配列へ追加</h3>
        <button onClick={newArryaPush} className={styles.button}>
          追加
        </button>
        {arrayText[0]?.name && (
          <ul>
            {arrayText.map((arr) => (
              <li key={arr.id}>
                id: {arr.id}-{arr.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UseStateSample;
