import React from "react"
import { NavLink } from "react-router-dom"
import styles from "../../Components/Navigation/Navigation.module.css"
import { useSelector } from "react-redux"
import { getIsAuthenticated } from "../../redux/auth/auth-selectors"

const Navigation = () => {
    const isAuthenticated = useSelector(getIsAuthenticated)
    return (
        <nav>
            <NavLink to="/" className={styles.link}>
                HOME
            </NavLink>

            {isAuthenticated && (
                <NavLink to="/contacts" className={styles.link}>
                    CONTACTS
                </NavLink>
            )}
        </nav>
    )
}

export default Navigation
