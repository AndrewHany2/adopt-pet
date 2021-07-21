import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  petInfoReducer,
  petListReducer,
  postPetReducer,
} from "../reducers/petReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserLoginReducer } from "../reducers/UserReducer";

const reducer = combineReducers({
  pets: petListReducer,
  pet: petInfoReducer,
  petsFrom: postPetReducer,
  userLogin: UserLoginReducer,
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
