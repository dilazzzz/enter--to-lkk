import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";
import {Switch, Route} from 'react-router-dom'
import StartPage from "./components/StartPage";
import React from "react";
import Profile from "./components/Profile";

function App() {
  return (
    <div style={{marginTop: 100}} className="App">
        <Switch>
            <Route exact path={'/'} component={StartPage}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/main'} component={Main}></Route>
            <Route path={'/profile'} component={Profile}></Route>
        </Switch>
    </div>
  );
}

export default App;
