import { createStore, combineReducers, applyMiddleware } from "redux";
import { petListReducer } from "../reducers/petReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ petList: petListReducer });

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
