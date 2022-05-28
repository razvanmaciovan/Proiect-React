import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import { auth, provider } from '../firebase';

export default function Login() {
  const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error)=>
      alert(error.messages)
    )

  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://c8.alamy.com/comp/W3XF6E/prolog-concept-illustration-using-code-for-developing-programs-and-app-prolog-website-code-with-colourful-tags-in-browser-view-on-dark-background-pr-W3XF6E.jpg"
          alt=""
        />
        <h1>Sign in</h1>
        <p>PLF/IA/SG5</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  background-color: var(--bg-color);
  height: 100vh;
  display: grid;
  place-items: center;
`
const LoginInnerContainer = styled.div`
  padding:100px;
  text-align:center;
  background-color: var(--beige);
  border-radius: 10px;
  >img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`