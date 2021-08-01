import React, { useState } from "react"
import style from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contacts/contacts-operations"
import { getItems } from "../../redux/contacts/contacts-selectors"
import styles from "./ContactForm.module.css"
import Button from "@material-ui/core/Button"

const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getItems)

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const reset = () => {
        setName("")
        setNumber("")
    }

    const handleNameChange = (e) => {
        setName(e.currentTarget.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.currentTarget.value)
    }
    const onSubmit = ({ name, number }) => dispatch(addContact({ name, number }))
    const onHandleSubmit = (e) => {
        e.preventDefault()

        if (contacts.some((contacts) => contacts.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
            return
        }
        if (contacts.some((contacts) => contacts.number === number)) {
            alert(`${number} is already in contacts`)
            return
        }
        onSubmit({ name, number })
        reset()
    }

    return (
        <div className={style.form_container}>
            <form onSubmit={onHandleSubmit} className={styles.form}>
                <h2 className={style.form_label}>Name</h2>
                <input
                    className={style.input}
                    onChange={handleNameChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                />
                <h2 className={style.form_label}>Number</h2>
                <input
                    className={style.input}
                    onChange={handleNumberChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                />
                <br />
                <Button variant="contained" color="primary" className={styles.button} type="submit">
                    Add contact
                </Button>
            </form>
        </div>
    )
}

export default ContactForm
