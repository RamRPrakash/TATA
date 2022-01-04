import React ,{useState , useEffect } from 'react'
import MLSelectField from '../../../Components/MLSelectField'
import Response from './Response'
import filterType from '../../../redux'
import {connect} from 'react-redux'

 function MLAppBar(props){
    var ListOfMovies = Response()
    const displayOrder = ListOfMovies.components.filter(item => item.type.toLowerCase() === 'order-select')
    const menuData = displayOrder.map(x=>x.items.map(list=> list.label))
    const [filterValue , setFilterValue] = useState(menuData[0][0])
    //const [selectedDatas, setselectedData] = useState('')
    const handleChange =(e)=>{
        setFilterValue(e.target.value)
        console.log(menuData)
        console.log(e)
        var selectedData =''
        displayOrder.forEach(x=>{
            x.items.forEach((item)=>{
                if(item.label === e.target.value){
                    selectedData = item.valueToOrderBy
                }
            })
        })
        props.filterType(selectedData)
        // console.log(props.filterType(selectedData))
        //setselectedData(selectedData)
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

const mapStateToProps = state => {
    return {
        FinalList: state.FinalList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterType: (data) => dispatch(filterType(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MLAppBar)