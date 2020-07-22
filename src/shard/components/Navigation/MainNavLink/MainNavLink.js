import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import './MainNavLink.css';
import {AuthContext} from '../../../../shard/context/auth-context';

function MainNavLink(props) {
    const auth=useContext(AuthContext)
    return (
        <ul className="main-navlink-list">
            <li><NavLink to="/">Home</NavLink></li>
            {/*<li><NavLink to="/products">Products</NavLink></li>*/}
            {/* <li><NavLink to="/auth">Auth</NavLink></li>*/}
            {auth.isLoggedIn ? (<li><NavLink to="/products">Products</NavLink></li>)
                :(<li><NavLink to="/auth">Auth</NavLink></li>)}

        </ul>
    );
}

export default MainNavLink;
