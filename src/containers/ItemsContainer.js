import React from 'react'
import Container from '@material-ui/core/Container';
import ItemCard from '../components/ItemCard'
import ItemDetails from '../components/ItemDetails'

export default function ItemsContainer({ items, showDetails, selectedItem, setToggleDetails, toggleDetails, deleteItem, editItem }) {

    const displayCards = () => {
        return items.map(item => {
            return(
            <ItemCard  
                key={item.id}
                nickname={item.nickname}
                image={item.image_url}
                showDetails={showDetails}
                item={item}
                setToggleDetails={setToggleDetails}
            />
            )
        })
    }

    const displayDetails = () => {
        return <ItemDetails selectedItem={selectedItem} setToggleDetails={setToggleDetails} deleteItem={deleteItem} editItem={editItem} />
    }

    return (
        <Container id="items-container-container" maxWidth="xl">
            <div className="items-container">
                {toggleDetails
                    ? displayDetails()
                    : displayCards()
                }
                
            </div>
        </Container>
    )
}
