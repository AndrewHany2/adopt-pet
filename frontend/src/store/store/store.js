import { createStore, combineReducers, applyMiddleware } from "redux";
import { petInfoReducer, petListReducer } from "../reducers/petReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ pets: petListReducer, pet: petInfoReducer });

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
