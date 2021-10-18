import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import JoblyApi from "./api/api";

import NavBar from "./routes-nav/NavBar";
import HomePage from "./homepage/HomePage";
import CompanyList from "./companies/CompanyList";
import Jobs from "./jobs/Jobs";
import Profile from "./profiles/Profile";
import SignupForm from "./auth/Signup";
import LoginForm from "./auth/Login";
import UserContext from "./auth/UserContext";
import LoadingSpinner from "./common/LoadingSpinner";
import useLocalStorage from "./hooks/useLocalStorage";

import jwt from "jsonwebtoken";

import './App.css';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";

function App({ login, signup }) {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=", infoLoaded,
    "currentUser=", currentUser,
    "token=", token,
);

useEffect(function loadUserInfo() {
  console.debug("App useEffect loadUserInfo", "token=", token);

  async function getCurrentUser() {
    if (token) {
      try {
        let { username } = jwt.decode(token);
        // put the token on the Api class so it can use it to call the API.
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
        setApplicationIds(new Set(currentUser.applications));
      } catch (err) {
        console.error("App loadUserInfo: problem loading", err);
        setCurrentUser(null);
      }
    }
    setInfoLoaded(true);
  }

  // set infoLoaded to false while async getCurrentUser runs; once the
  // data is fetched (or even if an error happens!), this will be set back
  // to false to control the spinner.
  setInfoLoaded(false);
  getCurrentUser();
}, [token]);
  
  /** Authenticate and sign up a user  */
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
    alert("you have been signed up")
  }

  /** authenticate and log in a user */
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
    alert("logged in")
  }
  
    /** Checks if a job has been applied for. */
    function hasAppliedToJob(id) {
      return applicationIds.has(id);
    }
  
    /** Apply to a job: make API call and update set of application IDs. */
    function applyToJob(id) {
      if (hasAppliedToJob(id)) return;
      JoblyApi.applyToJob(currentUser.username, id);
      setApplicationIds(new Set([...applicationIds, id]));
    }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginForm login={login} />
              </Route>
              <Route exact path="/signup">
                <SignupForm signup={signup} />
              </Route>
              <Route exact path="/jobs">
                <Jobs />
              </Route>
              <Route exact path="/companies">
                <CompanyList />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
