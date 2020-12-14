import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import {
  fetchAsyncUpdate,
  fetchAsyncCreate,
  fetchAsyncDelete,
  editPost,
  selectAllPosts,
  selectSelecedtPost,
  initialState,
} from "./sampleSlice";

const useStyles = makeStyles((theme: Theme) => ({
  btngroup: {
    flexDirection: "row",
    marginBottom: "20px",
    width: "50%",
  },

  btn: {
    margin: "10px",
  },

  inputroot: {
    margin: "40px auto",
    width: "80%",
    display: "flex",
    flexDirection: "column",
  },
  text_no: {
    margin: theme.spacing(2),
    width: "80px",
    align: "right",
  },
  text_title: {
    margin: theme.spacing(2),
    minWidth: 300,
    width: "80%",
  },
}));

const PostInput: React.FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();

  const selectedPost = useSelector(selectSelecedtPost);
  const allPosts = useSelector(selectAllPosts);

  const updateDisable = selectedPost.title === "" || selectedPost.body === "";
  const deleteDisable = selectedPost.id === 0;
  const cancelDisable = updateDisable === true && deleteDisable === true;

  // 何か入力されている場合
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | number = e.target.value;
    const name = e.target.name;
    dispatch(editPost({ ...selectedPost, [name]: value }));
  };

  // 登録ボタンクリック
  const handleUpdateClick = async () => {
    if (selectedPost.id === 0) {
      let id = allPosts.length + 1;
      const result = await dispatch(
        fetchAsyncCreate({
          id: id,
          title: selectedPost.title,
          body: selectedPost.body,
          userId: 0,
        })
      );
      // 登録処理が異常終了した場合
      if (fetchAsyncCreate.fulfilled.match(result)) {
        await dispatch(editPost(initialState.selectedPost));
      }
    } else {
      const result = await dispatch(fetchAsyncUpdate(selectedPost));
      // 登録処理が異常終了した場合
      if (fetchAsyncUpdate.fulfilled.match(result)) {
        await dispatch(editPost(initialState.selectedPost));
      } else {
        alert(result.error.message);
        alert(result.error.name);
      }
    }
  };
  // 取消ボタンクリック
  const handleCancelClick = async () => {
    await dispatch(editPost(initialState.selectedPost));
  };

  // 削除ボタンクリック
  const handleDeleteClick = async () => {
    const result = await dispatch(fetchAsyncDelete(selectedPost.id));
    // 削除処理が異常終了した場合
    if (fetchAsyncUpdate.fulfilled.match(result)) {
      await dispatch(editPost(initialState.selectedPost));
    }
  };
  return (
    <div className={classes.inputroot}>
      <p>
        コンポーネント呼び出し時に、useEffect を使用してデータを取得している。
        <br />
        ※データ取得時は、useDispatchを介してslice内に定義したAPIを実行する。
        <br />
        APIはcreateAsyncThunkを使用して定義しているため、処理終了後にextraReducers
        に定義した処理が実行される
        <br />
        extraReducersでは、正常終了時に処理はfulfilled、異常終了時の処理はrejected、
        処理中の処理はpendingにて記述する。
        <br />
        一覧のデータをクリックすると、slice へクリックしたデータを格納している。
        <br />
        ※一覧クリック時は、useDispatchを介してslice内にReducerを実行する。
      </p>
      <p>
        一覧でクリックされたデータは下記に表示され、更新・削除が可能になる。
        <br />
        一覧をクリックせずに入力したデータは追加処理が実行され、一覧の一番上に表示される。
        <br />
        ※追加・更新・削除はデータ取得時と同様に、useDispatchを介してslice内に定義したAPIを実行する。
      </p>
      <div className={classes.btngroup}>
        <Button
          variant="contained"
          color="primary"
          disabled={updateDisable}
          className={classes.btn}
          onClick={handleUpdateClick}
        >
          {selectedPost.id === 0 ? "追加" : "更新"}
        </Button>
        <Button
          variant="contained"
          disabled={cancelDisable}
          className={classes.btn}
          onClick={() => {
            handleCancelClick();
          }}
        >
          取消
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={deleteDisable}
          className={classes.btn}
          onClick={() => {
            handleDeleteClick();
          }}
        >
          削除
        </Button>
      </div>

      <TextField
        className={classes.text_no}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
        }}
        label="No"
        name="id"
        value={selectedPost.id}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.text_title}
        InputLabelProps={{
          shrink: true,
        }}
        label="タイトル"
        multiline
        rowsMax={4}
        type="title"
        name="title"
        value={selectedPost.title}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.text_title}
        InputLabelProps={{
          shrink: true,
        }}
        label="内容"
        multiline
        rowsMax={8}
        type="body"
        name="body"
        value={selectedPost.body}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PostInput;
