import { createContext, Dispatch } from "react";

export const ADD_1 = "add_1";
export const MINUS_1 = "minus_1";
export const MULTI_3 = "multiple_3";
export const RESET = "reset";

export interface CONTEXT {
  countProvided: number;
  dispatchProvided: Dispatch<string>;
}

const AppContext = createContext({} as CONTEXT);

export default AppContext;
