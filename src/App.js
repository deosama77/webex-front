import React,{useState,useCallback} from 'react';

import './App.css';
import { Route,
  Redirect, Switch
  ,BrowserRouter as Router} from 'react-router-dom';
import MainNavigation from './shard/components/Navigation/MainNavigation'
import NewProduct from "./products/pages/NewProduct";
import Products from "./products/pages/Products";
import Auth from "./users/pages/Auth";
import Home from "./Home/pages/Home";
import { AuthContext } from './shard/context/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    let routes;
    if(isLoggedIn){
        routes=  <Switch>
            <Route path="/new-product" exact><NewProduct></NewProduct></Route>
            <Route path="/products" exact><Products></Products></Route>
            <Route path="/" exact><Home></Home></Route>
            <Redirect to="/" />
        </Switch>
    }else {
        routes=  <Switch>
            <Route path="/auth" exact><Auth></Auth></Route>
            <Route path="/" exact><Home></Home></Route>
            <Redirect to="/" />
        </Switch>
    }
  return (
      <AuthContext.Provider
          value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
