import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = errorSlice.actions;

export const selectCount = (state: RootState) => state.error.value;

export default errorSlice.reducer;
