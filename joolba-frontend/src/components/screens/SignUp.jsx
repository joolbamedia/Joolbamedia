import React from 'react'
import styled from 'styled-components'

import heroImg from '../../assets/images/signup-hero.png'
import joolbaLogo from '../../assets/images/joolba-logo.png'
import joolbaJIcon from '../../assets/images/joolba-j.png'
import googleLogo from '../../assets/images/google-logo.png'

const green = "#01ba01"


const SignUp = () => {
    return (
        <>
            <Header>
                <div className="logo">
                    <img src={joolbaLogo} alt="joolba logo" />
                </div>
            </Header>
            <Container>
                <Left>
                    <div className="hero">
                        <img src={heroImg} alt="signup hero" />
                    </div>
                </Left>
                <Right>
                    <SignupContainer>
                        <Top>
                            <img src={joolbaJIcon} alt="" />
                            <h2>Sign Up</h2>
                        </Top>
                        <Form>
                            <InputContainer>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Name" name="name" />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" name="email" />
                            </InputContainer>
                            <InputContainer className="last">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Password" name="password" />
                            </InputContainer>
                            <SubmitButton>Continue</SubmitButton>
                            <span className="or">
                                Or
                            </span>
                            <SubmitButton>
                                <img src={googleLogo} alt="" />
                                <span>Continue with Google</span>
                            </SubmitButton>
                        </Form>
                    </SignupContainer>
                </Right>
            </Container>
        </>
    )
}

export default SignUp


const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 42px;
    /* padding: 56px 0; */
    /* min-height: calc(100vh - 170px); */
`

const Header = styled.div`
    padding: 42px;
    .logo{
        img{
            width: 200px;
        }
    }
        
`

const Left = styled.div`
    width: 50%;
    .hero{
        img{
            width: 80%;
            margin: 0 auto;
        }
    }
`
const Right = styled.div`
    width: 50%;
`

const SignupContainer = styled.main`
    width: 55%;
    border-radius: 8px;
    border: 1px solid #008a0e;
    background-color: #dceedd;
    padding: 32px;
    margin-top: 5vh;
`
const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 38px;

    img{
        width: 100px;
    }
    h2{
        font-size: 26px;
        font-weight: 600;
    }
`

const Form = styled.section`
    span.or{
        display: block;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        margin: 18px 0;
        color: #111;
    }
`
const InputContainer = styled.div`
    margin-bottom: 8px;

    &.last{
        margin-bottom: 28px;
    }

    label{
        display: inline-block;
        font-size: 15px;
        margin-bottom: 4px;
    }
    input,.input-container{
        padding: 5px 10px;
        width: 98.5%;
        margin: 0 auto;
        border-radius: 5px;
        display: block;
        font-size: 17px;
        border: 1px solid #008a0e;
        background-color: #fff;
    }
`
const SubmitButton = styled.span`
    width: 100%;
    padding: 8px 16px;
    text-align: center;
    background-color: ${green};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 98.5%;
    margin: 0 auto;
     
    &,span{
        color: #fff;
        font-size: 17px;
        font-weight: 600;
        border-radius: 7px;
        cursor: pointer;
        margin-top: 16px;
    }
`