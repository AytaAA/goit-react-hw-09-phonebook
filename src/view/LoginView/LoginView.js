import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "../../redux/auth/auth-operations"
import styles from "../LoginView/LoginView.module.css"
import Button from "@material-ui/core/Button"

const LoginView = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = ({ target: { name, value } }) => {
        switch (name) {
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

    const clearInput = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn({ email, password }))
        clearInput()
    }
    return (
        <div>
            <h1 className={styles.login_header}>Login</h1>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    E-mail
                    <input type="email" name="email" value={email} onChange={onChange} />
                </label>

                <label className={styles.label}>
                    Password
                    <input type="password" name="password" value={password} onInput={onChange} />
                </label>

                <Button variant="contained" color="primary" type="submit" className={styles.button}>
                    Login
                </Button>
            </form>
        </div>
    )
}
export default LoginView
