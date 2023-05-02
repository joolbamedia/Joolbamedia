import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


const SilentLink = ({ children, to = "/" }) => {
    const navigate = useNavigate()

    return (
        <Link
            onClick={e => {
                e.preventDefault()
                navigate(to)
            }}
        >
            {children}
        </Link>
    )
}

export default SilentLink


const Link = styled.a`
    cursor: pointer;
    padding: 6px;
    font-size: 16px;
`