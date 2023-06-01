import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { changeTheme } from '../../store/uiSlice';


const MoonIcon = () => (
    <Icon className='moon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" active={false}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
);

const SunIcon = () => (
    <Icon className='sun' stroke="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" active={true}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </Icon>
);

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dispatch = useDispatch()
    const theme = useSelector(state => state.ui.theme)

    const toggleTheme = () => {
        theme === 'LIGHT' ?
            dispatch(changeTheme({ theme: "DARK" })) :
            dispatch(changeTheme({ theme: "LIGHT" }))
    };

    return (
        <ToggleButton onClick={toggleTheme} className={theme === "DARK" ? 'active' : ''}>
            <MoonIcon />
            <SunIcon />
        </ToggleButton>
    );
};

export default ThemeToggle;




const ToggleButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  .sun{
    display: none;
  }

  &.active {
      transform: rotate(180deg);
    
      .moon{
        display: none;
      }
      .sun{
        display: block;
      }
  }
`;

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;

  &.sun{
    
  }
`;