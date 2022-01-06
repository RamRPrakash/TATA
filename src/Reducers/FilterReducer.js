import {FILTER_TYPE} from '../Types/FilterTypes'
import response from '../Feed/response.json'


const displayOrder = response.components.filter(item => item.type.toLowerCase() === 'movie-list')

const initialState = {
    FinalList: displayOrder[0]['items'] , 
    FilterType : ''
}

const FilterReducer = (state = initialState , action)=>{
    switch(action.type){
        case FILTER_TYPE : 
            return{
                ...state , 
                FilterType : action.payload
            }
        default : 
            return state
    }
}
export default FilterReducer