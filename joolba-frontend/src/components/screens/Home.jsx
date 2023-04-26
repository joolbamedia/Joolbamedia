import React from 'react'
import styled from 'styled-components'


const Home = () => {
    return (
        <Wrapper>
            <h1>Home</h1>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1{
        font-size: 28px;
    }
`