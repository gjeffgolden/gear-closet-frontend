import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import MenuItem from "@material-ui/core/MenuItem"

export default function EditItemForm({ selectedItem, editItem }) {

    const { nickname, brand, model_name, model_year, item_type, condition, rating } = selectedItem

    const [formData, setFormData] = useState({
        nickname,
        brand,
        model_name,
        model_year,
        item_type,
        condition,
        rating
    })

    const categoryChoices = () => {
        let choices = [
        "Shell",
        "Insulation",
        "Baselayer",
        "Footwear",
        "Accessory",
        "Hiking",
        "Climbing",
        "Biking",
        "Camping",
        "Water",
        "Snow",
        "Pet"
    ]
    return choices.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)
}

    const conditionChoices = () => {
        let choices = [
            "New",
            "Excellent",
            "Good",
            "Fair",
            "Poor"
        ] 
        return choices.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        editItem(formData)
    }

    return (
        <form className="edit-item-form" onSubmit={handleSubmit} style={{paddingTop: "20px"}}>
                <Typography gutterBottom variant="h4" component="h2" style={{alignSelf: "center"}}>Edit Item</Typography>
                <TextField label="Nickname" name="nickname" variant="outlined" value={formData.nickname} margin="dense" onChange={handleChange}/>
                <TextField label="Brand" name="brand" variant="outlined" value={formData.brand} margin="dense" onChange={handleChange}/>
                <TextField label="Model" name="model_name" variant="outlined" value={formData.model_name} margin="dense" onChange={handleChange}/>
                <TextField label="Year" name="model_year" type="number" variant="outlined" margin="dense" value={formData.model_year} onChange={handleChange} />
                <TextField label="Condition" select name="condition" variant="outlined" value={formData.condition} margin="dense" style={{minWidth: "80px"}} onChange={handleChange}>
                    {conditionChoices()}
                </TextField>
                <TextField label="Category" select name="item_type" variant="outlined" style={{minWidth: "80px"}} value={formData.item_type} margin="dense" onChange={handleChange}>
                    {categoryChoices()}
                </TextField>
                <TextField label="Rating" placeholder="Rating" select name="rating" type="number" variant="outlined" margin="dense" value={formData.rating} onChange={handleChange}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                </TextField>
                <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "0.6em"}}>Submit Changes</Button>
            </form>
    )
}
