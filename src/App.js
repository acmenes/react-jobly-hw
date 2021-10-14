import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import JoblyApi from "./api/api";

import NavBar from "./routes-nav/NavBar";
import HomePage from "./homepage/HomePage";
import CompanyList from "./companies/CompanyList";
import Jobs from "./jobs/Jobs";
import Profile from "./profiles/Profile";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

import './App.css';


function App() {
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
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
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
