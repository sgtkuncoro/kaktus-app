import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from "../types";
import api from "../api";

/**
 * @description () => ({type: something}) // this function mean is make 
 * return object * with property 'type' and value 'something'
 */
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.kaktusJWT = user.token;
        dispatch(userLoggedIn(user));
    })

export const logout = () => dispatch => {
    localStorage.removeItem("kaktusJWT");
    dispatch(userLoggedOut());
}

export const confirm = token => dispatch =>
    api.user.confirm(token).then(user => {
        localStorage.kaktusJWT = user.token;
        dispatch(userLoggedIn(user));
    })