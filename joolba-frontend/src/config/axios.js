import axios from "axios";


const URL = "http://localhost:8000/"

const joolbaConfig = axios.create({
    baseURL: URL
})

const joolbaAuthConfig = axios.create({
    baseURL: URL,
})

// middleware to add accessToken as auth credential
joolbaAuthConfig.interceptors.request.use((request) => {
    // get access token which we stored in localStorage
    const accessToken = localStorage.getItem("accessToken");

    request.headers.Authorization = `Bearer ${accessToken}`

    return request
})

export default joolbaConfig
export { joolbaAuthConfig }