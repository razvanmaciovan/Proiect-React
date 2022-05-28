import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Switch,Link,Route
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from "react-spinkit";

function App() {
  const [user,loading] = useAuthState(auth);
  if(loading) {
    return (
      <LoadingScreen>
        <LoadingScreenContents>
          <img
            src="https://c8.alamy.com/comp/W3XF6E/prolog-concept-illustration-using-code-for-developing-programs-and-app-prolog-website-code-with-colourful-tags-in-browser-view-on-dark-background-pr-W3XF6E.jpg"

          />
          <Spinner
          name="three-bounce"
          color="var(--beige)"
          fadeIn="none"/>
        </LoadingScreenContents>
      </LoadingScreen>
    )
  }
  return (
    <div className="app">

      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
          <Header />
            <AppBody>
              <Sidebar/>
              <Switch>
                <Route path ="/" exact>
                  <Chat/>
                </Route>
              </Switch>
            </AppBody>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;`;

const LoadingScreen = styled.div`
display:grid;
background-color:var(--bg-color);
   place-items:center;
   height: 100vh;
   width:100%;`;
const LoadingScreenContents = styled.div`
text-align: center;
  padding-bottom: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  >img {
     height:100px;
     padding:20px;
     margin-bottom: 40px;
  }`;
