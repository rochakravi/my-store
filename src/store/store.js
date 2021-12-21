import { createStore } from "redux";
import buyReducer from "./reducers";

const store = createStore(buyReducer)

export default store;