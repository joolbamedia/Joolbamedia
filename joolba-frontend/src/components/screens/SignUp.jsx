import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

import heroImg from '../../assets/images/signup-hero.png'
import joolbaLogo from '../../assets/images/joolba-logo.png'
import joolbaJIcon from '../../assets/images/joolba-j.png'
import googleLogo from '../../assets/images/google-logo.svg'
import eyeIcon from '../../assets/icons/eye.svg'
import hideIcon from '../../assets/icons/hide-eye.svg'
import { BLUE, PRIMARY_COLOR } from '../constants'
import SilentLink from '../constants/SilentLink'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../store/uiSlice'


const SignUp = ({ type = "SignUp" }) => {
    const [isShow, setShow] = useState(false)
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    })

    const theme = useSelector(state => state.ui.theme)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    // Sign-up Handler
    const SignUpHandler = () => {
        console.log(inputs);
        console.log("Signup method triggered");
    }

    // Login handler
    const LoginHandler = () => {
        console.log("Login method triggered");
    }

    // Google authentication handler
    const googleAuthHandler = () => {
        console.log("Google authentication method triggered");
    }

    const togglePasswordType = () => {
        setShow(!isShow)
    }

    const title = useMemo(() => {
        return type === "SignUp" ? "Sign Up" : "Sign In"
    }, [])

    return (
        <Wrapper theme={theme}>
            <Header>
                <div className="logo">
                    <img src={joolbaLogo} alt="joolba logo" />
                </div>
                <div className='theme-toggler'>
                    <label>
                        <input
                            type='checkbox'
                            checked={theme === "DARK"}
                            onChange={e => {
                                e.target.checked ?
                                    dispatch(changeTheme({ theme: "DARK" })) :
                                    dispatch(changeTheme({ theme: "LIGHT" }))
                            }}
                        />
                        <span class='slider'></span>
                    </label>
                </div>
            </Header>
            <Container>
                <Left>
                    <div className="hero">
                        <img src={heroImg} alt="signup hero" />
                    </div>
                </Left>
                <Right>
                    <SignupContainer theme={theme}>
                        <Top theme={theme}>
                            <img src={joolbaJIcon} alt="" />
                            <h2>{title}</h2>
                        </Top>
                        <Form theme={theme}>
                            {type === "SignUp" && (
                                <InputContainer theme={theme}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        name="name"
                                        onChange={onChange}
                                        value={inputs.name}
                                    />
                                </InputContainer>
                            )}
                            <InputContainer theme={theme}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={onChange}
                                    value={inputs.email}
                                />
                            </InputContainer>
                            <InputContainer className="last" theme={theme}>
                                <label htmlFor="password">Password</label>
                                <div className="input-container">
                                    <input
                                        type={!isShow ? "password" : "text"}
                                        id="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={onChange}
                                        value={inputs.password}
                                    />
                                    <img
                                        src={!isShow ? eyeIcon : hideIcon}
                                        onClick={togglePasswordType}
                                        alt=""
                                    />
                                </div>
                            </InputContainer>
                            <SubmitButton theme={theme} onClick={type === "SignUp" ? SignUpHandler : LoginHandler}>
                                Continue
                            </SubmitButton>
                            <div className="or">
                                <span className="or">
                                    Or
                                </span>
                            </div>
                            <SubmitButton theme={theme} className="google" onClick={googleAuthHandler}>
                                <img src={googleLogo} alt="" />
                                <span>Continue with Google</span>
                            </SubmitButton>
                            {type === "SignUp" ? (
                                <p className="login">
                                    Already have an account?
                                    <SilentLink to='/sign-in'>Sign In</SilentLink>
                                </p>
                            ) : (
                                <>
                                    <span className="or new">
                                        New to Joolba?
                                    </span>
                                    <SubmitButton theme={theme} className='create' onClick={e => navigate('/sign-up')} >
                                        <span>Create your Joolba Account!</span>
                                    </SubmitButton>
                                </>
                            )}
                        </Form>
                    </SignupContainer>
                </Right>
            </Container>
        </Wrapper>
    )
}

export default SignUp


const Wrapper = styled.section`
    background: ${({ theme }) => theme === "DARK" ? "#0d0d0d " : "#fff"};
    
`

const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 42px;
    padding: 32px 0;
    /* min-height: ; */
    /* min-height: calc(100vh - 170px); */

    @media screen and (max-width: 1280px) {
        justify-content: center;
    }    
    /* &,*{
    } */
`

const Header = styled.div`
    padding: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
    
    .logo{
        img{
            width: 200px;
        }
    }
      @media screen and (max-width: 1280px) {
        padding: 28px;
        display: flex;
        /* justify-content: center;
        align-items: center; */
        justify-content: space-evenly;
        align-items: center;
    }  

    .theme-toggler{
        position: relative;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        label {
            position: absolute;
            width: 100%;
            height: 25px;
            background-color: var(--dark);
            border-radius: 13px;
            cursor: pointer;
        }

        input {
            position: absolute;
            display: none;
        }
        .slider {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 13px;
            transition: 0.3s;
        }

        input:checked ~ .slider {
            background-color: var(--light);
        }

        .slider::before {
            content: "";
            position: absolute;
            top: 4px;
            left: 4px;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            box-shadow: inset 28px -4px 0px 0px var(--light);
            background-color: var(--dark);
            transition: 0.3s;
            }

            input:checked ~ .slider::before {
            transform: translateX(26px);
            background-color: var(--dark);
            box-shadow: none;
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

    @media screen and (max-width: 1280px) {
        display: none;
    }
`
const Right = styled.div`
    width: 50%;

    @media screen and (max-width: 1280px) {
        width: 80%;
    }

    @media screen and (max-width: 1280px) {
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    @media screen and (max-width: 480px) {
        width: 92%;
    }
`

const SignupContainer = styled.main`
    width: 60%;
    border-radius: 8px;
    border: 1px solid #008a0e;
    /* background-color: #dceedd; */
    background-color: ${({ theme }) => theme === "DARK" ? "#00a41023" : "#dceedd"};

    padding: 32px;
    margin-top: 3vh;
    margin-bottom: 42px;

    @media screen and (max-width: 1680px) {
        width: 65%;
    }
    @media screen and (max-width: 1480px) {
        width: 75%;
    }
    @media screen and (max-width: 1280px) {
        width: 600px;
        margin-top: 0;
    }
    @media screen and (max-width: 580px) {
        padding: 18px;
    }
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
        color: ${({ theme }) => theme === "DARK" ? "#fff" : "#111"};
    }
`

const Form = styled.section`
    span.or{
        display: block;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        margin: 18px 0;
        color: ${({ theme }) => theme === "DARK" ? "#fff" : "#111"};
    }
    span.new{
        margin: 10px 0;
        margin-bottom: 4px;
    }

    p.login{
        margin-top: 22px;
        font-size: 17px;
        text-align: center;
        color: ${({ theme }) => theme === "DARK" ? "#fff" : "#111"};

        a{
            color: ${BLUE};
            font-weight: 600;
        }
    }

    @media screen and (max-width: 580px) {
        span{
            font-size: 14px;
        }
        p{
            &,a{
                font-size: 15px;
            }
        }
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
        color: ${({ theme }) => theme == "DARK" ? "#fff" : "#070707"};
    }
    input,.input-container{
        padding: 5px 10px;
        width: 98.5%;
        margin: 0 auto;
        border-radius: 8px;
        display: block;
        font-size: 17px;
        border: 1px solid #008a0e;
        background-color: ${({ theme }) => theme === "DARK" ? "#070707" : "#fff"};
        color: ${({ theme }) => theme == "DARK" ? "#fff" : "#070707"};
        ::placeholder{
            /* color: ${({ theme }) => theme == "DARK" ? "#fff" : "#070707"}; */
        }
    }

    .input-container{
        display: flex;
        align-items: center;
        gap: 9px;

        input{
            flex: 1;
            border: none;
            padding: 0;
            border-radius: 0;
        }

        img{
            width: 20px;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 580px) {
       input, .input-container{
        font-size: 14px;    
       }
    }
`
const SubmitButton = styled.span`
    width: 100%;
    padding: 8px 16px;
    text-align: center;
    background-color: ${PRIMARY_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 98.5%;
    margin: 0 auto;
    margin-top: 16px;
     
    &,span{
        color: ${({ theme }) => theme == "DARK" ? "#111" : "#fff"};
        font-size: 17px;
        font-weight: 600;
        border-radius: 24px;
        cursor: pointer;
    }
    &.google{
        font-weight: 500;
        background-color: ${({ theme }) => theme == "DARK" ? "#0d0d0d" : "#fff"};
        border: 1px solid ${({ theme }) => theme == "DARK" ? "#137cfb" : "#fff"};
        padding: 3px;
    }
    &.google, &>span{
        color: #0085FF;
    }

    &.create{
        margin-top: 0;
        border: 2px solid #a2d5a7;
        background-color: #bce1c0;
        
        a{
            color: #008A0E;
        }
    }

    img{
        width: 38px;
    }

    @media screen and (max-width: 580px) {
        &, span{
            font-size: 15px;
        }
        img{
            width: 28px;
        }
    }
`