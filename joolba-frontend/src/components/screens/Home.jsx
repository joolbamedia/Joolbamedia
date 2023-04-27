import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Home = () => {
    return (
        <Wrapper>
            <h1>Home</h1>
            <Link to='/sign-in'>Sign In</Link>
            <Link to='/sign-up'>Sign Up</Link>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1{
        font-size: 28px;
    }
`