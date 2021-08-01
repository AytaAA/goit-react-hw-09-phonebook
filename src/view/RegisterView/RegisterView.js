import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/auth-operations"
import styles from "../RegisterView/RegisterView.module.css"
import Button from "@material-ui/core/Button"

const RegisterView = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clearInput = () => {
        setName("")
        setEmail("")
        setPassword("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(register({ name, email, password }))

        clearInput()
    }
    const onChange = ({ target: { name, value } }) => {
        switch (name) {
            case "name":
                setName(value)
                break
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                return
        }
    }
    return (
        <div>
            <h1 className={styles.header}>Register</h1>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    Name
                    <input type="text" name="name" value={name} onInput={onChange} />
                </label>

                <label className={styles.label}>
                    E-mail
                    <input type="email" name="email" value={email} onInput={onChange} />
                </label>

                <label className={styles.label}>
                    Password
                    <input type="password" name="password" value={password} onInput={onChange} />
                </label>

                <Button variant="contained" color="primary" type="submit" className={styles.button}>
                    Register
                </Button>
            </form>
        </div>
    )
}

export default RegisterView
