import React from "react"
import { useDispatch } from "react-redux"
import style from "./ContactItem.module.css"
import Button from "@material-ui/core/Button"

import { deleteContact } from "../../redux/contacts/contacts-operations"

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(deleteContact(id))
    }
    return (
        <li key={id} className={style.list_item}>
            <span className={style.new_item}>
                {name}: {number}
            </span>
            <Button variant="contained" color="primary" className={style.delete_btn} onClick={() => onDelete(id)}>
                Delete
            </Button>
        </li>
    )
}

export default ContactItem
