import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import './MainNavLink.css';
import {AuthContext} from '../../../../shard/context/auth-context';
import Button from "../../FormElements/Button";
import {useHistory} from 'react-router-dom';


function MainNavLink(props) {
    const auth=useContext(AuthContext);
    const history=useHistory();
    const logoutHandler=()=>{
        auth.logout();
        localStorage.removeItem('user_data');
        history.push('/auth')
    }
    return (
        <ul className="main-navlink-list">
            <li><NavLink to="/">Home</NavLink></li>
            {auth.isLoggedIn ?
                (<>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><Button onClick={logoutHandler}>Logout</Button></li>
                </>)
                :(<>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/sign_up">SignUp</NavLink></li>
                </>)}

        </ul>
    );
}

export default MainNavLink;
