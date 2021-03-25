import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HeaderBackground from "../assets/HeaderBackground.png"
import LogoGearCloset from "../assets/LogoGearCloset.png"

export default function Header({ isLoggedIn, logout }) {

    const handleClick = () => {
        logout()
    }

    return (
        <Container className="header-container" maxWidth='xl' style={{height: '20vh', backgroundImage: `url(${HeaderBackground})`, backgroundRepeat: 'no-repeat'}}>
            <img className="logo" src={LogoGearCloset} alt="Gear Closet Logo" />
            {isLoggedIn
                ? <Button id="logout-button" variant="contained" size="small" onClick={handleClick}>Logout</Button>
                : null
            }
        </Container>
    );
}

