import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom'

export default function Login(props) {

    const [isRegistered, setIsRegistered] = useState(true)

    const toggleRegistered = () => {
        setIsRegistered(!isRegistered)
    }

    return (
        <Container className="login-form-container" maxWidth='sm'>
            {props.isLoggedIn
                ? <Redirect to="/user" />
                : null
            }
            {isRegistered
                ? <LoginForm {...props} toggleRegistered={toggleRegistered} />
                : <RegisterForm {...props} toggleRegistered={toggleRegistered} />
            }
        </Container>
    )
}
