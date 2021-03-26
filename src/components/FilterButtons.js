import React from 'react'
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

export default function FilterButtons({ 
        filterClimbing, 
        showAllItems, 
        filterApparel,
        filterHiking,
        filterCamping,
        filterAccessories,
        filterFootwear,
        filterBiking,
        filterSnow,
        filterWater,
        filterPet,
        filterNeedsUpgrade 
    }) {

    const allClick = () => {
        showAllItems()
    }

    const upgradeClick = () => {
        filterNeedsUpgrade()
    }

    const climbingClick = () => {
        filterClimbing()
    }

    const apparelClick = () => {
        filterApparel()
    }

    const hikingClick = () => {
        filterHiking()
    }

    const footwearClick = () => {
        filterFootwear()
    }

    const campingClick = () => {
        filterCamping()
    }

    const accessoriesClick = () => {
        filterAccessories()
    }

    const bikingClick = () => {
        filterBiking()
    }

    const snowClick = () => {
        filterSnow()
    }

    const waterClick = () => {
        filterWater()
    }

    const petClick = () => {
        filterPet()
    }

    return (
        <Container maxWidth="xs" style={{margin: "0", display: "flex", flexFlow: "column"}}>
            <Typography gutterBottom variant="h3" component="h2" style={{alignSelf: "center"}}>Filter By Category</Typography>
            <Button variant="contained" onClick={allClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "300px", alignSelf: "center", marginBottom: "0"}}>Show All</Button>
            <Button variant="contained" onClick={upgradeClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "300px", alignSelf: "center", marginBottom: "0"}}>Needs Upgrade or Replacement</Button>
            <Container className="filter-buttons-container" maxWidth="xs" style={{margin: "0", display: "flex"}}>
                <Button variant="contained" onClick={apparelClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Apparel</Button>
                <Button variant="contained" onClick={footwearClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Footwear</Button>
                <Button variant="contained" onClick={accessoriesClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Accessories</Button>
                <Button variant="contained" onClick={hikingClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Hiking</Button>
                <Button variant="contained" onClick={climbingClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Climbing</Button>
                <Button variant="contained" onClick={bikingClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Biking</Button>
                <Button variant="contained" onClick={campingClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Camping</Button>
                <Button variant="contained" onClick={snowClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Snow</Button>
                <Button variant="contained" onClick={waterClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Water</Button>
                <Button variant="contained" onClick={petClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Pet</Button>
            </Container>
        </Container>
    )
}
