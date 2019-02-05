import { API_BASE_URL } from '../config'
// import { Redirect } from 'react-router-dom'

const registerUserSuccess = (user) => ({
    type: 'REGISTER_USER_SUCCESS',
    user
})

export const loginUserSuccess = (token) => ({
    type: 'LOGIN_USER_SUCCESS',
    token
})

export const registerUser = (username, password, firstname, lastname, img) => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, firstname, lastname})
        })
        .then(response => response.json())
        .then(json => dispatch(registerUserSuccess(json)))
        .catch(error => console.log(error))
    }
}

export const registerTest = () => {
  console.log("testing this thing");
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const { authToken } = json
            const { userId } = json
            const { img } = json
            console.log(userId)
            console.log(authToken)
            localStorage.setItem('token', authToken)
            localStorage.setItem('username', username)
            localStorage.setItem('userId', userId)
            localStorage.setItem('userImage', img)
            dispatch(loginUserSuccess(authToken))
            window.location = '/dashboard';


        })
        .catch(error => console.log(error))
    }
}




export const getDashboard = () => {
    return (dispatch) => {
        const authToken = localStorage.getItem('token')
        fetch(`${API_BASE_URL}/api/protected`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    }
}

export const protectedEndpointTesting = () => {
    return (dispatch) => {
      const authToken = localStorage.getItem('token')
        fetch(`${API_BASE_URL}/api/protected/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    }
}
