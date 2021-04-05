import React, { useState } from 'react'
import AddItemForm from '../components/AddItemForm'
import ItemsContainer from '../containers/ItemsContainer'
import Typography from "@material-ui/core/Typography"

export default function UserHome(props) {

    const [toggleDetails, setToggleDetails] = useState(false)

    return (
        <div>
            {toggleDetails
                ? null
                : <Typography gutterBottom variant="h2" component="h2" style={{textAlign: "center", margin: "50px"}}>Welcome, {props.user.first_name}</Typography>
            }
            {toggleDetails 
                ? null
                : <AddItemForm 
                    userId={props.user.id} 
                    addItem={props.addItem} 
                    showAllItems={props.showAllItems} 
                    filterApparel={props.filterApparel}
                    filterNeedsUpgrade={props.filterNeedsUpgrade}
                    refactoredFilter={props.refactoredFilter}
                />
            }
            <ItemsContainer 
                items={props.items} 
                setItems={props.setItems} 
                deleteItem={props.deleteItem}
                selectedItem={props.selectedItem} 
                showDetails={props.showDetails} 
                setToggleDetails={setToggleDetails} 
                toggleDetails={toggleDetails} 
                editItem={props.editItem}
            />
        </div>
    )
}
