import { createStore, combineReducers } from "redux";

// Reducers
import albums from './redux/reducers/albumsReducer'

export default createStore(combineReducers({ albums }));