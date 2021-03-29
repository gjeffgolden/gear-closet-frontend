import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import ItemDetailsCard from './ItemDetailsCard'
import EditItemForm from './EditItemForm'

export default function ItemDetails({ selectedItem, setToggleDetails, deleteItem, editItem }) {

    const [editItemForm, toggleEditItemForm] = useState(false)

    return (
        <>
        <Container className="item-details-container">
            <ItemDetailsCard selectedItem={selectedItem} setToggleDetails={setToggleDetails} deleteItem={deleteItem} toggleEditItemForm={toggleEditItemForm} editItemForm={editItemForm} />
        </Container>
        <div className="edit-form-container">
            {editItemForm
                ? <EditItemForm selectedItem={selectedItem} editItem={editItem} />
                : null
            }
        </div>
        </>
    )
}
