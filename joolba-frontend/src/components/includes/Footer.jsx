import React from 'react'
import styled from 'styled-components'
import { SECONDARY_COLOR } from '../constants'
import SilentLink from '../constants/SilentLink'

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Top>
                    <SilentLink to='/privacy-policy'>Terms and Privacy Notice </SilentLink>
                    <SilentLink to='/feedback'>Send us feedback </SilentLink>
                    <SilentLink to='/help'>Help</SilentLink>
                </Top>
                <Bottom>
                    <span>©️2023, Joolba, inc</span>
                </Bottom>
            </Container>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
    padding: 58px 32px;
    margin-top: 42px;
    background-color: ${SECONDARY_COLOR};
`

const Container = styled.div`
    width: 50%;
    margin: 0 auto;

    a{
        color: #EAE15F;
    }

    @media screen and (max-width:980px) {
        width: 80%;

        a{
            font-size: 15px;
        }
    }
    @media screen and (max-width:680px) {
        width: 100%;

        a{
            font-size: 14px;
        }
    }
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const Bottom = styled.div`
    text-align: center;

    span{
        margin-top: 12px;
        font-size: 17px;
        color: #fff;
    }

    @media screen and (max-width:680px) {

        span{
            font-size: 14px;
        }
    }
`