import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import { fetchAsyncGet } from "./sampleSlice";
import styles from "./ReduxToolKit2.module.css";
import PostList from "./PostList";
import PostInput from "./PostInput";

const ReduxToolKit2 = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchBootLoader = async () => {
      await dispatch(fetchAsyncGet());
    };
    fetchBootLoader();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <PostList />
      </div>
      <div className={styles.dtail}>
        <PostInput />
      </div>
    </div>
  );
};

export default ReduxToolKit2;
