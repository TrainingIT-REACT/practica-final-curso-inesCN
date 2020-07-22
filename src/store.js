import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware'

// Reducers
import albums from './redux/reducers/albumsReducer'
import songs from './redux/reducers/songsReducer'
import user from './redux/reducers/userReducer';


const createStoreWithMiddleware = applyMiddleware(
    promise
  )(createStore);

export default createStoreWithMiddleware(combineReducers({ albums, songs, user }));