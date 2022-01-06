import {FILTER_TYPE} from '../Types/FilterTypes'

export const filterType = (data)=>{
    return {
        type: FILTER_TYPE , 
        payload: data
    }
}