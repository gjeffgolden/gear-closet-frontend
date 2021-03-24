import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"

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
            <h1>Welcome to Gear Closet</h1>
            <FormLabel>Username</FormLabel>
            <TextField name="username" variant="outlined" value={formData.username} margin="dense" onChange={handleChange}/>
            <FormLabel>Password</FormLabel>
            <TextField name="password" variant="outlined" type="password" value={formData.password} margin="dense" onChange={handleChange}/>
            <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "1em"}}>Log In</Button>
            <Button size="small" onClick={() => props.toggleRegistered()}>Need to Register?</Button>
        </form>
    )
}
