import {combineReducers,createStore} from 'redux';
import GameOanTuXiReducer from './GameOanTuXiReducer'
import CineTicketReducer from '../redux/reducer/CineTicketReducer'

const rootReducer = combineReducers({
  // chua cac reducers con
  GameOanTuXiReducer,
  CineTicketReducer
});

export const store = createStore(rootReducer)