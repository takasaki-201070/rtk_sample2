import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import data from "../data.json";
import axios from "axios";

type POST = typeof data;

interface SAMPLE_DATA {
  allPosts: POST[];
  selectedPost: POST;
}
type UPDATE_POST = {
  id: number;
};

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

// サンプルデータの取得
export const fetchAsyncGet = createAsyncThunk("sample/get", async () => {
  const res = await axios.get<POST[]>(API_URL);
  return res.data;
});
// サンプルデータの新規作成（正常終了と返ってくるがデータは登録されていない）
export const fetchAsyncCreate = createAsyncThunk(
  "sample/create",
  async (post: POST) => {
    const res = await axios.post<UPDATE_POST>(`${API_URL}`, {
      userid: post.userId,
      title: post.title,
      body: post.body,
    });
    // return res.data;
    return post;
  }
);
// サンプルデータの更新
export const fetchAsyncUpdate = createAsyncThunk(
  "sample/update",
  async (post: POST) => {
    console.log("URL=" + `${API_URL}${post.id}/`);
    const res = await axios.put<UPDATE_POST>(`${API_URL}${post.id}/`, post);
    // return res.data;
    return post;
  }
);
// サンプルデータの削除
export const fetchAsyncDelete = createAsyncThunk(
  "sample/delete",
  async (id: number) => {
    await axios.delete(`${API_URL}${id}/`);
    return id;
  }
);
export const initialState: SAMPLE_DATA = {
  allPosts: [{} as POST],
  selectedPost: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    selectPost(state, action: PayloadAction<POST>) {
      state.selectedPost = action.payload;
    },
    editPost(state, action: PayloadAction<POST>) {
      state.selectedPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    // タスクの取得が正常終了
    builder.addCase(
      fetchAsyncGet.fulfilled,
      (state, action: PayloadAction<POST[]>) => {
        return {
          ...state,
          allPosts: action.payload,
        };
      }
    );
    // タスクの新規作成が正常終了
    builder.addCase(
      fetchAsyncCreate.fulfilled,
      (state, action: PayloadAction<POST>) => {
        return {
          ...state,
          allPosts: [action.payload, ...state.allPosts],
          selectedPost: initialState.selectedPost,
        };
      }
    );
    // タスクの更新の正常終了
    builder.addCase(
      fetchAsyncUpdate.fulfilled,
      (state, action: PayloadAction<POST>) => {
        return {
          ...state,
          allPosts: state.allPosts.map((p) =>
            p.id === action.payload.id ? action.payload : p
          ),
          selectedPost: initialState.selectedPost,
        };
      }
    );

    // タスクの削除の正常終了
    builder.addCase(
      fetchAsyncDelete.fulfilled,
      (state, action: PayloadAction<number>) => {
        return {
          ...state,
          allPosts: state.allPosts.filter((p) => p.id !== action.payload),
          selectedPost: initialState.selectedPost,
        };
      }
    );
  },
});

export const { selectPost, editPost } = sampleSlice.actions;

export const selectAllPosts = (state: RootState) => state.sample.allPosts;
export const selectSelecedtPost = (state: RootState) =>
  state.sample.selectedPost;

export default sampleSlice.reducer;
