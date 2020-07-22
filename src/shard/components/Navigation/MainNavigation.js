import React from 'react';
import "./MainNavigation.css"
import MainNavLink from "./MainNavLink/MainNavLink";
function MainNavigation(props) {
    return (
        <div className="main-navigation-container">
          <div className="main-navigation-logo"><h3>Logo</h3></div>
         <nav><MainNavLink></MainNavLink></nav>
        </div>
    );
}

export default MainNavigation;
