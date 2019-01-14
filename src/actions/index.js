const registerUserSuccess = (user) => ({
    type: 'REGISTER_USER_SUCCESS',
    user
})

export const loginUserSuccess = (token) => ({
    type: 'LOGIN_USER_SUCCESS',
    token
})

export const registerUser = (username, password) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(json => dispatch(registerUserSuccess(json)))
        .catch(error => console.log(error))
    }
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(json => {
            const { authToken } = json 
            console.log(authToken)
            localStorage.setItem('token', authToken)
            dispatch(loginUserSuccess(authToken))
        })
        .catch(error => console.log(error))
    }
}

export const getDashboard = () => {
    return (dispatch) => {
        const authToken = localStorage.getItem('token')
        fetch('http://localhost:8080/api/protected', {
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