import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import { storage } from "../firebase/firebase"

export default function AddItemForm({ userId, addItem }) {

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState("")
    const [formData, setFormData] = useState({
        nickname: '',
        brand: '',
        model_name: '',
        model_year: '',
        item_type: '',
        condition: '',
        rating: '',
        image_url: '',
        user: userId
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
        "Watersports"
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
            user: userId,
            image_url: url,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        addItem(formData)
    }

    const handleImage = (event) => {
        setFile(event.target.files[0])
    }

    const handleUpload = (event) => {
        event.preventDefault();
        const uploadTask = storage.ref(`/images/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                setFile(null);
                setUrl(url);
            })
        })
    }

    return (
        <div className="add-item-container">
            <h2> Placeholder for something nifty</h2>
            <form className="add-item-form" onSubmit={handleSubmit}>
                <h3>Create New Item</h3>
                <TextField type="file" variant="outlined" onChange={handleImage}/>
                <Button onClick={handleUpload}>Upload</Button>
                <TextField label="Nickname" name="nickname" variant="outlined" value={formData.nickname} margin="dense" onChange={handleChange}/>
                <TextField label="Brand" name="brand" variant="outlined" value={formData.brand} margin="dense" onChange={handleChange}/>
                <TextField label="Model" name="model_name" variant="outlined" value={formData.model_name} margin="dense" onChange={handleChange}/>
                <TextField label="Year" name="model_year" type="number" variant="outlined" margin="dense" value={formData.model_year} onChange={handleChange} />
                <TextField label="Condition" select name="condition" variant="outlined" value={formData.condition} margin="dense" onChange={handleChange}>
                    {conditionChoices()}
                </TextField>
                <TextField label="Category" select name="item_type" variant="outlined" value={formData.item_type} margin="dense" onChange={handleChange}>
                    {categoryChoices()}
                </TextField>
                <TextField label="Rating" placeholder="Rating" select name="rating" type="number" variant="outlined" margin="dense" value={formData.rating} onChange={handleChange}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                </TextField>
                <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "1em"}}>Add</Button>
            </form>
        </div>
    )
}
