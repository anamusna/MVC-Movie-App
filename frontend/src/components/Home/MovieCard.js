import React from "react";
import "./css/card.css";
import MovieRating from "./MovieRating";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';




const styles = theme => ({

    card: {
        margin: "10px",

    },
    media: {
        height: "70%",
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

            <Card className={classes.card}>

                <img src={this.props.item.image} alt="MovieImage"
                    className={classes.media}
                />
                <div className="card-content">
                    <CardContent>
                        <Typography component="p">
                            <h3 className="card-title">{this.props.item.name}</h3>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography component="p">
                            <p className="card-desc"> {this.props.item.desc}</p>
                            <p className="card-date"> {this.props.item.year}</p>
                            <p className="card-category"> {this.props.item.category}</p>
                            <p className="card-rating">
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
                </div>



            </Card>





        );
    }
}

export default withStyles(styles)(MovieCard);
