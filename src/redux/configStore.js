import {combineReducers,createStore} from 'redux';
import GameOanTuXiReducer from './GameOanTuXiReducer'

const rootReducer = combineReducers({
    // chua cac reducers con
    GameOanTuXiReducer

})

export const store = createStore(rootReducer)