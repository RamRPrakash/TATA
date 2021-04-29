import React , {useState , useEffect} from 'react'
import MLAppBar from '../component/MLAppBar'
import MLMovieCard from '../component/MLMovieCard'
import Grid from '@material-ui/core/Grid';
import filterType from '../../../redux' 
import { connect } from 'react-redux'

function MovieList(props){
    props.FinalList.sort((a, b) => b[props.FilterType] - a[props.FilterType]);
    return(
        <div >
            <MLAppBar  />
            <Grid container xs={12} md={12} lg={12} sm={12}  spacing={2} style={{margin : '2%'}}>
           {
                    props.FinalList.map((item)=>{
                    return(
                        <Grid  item xs={12} md={6} lg={4} sm={12}> 
                            <MLMovieCard title={item.title} stars={item.rank} years={item.releaseDate} synopsis={item.synopsis} img={item.imageUrl} />
                        </Grid>
                    )
                })
           }
           
            </Grid>
       </div>
    )
}

const mapStateToProps = state =>{
    return {
        FinalList: state.FinalList , 
        FilterType: state.FilterType
    }
}


export default connect(mapStateToProps)(MovieList)