import counterReducer from './counter';
import LoggedReducer from './isLoged';
import {combineReducers} from "redux"


const allReducers = combineReducers({
    counterReducer : counterReducer,
    LoggedReducer : LoggedReducer,
})

export default allReducers
