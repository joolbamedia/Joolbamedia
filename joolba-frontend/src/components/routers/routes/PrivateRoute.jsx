import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    //calculate if user is authenticated or not
    const isAuthenticated = false
    
    // if user is authenticated, return protected routes/page else return to login page with current url as next destination url
    return isAuthenticated ? children : <Navigate to={`/login?next=${location.pathname}`} />
}

export default PrivateRoute
