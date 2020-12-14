import React, { useState } from "react";
import Timer from "./Timer";
import styles from "./useEffect2Sample.module.css";

const UseEffect2Sample: React.FC = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <div>
        <p>
          useEffectの処理は、画面起動時とstateがリダイレクトされるタイミングで実行される。
        </p>
        <p>
          useEffectの第２引数を指定していないため、どのstateでも実行される。
        </p>
        <p>※datetimeを更新しているので、この書き方では無限ループする</p>
        <p>
          useEffectの中でreturnを記述すると、コンポーネント破棄時に処理する内容を記載できる
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.inputArea}>
          <div>
            <p>Timerコンポーネントの表示切替</p>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => setDisplay(!display)}
            >
              表示切替
            </button>
            <p>{display ? "表示" : "非表示"}</p>
          </div>
        </div>
        <div className={styles.dispArea}>{display && <Timer />}</div>
      </div>
    </div>
  );
};

export default UseEffect2Sample;
