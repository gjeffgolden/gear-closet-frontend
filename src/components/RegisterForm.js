import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"

export default function RegisterForm(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        items: []
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.toggleRegistered()
        props.register(formData, props.history)
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <FormLabel>Username</FormLabel>
            <TextField name="username" variant="outlined" value={formData.username} margin="dense" onChange={handleChange}/>
            <FormLabel>Password</FormLabel>
            <TextField name="password" type="password" variant="outlined" value={formData.password} margin="dense" onChange={handleChange}/>
            <FormLabel>First Name</FormLabel>
            <TextField name="first_name" variant="outlined" value={formData.first_name} margin="dense" onChange={handleChange}/>
            <FormLabel>Last Name</FormLabel>
            <TextField name="last_name" variant="outlined" value={formData.last_name} margin="dense" onChange={handleChange}/>
            <FormLabel>Email Address</FormLabel>
            <TextField name="email" variant="outlined" value={formData.email} margin="dense" onChange={handleChange}/>
            <Button type="submit" variant="contained" style={{backgroundColor: "#ff914d", margin: "1em", color: "#015579"}}>Register</Button>
            <Button size="small" onClick={() => props.toggleRegistered()}>Already registered? Click here to login.</Button>
        </form>
    )
}
