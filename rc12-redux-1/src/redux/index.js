import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const reducers = combineReducers({ //burada reducerlarım birden fazla olduğu için combine ediyorum
  counterReducer: counterReducer,
  todoReducer : todoReducer
});

export const myStore = createStore(reducers);

// burada reducer bize manupule etme şansı veriyor.