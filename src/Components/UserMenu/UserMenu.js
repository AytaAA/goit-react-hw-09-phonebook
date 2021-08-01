import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/auth/auth-operations"
import { getUsername } from "../../redux/auth/auth-selectors"
import Button from "@material-ui/core/Button"

import styles from "../UserMenu/UserMenu.module.css"

const UserMenu = () => {
    const name = useSelector(getUsername)
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className={styles.container}>
            <span className={styles.name}>Welcome, {name}</span>
            <Button onClick={LogOut} variant="contained" color="primary" className={styles.logout}>
                Log Out
            </Button>
        </div>
    )
}

export default UserMenu
