import React from 'react'
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

export default function FilterButtons({ 
        showAllItems, 
        filterApparel,
        filterNeedsUpgrade,
        refactoredFilter 
    }) {

    const allClick = () => {
        showAllItems()
    }

    const upgradeClick = () => {
        filterNeedsUpgrade()
    }

    const apparelClick = () => {
        filterApparel()
    }

    const handleClick = (event) => {
        refactoredFilter(event)
    }

    return (
        <Container maxWidth="xs" style={{margin: "0", display: "flex", flexFlow: "column"}}>
            <Typography gutterBottom variant="h4" component="h2" style={{alignSelf: "center"}}>Filter By Category</Typography>
            <Button variant="contained" onClick={allClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "300px", alignSelf: "center", marginBottom: "0"}}>Show All</Button>
            <Button variant="contained" onClick={upgradeClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "300px", alignSelf: "center", marginBottom: "0"}}>Needs Upgrade or Replacement</Button>
            <Container className="filter-buttons-container" maxWidth="xs" style={{margin: "0", display: "flex"}}>
                <Button variant="contained" onClick={apparelClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Apparel</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Footwear</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Accessory</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Hiking</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Climbing</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Biking</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Camping</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Snow</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Water</Button>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: "#ff914d", margin: "1em", width: "150px"}}>Pet</Button>
            </Container>
        </Container>
    )
}
