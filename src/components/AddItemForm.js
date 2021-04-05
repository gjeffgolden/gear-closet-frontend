import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import { storage } from "../firebase/firebase"
import FilterButtons from './FilterButtons'
import HeroImage from '../assets/HeroImage.png'
import SpinnerGif from '../assets/SpinnerGif.gif'

export default function AddItemForm({ userId, 
    addItem, 
    showAllItems, 
    filterApparel,
    filterNeedsUpgrade,
    refactoredFilter
}) {

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isUploaded, setIsUploaded] = useState(false)
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
            user: userId,
            image_url: url,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        addItem(formData)
    }

    const handleImage = (event) => {
        setFile(event.target.files[0])
    }

    const handleUpload = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const uploadImg = storage.ref(`/images/${file.name}`).put(file);
        uploadImg.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                setFile(null);
                setUrl(url);
                setIsLoading(false)
                setIsUploaded(true)
            })
        })
    }

    return (
        <div className="add-item-container" style={{marginTop: "25px", backgroundImage: `url(${HeroImage})`, width: "100vw"}}>
            <FilterButtons 
                showAllItems={showAllItems} 
                filterApparel={filterApparel}
                filterNeedsUpgrade={filterNeedsUpgrade}
                refactoredFilter={refactoredFilter}
            />
            <form className="add-item-form" onSubmit={handleSubmit} style={{backgroundColor: "white"}}>
                <Typography gutterBottom variant="h5" component="h2" style={{alignSelf: "center"}}>Create New Item</Typography>
                <TextField type="file" variant="outlined" onChange={handleImage}/>
                {isLoading
                    ? <img src={SpinnerGif} alt="loading spinner" style={{height: "41px", width: "41px", alignSelf: "center"}}></img>
                    : <Button variant="contained" onClick={handleUpload} style={{width: "120px", alignSelf: "center", marginTop: "0.5em"}}>
                        {isUploaded ? <p style={{margin: "0"}}>Done 🙌</p> : <p style={{margin: "0"}}>Upload 📸</p>}
                    </Button>
                }
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
                {isUploaded
                    ? <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "1em"}}>Add</Button>
                    : <Button type="submit" disabled={true} variant="contained" style={{backgroundColor: "#ff914d", margin: "1em"}}>Add</Button>
                }
                {isUploaded
                    ? null
                    : <Typography gutterBottom variant="body2" component="h2" style={{alignSelf: "center", color: "red"}}>Image required.</Typography>
                }
            </form>
        </div>
    )
}
