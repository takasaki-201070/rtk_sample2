import React, { useReducer } from "react";
import AppContext, { ADD_1, MINUS_1, MULTI_3, RESET } from "./AppContext";
import Contexthildren from "./ContextChildren";
import styles from "./UseReducer2.module.css";

const initialStete = 0;

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

const UseReducer2: React.FC = () => {
  /* 
    count が保持するstate
    dispatch がJSXから呼び出される関数名
    reducer がstateを更新する関数名
    initialStete がstateの初期値
  */
  const [count, dispatch] = useReducer(reducer, initialStete);

  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className={styles.row}>
        <h3>Parent</h3>
        <p>useReducerでstateとstateを更新する関数を定義する</p>
        <p>useReducerで定義したstateと関数をuseContextに渡す</p>
        <p>孫コンポーネントからuseContextを介して値の更新を行う</p>
        <span className={styles.value}>{count}</span>
        <Contexthildren />
      </div>
    </AppContext.Provider>
  );
};

export default UseReducer2;
