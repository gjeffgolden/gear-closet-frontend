import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

export default function LoginForm(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(formData, props.history)
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Typography gutterBottom variant="h3" component="h2" style={{alignSelf: "center", marginBottom: "1em", marginTop: "1em"}}>Welcome to Gear Closet</Typography>
            <FormLabel>Username</FormLabel>
            <TextField name="username" variant="outlined" value={formData.username} margin="dense" onChange={handleChange}/>
            <FormLabel>Password</FormLabel>
            <TextField name="password" variant="outlined" type="password" value={formData.password} margin="dense" onChange={handleChange}/>
            <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "1em"}}>Log In</Button>
            <Button size="small" onClick={() => props.toggleRegistered()}>Need to Register?</Button>
        </form>
    )
}
