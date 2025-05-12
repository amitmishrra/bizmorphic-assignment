import { legacy_createStore as createStore, combineReducers } from "redux";
import themeReducer from "./reducer/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
