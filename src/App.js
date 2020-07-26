import React, {useState, useCallback, useEffect} from 'react';
import './App.css';
import { Route, Redirect, Switch,BrowserRouter as Router} from 'react-router-dom';
import MainNavigation from './shard/components/Navigation/MainNavigation'
import NewProject from "./projects/pages/NewProject";
import Projects from "./projects/pages/Project";
import Home from "./Home/pages/Home";
import { AuthContext } from './shard/context/auth-context';
import Login from "./users/pages/Login/Login";
import Signup from "./users/pages/Signup/Signup";
import UpdateProject from "./projects/pages/UpdateProject";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(!isLoggedIn){
            const userJson=localStorage.getItem("user_data");
            const userObject=JSON.parse(userJson);
            if(userObject&&userObject.user&&userObject.token){
                setIsLoggedIn(true);

            }else {
                setIsLoggedIn(false)
                 localStorage.removeItem('user_data')

            }
        }
    },[])
    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, [isLoggedIn]);
    let routes;
    if(isLoggedIn){
        routes=  <Switch>
            <Route path="/new-project" exact><NewProject></NewProject></Route>
            <Route path="/projects" exact><Projects></Projects></Route>
            <Route path='/update-project/:id'><UpdateProject></UpdateProject></Route>
            <Route path="/" exact><Home></Home></Route>
            <Redirect to="/" />
        </Switch>
    }else {
        routes=  <Switch>
            <Route path="/login" exact><Login></Login></Route>
            <Route path="/sign_up" exact><Signup></Signup></Route>
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
