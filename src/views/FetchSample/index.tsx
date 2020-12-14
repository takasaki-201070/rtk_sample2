import React, { useState, useEffect } from "react";
import data from "../data.json";
import styles from "./FetchSample.module.css";

type DATA = typeof data;

const FetchSample: React.FC = () => {
  const [posts, setPosts] = useState<DATA>({} as DATA);
  const [id, setId] = useState<number>(1);
  const [clicked, setClicked] = useState<boolean>(false);

  // ボタンクリック時に呼び出される関数
  const handlerClicked = async () => {
    setClicked(!clicked);
  };

  // カテゴリ入力した際の値
  const handleInputTextChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as number;
    setId(value);
  };

  useEffect(() => {
    // JavaScripts のfetchメソッドで取得する
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });

    // ,[clicked]を指定する事で、ボタンクリックした事に反応する
  }, [clicked]);

  return (
    <div className={styles.row}>
      <input
        type="text"
        value={id}
        onChange={(evt) => handleInputTextChange(evt)}
      />
      <br />
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handlerClicked();
        }}
      >
        Get post
      </button>
      <br />
      <p> id: {posts.id} </p>
      <p> title: {posts.title} </p>
      <p> body: {posts.body} </p>
    </div>
  );
};

export default FetchSample;
