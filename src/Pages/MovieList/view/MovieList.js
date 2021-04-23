import React , {useState , useEffect} from 'react'
import MLAppBar from '../component/MLAppBar'
import MLMovieCard from '../component/MLMovieCard'
import Response from '../component/Response'
import Grid from '@material-ui/core/Grid';

export default function MovieList(){
    var ListOfMovies = Response()
    const displayOrder = ListOfMovies.components.filter(item => item.type.toLowerCase() === 'movie-list')
    const [FinalList, setFinalList] = useState([])

    const selectedFilter = (filtervalue )=>{
        displayOrder[0]['items'].sort((a, b) => b[filtervalue] - a[filtervalue]);
        setFinalList(displayOrder[0]['items'])
    }
    useEffect(() => {
        setFinalList(displayOrder[0]['items'])
     }, [])
    return(
        <div >
            <MLAppBar selectedFilter={selectedFilter} />
            <Grid container xs={12} md={12} lg={12} sm={12}  spacing={2} style={{margin : '2%'}}>
           {
                    FinalList.map((item)=>{
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