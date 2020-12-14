import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../data.json";
import styles from "./AxiosSample.module.css";

type DATA = typeof data;

const AxiosSample: React.FC = () => {
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
    // axios でgetした結果は then の後ろに記載する処理で使われる
    // 今回は res に渡す
    const fetch = async () => {
      axios
        .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);

          setPosts({ userId: 0, id: 0, title: "", body: "" });
        });
    };
    fetch();

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

export default AxiosSample;
