import React from 'react'
import Container from '@material-ui/core/Container';
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
                ? <button id="logout-button" onClick={handleClick}>Logout</button>
                : null
            }
        </Container>
    );
}

