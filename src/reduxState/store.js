import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "reduxState/reducers";

export default preloadedState => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};
