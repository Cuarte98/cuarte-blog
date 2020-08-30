import React from 'react';
import styled from 'styled-components';

export const App = styled.main`
    width: 800px;
    min-height: 100vh;
    padding: 0 16px;
    color: white;
    margin:0;
    .wave-container {
        height: 240px;
        position: absolute;
        background-color: #5000ca;
        left: 0;
        top: 0;
        z-index: -1;
            width: 100%;
            > svg {
            position: relative;
            width: 100%;
            top: 100%;
        }
    }
    
    

    
`;

export const Header = styled.header`
    width: 100%;
    height: 40px;
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin: 0;
        font-size: 1.5rem
    }
`
export const Hero = styled.article`
height: 200px;
    h1 {
        font-size: 3rem
    }
`

export const Main = styled.section`
    width: 100%;
    background: white;
    height: 100vh;
    border-radius: 13px 13px 0 0;
    box-shadow: 0 6px 6px rgba(0,0,0,0.2);
`

export const Nav = styled.nav`
   ul{
       display: flex;
       gap: 4px;
        li {
            list-style: none;
            padding: 4px;
            button {
                background: none;
                border-radius: 3px;
                color: white;
                border: none;
                font-size: 1rem;
                padding: 4px 12px;
                :hover {
                    background: rgba(0,0,0,0.8)
                }
            }
        }
    }
`