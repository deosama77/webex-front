import React, { useState} from 'react';

import Input from '../../shard/components/FormElements/Input';
import Button from '../../shard/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_IS_NUMBER
} from '../../shard/util/validators';
import { useForm } from '../../shard/hooks/form-hook';
import './ProjectForm.css';
import {axiosProjects} from '../../shard/axios/axios-project';
import {useHistory} from 'react-router-dom'
const NewProject = () => {
    const history=useHistory();
    const [error,setError]=useState();
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            status_progress: {
                value: '',
                isValid: false
            },
            status_provider: {
                value: '',
                isValid: false
            },
            complicity: {
                value: '',
                isValid: false
            },
            resources: {
                value: '',
                isValid: false
            },
            price: {
                value: '',
                isValid: false
            },
            start_date: {
                value: '',
                isValid: false
            },
            end_date: {
                value: '',
                isValid: false
            }
        },
        false
    );


    // get token , user from local storage
    const dataString=localStorage.getItem('user_data');
    let dataObject ={}
    if(dataString){
        dataObject= JSON.parse(dataString)
    }
    const{token,user}=dataObject;
    // console.log(token,user)

    const setProject=async ()=>{
        try{
            let data={}
            if(formState.inputs){
                data= {
                    name:formState.inputs.name.value,
                    status_progress:formState.inputs.status_progress.value,
                    status_provider:formState.inputs.status_provider.value,
                    resources:Number(formState.inputs.resources.value),
                    price:Number(formState.inputs.price.value),
                    provider:"Some one",
                    complicity:Number(formState.inputs.complicity.value),
                    offers:Number(formState.inputs.offers.value),
                    start_date:formState.inputs.start_date.value,
                    end_date:formState.inputs.end_date.value,
                }
            }


            const response=axiosProjects(token).post(`/${user.id}`,data)
            if(response){
                history.push("/projects")
            }
            // console.log(response.data)
        } catch (e) {
            setError("Some thing wrong , didn't add any project")
            console.log(e)
        }
    }

    //*********************Project Submit Handler************
    const ProjectSubmitHandler = event => {
        event.preventDefault();
        console.log("inputs: ",formState.inputs); // send this to the backend!
        setProject();
    };

    //************************Return value*************
    return (
        <form className="project-form" onSubmit={ProjectSubmitHandler}>
            <div><h2 style={{textAlign:'center'}}>Add New Project Form</h2></div>
            {error &&<div><h4 style={{color:'red'}}>{error}</h4></div>}
            <div className="project-form-title">
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Project Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Name for project."
                    onInput={inputHandler}
                    placeholder="Project Name"
                />
            </div>
           <div className='project-form-row-inputs'>
                <Input
                    id="status_progress"
                    element="input"
                    type="text"
                    label="Status Progress"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid status progress."
                    onInput={inputHandler}
                    placeholder="Status Progress"
                />
                <Input
                    id="status_provider"
                    element="input"
                    type="text"
                    label="status_provider"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid status provider."
                    onInput={inputHandler}
                    placeholder="Status Provider"
                />
            </div>

            <div className='project-form-row-inputs'>
                <Input
                    id="resources"
                    element="input"
                    type="number"
                    label="Resources"
                    validators={[VALIDATOR_IS_NUMBER()]}
                    errorText="Please enter a valid number."
                    onInput={inputHandler}
                    placeholder="Resources"
                />

                <Input
                    id="complicity"
                    element="input"
                    type="number"
                    label="complicity"
                    validators={[VALIDATOR_IS_NUMBER()]}
                    errorText="Please enter a valid number."
                    onInput={inputHandler}
                    placeholder="Complicity"
                />
            </div>


            <div className='project-form-row-inputs'>
                <Input
                    id="price"
                    element="input"
                    type="number"
                    label="Price"
                    validators={[VALIDATOR_IS_NUMBER()]}
                    errorText="Please enter a valid number."
                    onInput={inputHandler}
                    placeholder="Price"
                />
                <Input
                    id="offers"
                    element="input"
                    label="Offers"
                    type="number"
                    validators={[VALIDATOR_IS_NUMBER()]}
                    errorText="Please enter a valid number."
                    onInput={inputHandler}
                    placeholder="Offers"
                />
            </div>

            <div className='project-form-row-inputs'>
                <Input
                    id="start_date"
                    type="date"
                    element="input"
                    label="Start Date"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Start Date."
                    onInput={inputHandler}
                    inlineBlock
                />
                <Input
                    id="end_date"
                    element="input"
                    type="date"
                    label="End Date"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid End date."
                    onInput={inputHandler}

                />
            </div>

            <div className="project-form-row-inputs">
                <Button type="submit" disabled={!formState.isValid}>
                    ADD PROJECT
                </Button>
            </div>

        </form>
    );
};

export default NewProject;
