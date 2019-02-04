import React from "react";
//import "./css/card.css";
import MovieRating from "./MovieRating";
import { Container } from "reactstrap";


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import zIndex from "@material-ui/core/styles/zIndex";



const styles = theme => ({

    card: {
        margin: "10px auto",

    },
    media: {
        height: "50%",
        width: "100%",
        backgroundSize: "cover",
        zIndex: -11
    },
    actions: {
        display: 'flex',
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

});


class MovieCard extends React.Component {
    state = { expanded: false };
    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Card className={classes.card}>

                    <img src={this.props.item.image} alt="MovieImage"
                        className={classes.media}
                    />
                    <CardContent>
                        <Typography component="p">
                            <h3>{this.props.item.name}</h3>

                            <p > {this.props.item.year}</p>
                            <p> {this.props.item.category}</p>

                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography component="p">
                            <p > {this.props.item.desc}</p>
                            <p >
                                <MovieRating rating={this.props.item.rating} />
                            </p>
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>

                </Card>
            </Container>



        );
    }
}

export default withStyles(styles)(MovieCard);
