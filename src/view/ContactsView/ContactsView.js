import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "../../Components/Container"
import ContactsList from "../../Components/ContactList"
import ContactForm from "../../Components/ContactForm"
import Filter from "../../Components/Filter"
import { contactFetch } from "../../redux/contacts/contacts-operations"
import { getLoading } from "../../redux/contacts/contacts-selectors"
import styles from "../ContactsView/ContactsView.module.css"
import CircularProgress from "@material-ui/core/CircularProgress"

const ContactsView = () => {
    const isLoadingContacts = useSelector((state) => getLoading(state))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(contactFetch())
    }, [dispatch])

    return (
        <Container>
            <div className={styles.barStyles}>
                <ContactForm />
                <Filter />
                <ContactsList />

                {isLoadingContacts && <CircularProgress />}
            </div>
        </Container>
    )
}

export default ContactsView
