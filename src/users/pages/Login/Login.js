import React, { useState, useContext } from 'react';

import Card from '../../../shard/components/UIElements/Card';
import Input from '../../../shard/components/FormElements/Input';
import Button from '../../../shard/components/FormElements/Button';
import {VALIDATOR_EMAIL, VALIDATOR_PASSWORD, VALIDATOR_REQUIRE} from '../../../shard/util/validators';
import { useForm } from '../../../shard/hooks/form-hook';
import { AuthContext } from '../../../shard/context/auth-context';
import { useHistory } from "react-router-dom";
import '../Auth.css';
import {axiosUser} from '../../../shard/axios/axios-user';

// switch between sign up and login
const Login = () => {
    const history=useHistory();
    const auth = useContext(AuthContext);
    const [error,setError]=useState('');

    //  init state for inputs reducer . look at user form
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const authSubmitHandler = event => {
        event.preventDefault();
        // clear any previous error
        setError('')

            console.log(formState.inputs);
            axiosUser.post("/login",{
                email:formState.inputs.email.value,
                password:formState.inputs.password.value
            }).then(res=>{
                const user=JSON.stringify({
                    user: res.data.user,
                    token:res.data.token
                })
                localStorage.setItem("user_data",user);
                auth.login();
                history.push('/');
                setError('')
            }).catch(error=>{
                setError("Wrong email or password")
            })

    };

    const switchModeHandler=()=>{
        history.push('/sign_up')
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            {(error)
            &&<h4 style={{marginTop:3,marginBottom:3,color:'red'}}>{error}</h4> }
            <form onSubmit={authSubmitHandler}>
                <Input
                    element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address."
                    onInput={inputHandler}
                    placeholder={"E-Mail"}
                />

                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_REQUIRE]}
                     errorText="Password must minimum 8 characters"
                    onInput={inputHandler}
                    placeholder={"Password"}
                />


                <Button type="submit" disabled={!formState.isValid}>
                    Login
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                SWITCH TO Signup
            </Button>
        </Card>
    );
};

export default Login;
