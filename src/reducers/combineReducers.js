import {combineReducers} from 'redux'
import { gridReducer } from './gridReducer'

const rootReducer = combineReducers({
    gridReducer: gridReducer,
})

export default rootReducer