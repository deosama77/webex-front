import React, { useState } from 'react';
import '../Auth.css'
import Card from '../../../shard/components/UIElements/Card';
import Input from '../../../shard/components/FormElements/Input';
import Button from '../../../shard/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE,
    VALIDATOR_IS_MATCH,
    VALIDATOR_PASSWORD
} from '../../../shard/util/validators';
import { useForm } from '../../../shard/hooks/form-hook';
import { useHistory } from "react-router-dom";
import '../Auth.css';
import {axiosUser} from '../../../shard/axios/axios-user';


const Auth = () => {
    const history=useHistory();
    const [isAccept,setIsAccept]=useState(false);
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
            },
            first_name: {
                value: '',
                isValid: false
            },
            last_name:{
                value:'',
                isValid:false
            },
            date:{
                value:'',
                isValid:false
            },
            c_password:{
                value:'',
                isValid:false
            },
            c_email:{
                value:'',
                isValid:false
            }
        },
        false
    );

    const switchModeHandler = () => {
        // clear any error in status
        setError('');
        history.push('/login')

    };
    // handle change-accept conditions .....
    const conditionChangeHandle=(e)=>{
        setIsAccept(prev=>{
            return !prev
        })

    }

    // handle submitting data
    const submitFunction=async ()=>{
        try{
            setError('')
            // console.log(formState.inputs);
            if(!isAccept){
                alert("please accept the conditions")
                return;
            }
            const data={
                first_name:formState.inputs.first_name.value,
                last_name:formState.inputs.last_name.value,
                email:formState.inputs.email.value,
                password:formState.inputs.password.value,
                is_terms:isAccept,
                date_birth:formState.inputs.date.value
            }
            // console.log("data to send",data)
           const res= await axiosUser.post('/sign_up', data) ;
            if(res){
                 history.push('/login')
                // console.log("response",res)
            }
        }catch (e) {
            setError("Failed to sign up ")
            // console.log("error",error)
        }
    }
    // handle submit form to remote back end
    const authSubmitHandler = (event) => {
        event.preventDefault();
        // clear any previous error
         submitFunction();

    };

    return (
        <Card className="authentication">
            <h2>Registration Required</h2>
            <hr />
            {(error)
            &&<h4 style={{marginTop:3,marginBottom:3,color:'red'}}>{error}</h4> }
            <form onSubmit={authSubmitHandler}>

                    <div className='authentication-form-header'>
                        <Input
                            element="input"
                            id="first_name"
                            type="text"
                            label="First Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a first name."
                            onInput={inputHandler}
                            half={true}
                            placeholder={"First Name"}
                        />
                        <Input
                            element="input"
                            id="last_name"
                            type="text"
                            label="Last Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a last name."
                            onInput={inputHandler}
                            half={true}
                            placeholder={"Last Name"}
                        />
                    </div>
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
                    id="c_email"
                    type="email"
                    label="Confirm E-Mail"
                    validators={[VALIDATOR_IS_MATCH()]}
                    errorText="Not Matched E-Mail"
                    onInput={inputHandler}
                    placeholder={"Confirm E-Mail"}
                    half={true}
                    valToMatch={formState.inputs.email.value}
                />
                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_PASSWORD()]}
                    errorText={"Error Password , please follow the rules"}
                    onInput={inputHandler}
                    placeholder={"Password"}
                />
                <div className="authentication-password">
                    <span>one lower character</span>
                    <span>one special character</span>
                </div>
                <div className="authentication-password">
                    <span>one uppercase character</span>
                    <span>8 characters minimum</span>
                </div>
                <div className="authentication-password">
                    <span>one number</span>

                </div>

                    <Input
                        element="input"
                        id="c_password"
                        type="password"
                        label="Confirm Password"
                        validators={[VALIDATOR_IS_MATCH()]}
                        errorText="Not Matched Password"
                        onInput={inputHandler}
                        placeholder={"Confirm Password"}
                        half={true}
                        valToMatch={formState.inputs.password.value}
                    />
                    <Input
                        element="input"
                        id="date"
                        type="date"
                        label="Date birth"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid Date."
                        onInput={inputHandler}
                        placeholder={"Date Birth"}
                    />
                    <div className='authentication-conditions'>
                        <input type="checkbox" id="condition"
                               defaultChecked={isAccept}
                               onChange={conditionChangeHandle}
                               name="condition" ></input>
                        <label htmlFor="condition"> Accept conditions</label><br/>
                    </div>


                <Button type="submit" disabled={!formState.isValid}>
                    SIGNUP
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                SWITCH TO LOGIN
            </Button>
        </Card>
    );
};

export default Auth;
