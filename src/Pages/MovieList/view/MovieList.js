import React  from 'react'
import MLAppBar from '../component/MLAppBar'
import MLMovieCard from '../component/MLMovieCard'
import Grid from '@material-ui/core/Grid'; 
import {  useSelector } from 'react-redux'
import blade_Runner from '../../../Asserts/images/blade_Runner.jpg'
import gremlins from '../../../Asserts/images/gremlins.jpg'
import raiders from '../../../Asserts/images/raiders.jpg'
import terminator from '../../../Asserts/images/terminator.jpg'
import total_Recall from '../../../Asserts/images/total_Recall.jpg'

function MovieList(){
    const data = useSelector(store=>store.filterData)
    data.FinalList.sort((a, b) => b[data.FilterType] - a[data.FilterType]);

    const setImages=(imgName)=>{
        switch(imgName){
            case 'blade_Runner':
                return blade_Runner
            case 'gremlins':
                return gremlins 
            case 'raiders' : 
                return raiders
            case 'terminator' : 
                return terminator 
            case 'total_Recall' : 
                return total_Recall
            default :
            return "https://preview.ibb.co/h9434U/blade_Runner.jpg"
        }
    }

    return(
        <div >
            <MLAppBar  />
            <Grid container xs={12} md={12} lg={12} sm={12}  spacing={2} style={{margin : '2%'}}>
           {
                    data.FinalList.map((item)=>{
                    return(
                        <Grid key={`MvList_${item.title}`} className="roll-out" item xs={12} md={6} lg={4} sm={12}> 
                            <MLMovieCard title={item.title} stars={item.rank} years={item.releaseDate} synopsis={item.synopsis} img={setImages(item.imageUrl)} />
                        </Grid>
                    )
                })
           }
           
            </Grid>
       </div>
    )
}

export default MovieList