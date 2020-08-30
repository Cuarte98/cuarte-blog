import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { App, Header, Nav, Hero, Main } from '../src/components/styled';
export default function Home() {
  return (
    <App>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/bao2evm.css" />
      </Head>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,224L21.8,202.7C43.6,181,87,139,131,133.3C174.5,128,218,160,262,197.3C305.5,235,349,277,393,277.3C436.4,277,480,235,524,213.3C567.3,192,611,192,655,186.7C698.2,181,742,171,785,165.3C829.1,160,873,160,916,170.7C960,181,1004,203,1047,186.7C1090.9,171,1135,117,1178,112C1221.8,107,1265,149,1309,149.3C1352.7,149,1396,107,1418,85.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Header>
        <h1>Franco Cuarterolo</h1>
        <Nav>
          <ul>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Recursos</button>
            </li>
            <li>
              <button>Sobre mi</button>
            </li>
          </ul>
        </Nav>
      </Header>
      <Hero>
        <h1>Hi! Welcome to my blog</h1>
        <p>lets start coding</p>
      </Hero>
      <Main> </Main>
    </App>
  );
}
