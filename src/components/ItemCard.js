import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ItemCard(props) {

    const classes = useStyles()

    const handleClick = () => {
        props.showDetails(props.item)
        props.setToggleDetails(true)
    }

    return (
        <Card className="item-card" onClick={() => handleClick()}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Placeholder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nickname}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
