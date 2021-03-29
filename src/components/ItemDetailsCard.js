import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 500,
    },
});

export default function ItemDetailsCard( { setToggleDetails, deleteItem, selectedItem, toggleEditItemForm, editItemForm } ) {
    const classes = useStyles()

    const handleClick = () => {
        setToggleDetails(false)
    }

    const handleDelete = (event) => {
        deleteItem(selectedItem)
    }

    const handleEdit = (event) => {
        toggleEditItemForm(!editItemForm)
        event.stopPropagation()
    }

    return (
        <Card onClick={() => handleClick()}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={selectedItem.image_url}
                        title="Placeholder"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {selectedItem.brand}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="h2">
                            {`${selectedItem.model_name} (${selectedItem.model_year})`}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {`Condition: ${selectedItem.condition} || Rating: ${selectedItem.rating}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="inherit" onClick={handleDelete}>
                        Delete Item
                    </Button>
                    <Button size="medium" color="inherit" onClick={handleEdit}>
                        Edit Item
                    </Button>
                </CardActions>
            </Card>
    )
}
