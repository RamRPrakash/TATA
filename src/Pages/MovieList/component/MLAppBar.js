import React ,{useState , useEffect } from 'react'
import { useDispatch  } from 'react-redux'
import MLSelectField from '../../../Components/MLSelectField'
import {filterType} from '../../../Action/FilterAction'
import response from '../../../Feed/response.json'


 function MLAppBar(){
    const displayOrder = response.components.filter(item => item.type.toLowerCase() === 'order-select')
    const menuData = displayOrder.map(x=>x.items.map(list=> list.label))
    const [filterValue , setFilterValue] = useState(menuData[0][0])
    const dispatch = useDispatch()
    const handleChange =(e)=>{
        setFilterValue(e.target.value)
        var selectedData =''
        displayOrder.forEach(x=>{
            x.items.forEach((item)=>{
                if(item.label === e.target.value){
                    selectedData = item.valueToOrderBy
                }
            })
        })
        dispatch(filterType(selectedData))
    }
    useEffect(()=>{
        const data = {target : {value : menuData[0][0]}}
        handleChange(data)

         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="appBar" >
            <h3 style={{width : '50%'}}>80's Favourite Movies</h3>
            <MLSelectField onChange={handleChange} menuData={menuData[0]} value={filterValue} />
        </div>
    )
}


export default MLAppBar