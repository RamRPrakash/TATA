import { createStore , combineReducers } from 'redux'
import FilterReducer from './Reducers/FilterReducer'


const reducer = combineReducers({
    filterData : FilterReducer
})

const store = createStore(reducer)
export default store