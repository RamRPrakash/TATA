import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function MLMovieCard({ title, stars, years, synopsis , img }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const starList = []
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    for (var i = 0; i< stars ; i++){
        starList.push(i)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {title[0]}
            </Avatar>
                }
                title={title}
            />
            <CardMedia
                component="img"
                alt={title}
                image={img}
                title={title}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {
                        starList.map(item=>{
                            return <StarIcon key={`MlMovieCard_${item}`} style={{ color: '#f7ca18' }} />
                        })
                    }
                </IconButton>
                <div style={{marginLeft : '10%'}}>
                    <span>Year </span>
                    <span style={{ color: '#3498db' }}>{years}</span>
                   </div> 
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>synopsis:</Typography>
                    <Typography paragraph>
                        {synopsis}
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}