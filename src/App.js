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

import './App.css';


function App({ login, signup }) {
  
  /** Authenticate and sign up a user  */
  async function signup(signupData) {
    // try {
    //   let token = await JoblyApi.signup(signupData);
    //   setToken(token);
    //   return { success: true };
    // } catch (errors) {
    //   console.error("signup failed", errors);
    //   return { success: false, errors };
    // }
    alert("you have been signed up")
  }

  /** authenticate and log in a user */
  async function login(loginData) {
    // try {
    //   let token = await JoblyApi.login(loginData);
    //   setToken(token);
    //   return { success: true };
    // } catch (errors) {
    //   console.error("login failed", errors);
    //   return { success: false, errors };
    // }
    alert("logged in")
  }
  
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
