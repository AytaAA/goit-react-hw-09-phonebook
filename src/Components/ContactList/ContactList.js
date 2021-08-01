import { useEffect } from "react"
import style from "./ContactList.module.css"
import ContactItem from "../ContactItem"
import { useDispatch, useSelector } from "react-redux"
import { contactFetch } from "../../redux/contacts/contacts-operations"

const ContactList = () => {
    const dispatch = useDispatch()

    useEffect(() => dispatch(contactFetch()), [dispatch])

    const contacts = useSelector(getFilteredContacts)
    return (
        <ul className={style.contact_list}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem id={id} key={id} name={name} number={number} />
            ))}
        </ul>
    )
}

const getFilteredContacts = (contactData) => {
    const filter = contactData.contacts.filter
    if (!filter) return contactData.contacts.items
    const normalizedFilter = filter.toLowerCase()

    return contactData.contacts.items.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
}

export default ContactList
