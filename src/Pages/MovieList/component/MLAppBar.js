import React ,{useState } from 'react'
import MLSelectField from '../../../Components/MLSelectField'
import Response from './Response'
export default function MLAppBar({ selectedFilter}){
    var ListOfMovies = Response()
    const displayOrder = ListOfMovies.components.filter(item => item.type.toLowerCase() === 'order-select')
    const menuData = displayOrder.map(x=>x.items.map(list=> list.label))
    const [filterValue, setFilterValue] = useState()
    const handleChange =(e)=>{
        setFilterValue(e.target.value)
        var selectedData =''
        displayOrder.map(x=>{
            x.items.map((item)=>{
                if(item.label === e.target.value){
                    selectedData = item.valueToOrderBy
                }
            })
        })
        selectedFilter(selectedData)
    }
    return (
        <div className="appBar" >
            <h3 style={{width : '50%'}}>80's Favourite Movies</h3>
            <MLSelectField onChange={handleChange} menuData={menuData[0]} value={filterValue} />
        </div>
    )
}