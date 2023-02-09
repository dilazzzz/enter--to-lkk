import React from 'react';
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div>
            <Link to={'/login'}>
                <button style={{fontSize: 26}}>Log in</button>
            </Link>
        </div>
    );
};

export default StartPage;