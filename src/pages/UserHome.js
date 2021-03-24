import React, { useState } from 'react'
import AddItemForm from '../components/AddItemForm'
import ItemsContainer from '../containers/ItemsContainer'

export default function UserHome(props) {

    const [toggleDetails, setToggleDetails] = useState(false)

    return (
        <div>
            {toggleDetails 
                ? null
                : <AddItemForm userId={props.user.id} addItem={props.addItem} />
            }
            <ItemsContainer 
                items={props.items} 
                setItems={props.setItems} 
                deleteItem={props.deleteItem}
                selectedItem={props.selectedItem} 
                showDetails={props.showDetails} 
                setToggleDetails={setToggleDetails} 
                toggleDetails={toggleDetails} 
            />
        </div>
    )
}
