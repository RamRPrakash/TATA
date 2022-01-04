import {FILTER_TYPE} from './FilterTypes'

export const filterType = (data)=>{
    return {
        type: FILTER_TYPE , 
        payload: data
    }
}