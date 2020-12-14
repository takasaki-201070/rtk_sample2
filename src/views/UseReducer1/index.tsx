import React, { useReducer } from "react";
import styles from "./UseReducer1.module.css";

const initialStete = 0;
const ADD_1 = "add_1";
const MINUS_1 = "minus_1";
const MULTI_3 = "multiple_3";
const RESET = "reset";

const reducer = (currentState: number, action: string) => {
  switch (action) {
    // ＋１をした値を返す
    case ADD_1:
      return currentState + 1;
    // －１をした値を返す
    case MINUS_1:
      return currentState - 1;
    // ×３をした値を返す
    case MULTI_3:
      return currentState * 3;
    // 初期値０を返す
    case RESET:
      return initialStete;
    default:
      return currentState;
  }
};

const UseReducer1: React.FC = () => {
  /* 
    count が保持するstate
    dispatch がJSXから呼び出される関数名
    reducer がstateを更新する関数名
    initialStete がstateの初期値
  */
  const [count, dispatch] = useReducer(reducer, initialStete);

  return (
    <div>
      <div>
        <p>useReducerの第１引数には、更新処理を行う関数を渡す</p>
        <p>useReducerの第２引数には、初期値を渡す</p>
        <p>
          useReducerの戻り値には、保持するための値と処理を呼び出す際の名前を定義する
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.inputArea}>
          <div>
            <p>count</p>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(ADD_1)}
            >
              +
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(MINUS_1)}
            >
              -
            </button>
          </div>
          <div>
            <button
              className={styles.button}
              aria-label="+3"
              onClick={() => dispatch(MULTI_3)}
            >
              ×3
            </button>
            <span> </span>
            <button
              className={styles.button}
              aria-label="reset"
              onClick={() => dispatch(RESET)}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducer1;
