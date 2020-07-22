import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware'

// Reducers
import albums from './redux/reducers/albumsReducer'

const createStoreWithMiddleware = applyMiddleware(
    promise
  )(createStore);

export default createStoreWithMiddleware(combineReducers({ albums }));