import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../views/ReduxToolKit1/counterSlice";
import sampleReducer from "../views/ReduxToolKit2/sampleSlice";
import errorReducer from "../views/ReduxToolKit2/errorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sample: sampleReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
