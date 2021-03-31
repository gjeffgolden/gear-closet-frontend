import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography"

export default function Footer() {
    return (
        <Container maxWidth="md" style={{paddingBottom: "20px"}}>
            <Typography gutterBottom variant="body2" component="h2" style={{textAlign: "center", fontStyle: "italic"}}>© GearCloset 2021</Typography>
            <Typography gutterBottom variant="body2" component="h2" style={{textAlign: "center", fontWeight: "bold"}}>codebygolden@gmail.com</Typography>
        </Container>
    )
}
