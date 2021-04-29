import { createStore } from 'redux'
import FilterReducer from './Filter/FilterReducer'

const store = createStore(FilterReducer)
export default store