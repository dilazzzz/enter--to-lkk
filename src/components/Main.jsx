import React from 'react';
import img from '../94c56e15f13f1de4740a76742b0b594f.jpeg'
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

const Main = ({history}) => {

    const logOut = () => {
        localStorage.setItem('isLogin', 'false')
        history.push('/')
    }

    const enterToProfile = () => {
        history.push('/profile')
    }

    if (localStorage.getItem('isLogin') !== 'true') {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <button onClick={enterToProfile}>Profile</button>
            <button onClick={logOut}>Log out</button>
            <h1>Main content</h1>
            <img style={{width: 1300, height: 700}} src={img} alt=""/>
        </div>
    );
};

export default withRouter(Main);