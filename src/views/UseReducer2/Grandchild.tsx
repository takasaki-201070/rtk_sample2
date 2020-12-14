import React, { useContext } from "react";
import appContext, { ADD_1, MINUS_1, MULTI_3, RESET } from "./AppContext";
import styles from "./Grandchild.module.css";

const Grandchild: React.FC = () => {
  const { dispatchProvided } = useContext(appContext);

  return (
    <div className={styles.root}>
      <h3>Grandchild</h3>
      <div className={styles.row}>
        <div>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatchProvided(ADD_1)}
          >
            +
          </button>
          <span> </span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatchProvided(MINUS_1)}
          >
            -
          </button>
          <span> </span>
          <button
            className={styles.button}
            aria-label="+3"
            onClick={() => dispatchProvided(MULTI_3)}
          >
            ×3
          </button>
          <span> </span>
          <button
            className={styles.button}
            aria-label="reset"
            onClick={() => dispatchProvided(RESET)}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grandchild;
