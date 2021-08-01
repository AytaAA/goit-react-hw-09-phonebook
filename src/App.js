import React, { Suspense, lazy } from "react"
import { Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCurrentUser } from "../src/redux/auth/auth-operations"
import { getIsAuthenticated } from "./redux/auth/auth-selectors"
//data

//components

import Container from "../src/Components/Container"
import AppBar from "../src/Components/AppBar"
import routes from "./routes"
import PrivateRoute from "../src/Components/PrivateRoute"
import PublicRoute from "../src/Components/PublicRoute"

//styles
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"

const HomeView = lazy(() => import("./view/HomeView/HomeView.js" /*webpackChunkName: "home-view" */))
const RegisterView = lazy(() => import("./view/RegisterView/RegisterView.js" /*webpackChunkName: "register-view" */))
const LoginView = lazy(() => import("./view/LoginView/LoginView.js" /*webpackChunkName: "login-view" */))
const ContactsView = lazy(() => import("./view/ContactsView/ContactsView.js" /*webpackChunkName: "contacts-view" */))

const theme = createTheme({
    palette: {
        primary: blue,
    },
})

const App = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuthenticated)
    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch, isAuth])

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <AppBar />
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <PublicRoute exact path={routes.home} component={HomeView} />
                        <PublicRoute
                            path={routes.register}
                            restricted
                            component={RegisterView}
                            redirectTo={routes.contacts}
                        />
                        <PublicRoute
                            path={routes.login}
                            restricted
                            component={LoginView}
                            redirectTo={routes.contacts}
                        />
                        <PrivateRoute path={routes.contacts} component={ContactsView} redirectTo={routes.login} />
                    </Switch>
                </Suspense>
            </ThemeProvider>
        </Container>
    )
}

export default App
