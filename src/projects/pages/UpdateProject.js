import React, {useEffect, useState} from 'react';

import Input from '../../shard/components/FormElements/Input';
import Button from '../../shard/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_IS_NUMBER
} from '../../shard/util/validators';
import { useForm } from '../../shard/hooks/form-hook';
import './ProjectForm.css';
import {axiosProjects} from '../../shard/axios/axios-project';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import moment from "moment";
const UpdateProject = () => {
    const history=useHistory();

    // const [projectInfo,setProjectInfo]=useState({});
    const [error,setError]=useState();
    const [isLoading,setIsLoading]=useState(true);


    //**************Use Form Hooks *****************
    const [formState, inputHandler,setFormData] = useForm(
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
    //*************End Use Form Hooks************

    // project id to bring project information
    const {id}=useParams();
    // console.log(id)

    // get token , user from local storage
    const dataString=localStorage.getItem('user_data');
    let dataObject ={}
    if(dataString){
        dataObject= JSON.parse(dataString)
    }
    const{token,user}=dataObject;
    // console.log(token,user)

    // *************************** set updated project function****************************
    const setUpdatedProject=async ()=>{
        try{
            let data={}
            if(formState.inputs){
                data= {
                    name:formState.inputs.name.value,
                    status_progress:formState.inputs.status_progress.value,
                    status_provider:formState.inputs.status_provider.value,
                    resources:Number(formState.inputs.resources.value),
                    price:Number(formState.inputs.price.value),
                    provider:"Some one updated",
                    complicity:Number(formState.inputs.complicity.value),
                    offers:Number(formState.inputs.offers.value),
                    start_date:formState.inputs.start_date.value,
                    end_date:formState.inputs.end_date.value,
                }
            }

            const response=axiosProjects(token).patch(`/${id}/user/${user.id}`,data)
          if(response){
              history.push("/projects")
          }
            // console.log(response.data)
        }catch (e) {
            console.log(e)
            setError("some thing wrong : not upadated")
        }

    }
    // ***********************End Set updated Project Function**********************

    // *************************projectSubmitHandler******************************
    const ProjectSubmitHandler = event => {
        event.preventDefault();
        // console.log("inputs: ",formState.inputs); // send this to the backend!
        setUpdatedProject();
    };
    //*************************************End projectSubmitHandler**********************

    //********************use Effect******************************
    useEffect(()=>{
        SetProjectInfoToForm();
    },[])

    //************************************* Set Data to project form**************
    // http://localhost:4001/projects/projectId/user/userId
    const SetProjectInfoToForm=async ()=>{
        try {
            const response= await axiosProjects(token).get(`/${id}/user/${user.id}`)
            if(response.data&&response.data.projects&&response.data.projects.length>0){
                // setProjectInfo(response.data.projects[0])
                setFormData(
                    {
                        name: {
                            value: response.data.projects[0].name,
                            isValid: true
                        },
                        status_progress: {
                            value: response.data.projects[0].status_progress,
                            isValid: true
                        },
                        status_provider: {
                            value: response.data.projects[0].status_provider,
                            isValid: true
                        },
                        complicity: {
                            value: response.data.projects[0].complicity.toString(),
                            isValid: true
                        },
                        resources: {
                            value: response.data.projects[0].resources,
                            isValid: true
                        },
                        price: {
                            value: response.data.projects[0].price,
                            isValid: true
                        },
                        offers: {
                            value: response.data.projects[0].offers,
                            isValid: true
                        },
                        start_date: {
                            value: moment(response.data.projects[0].start_date).format("yyyy-MM-D"),
                            isValid: true
                        },
                        end_date: {
                            value: moment(response.data.projects[0].end_date).format("yyyy-MM-D"),
                            isValid: true
                        }
                    },
                    true
                );
            }
          setIsLoading(false)
        } catch (e) {
            setError("Wrong to Fetch project data")
            setIsLoading(false)
        }

    }


    //************************************End Set Data to project form **********

    if(isLoading){
        return <div className='center'><h1>Loading</h1></div>
    }
    if(error){
        return <div className="center"><h1>{error}</h1></div>
    }
    return (
        <>
            {/*{console.log("formState",formState)}*/}
            {/*{console.log("projectInfo",projectInfo.end_date)}*/}
            <form className="project-form" onSubmit={ProjectSubmitHandler}>
                <div><h2 style={{textAlign:'center'}}>Update Project Form</h2></div>
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
                        initialValue={formState.inputs.name.value}
                        initialValid={formState.inputs.name.isValid}
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
                        initialValue={formState.inputs.status_progress.value}
                        initialValid={formState.inputs.status_progress.isValid}
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
                        initialValue={formState.inputs.status_provider.value}
                        initialValid={formState.inputs.status_provider.isValid}
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
                        initialValue={formState.inputs.resources.value}
                        initialValid={formState.inputs.resources.isValid}
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
                        initialValue={formState.inputs.complicity.value}
                        initialValid={formState.inputs.complicity.isValid}
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
                        initialValue={formState.inputs.price.value}
                        initialValid={formState.inputs.price.isValid}
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
                        initialValue={formState.inputs.offers.value}
                        initialValid={formState.inputs.offers.isValid}
                    />
                </div>

                <div className='project-form-row-inputs'>
                    {/*<h4 style={{marginLeft:"20px"}}>{formState.inputs.start_date.value}</h4>*/}
                    <Input
                        id="start_date"
                        type="date"
                        element="input"
                        label="Start Date"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid Start Date."
                        onInput={inputHandler}
                        initialValue={moment(formState.inputs.start_date.value).format("yyyy-MM-D")}
                        initialValid={formState.inputs.start_date.isValid}
                    />
                    {/*<h4>{formState.inputs.end_date.value}</h4>*/}
                    <Input
                        id="end_date"
                        element="input"
                        type="date"
                        label="End Date"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid End date."
                        onInput={inputHandler}
                        initialValue={moment(formState.inputs.end_date.value).format('yyyy-MM-D')}
                        initialValid={formState.inputs.end_date.isValid}
                    />
                </div>

                <div className="project-form-row-inputs">
                    <Button type="submit" disabled={!formState.isValid}>
                        UPDATE PROJECT
                    </Button>
                </div>
            </form>
        </>
    );
};

export default UpdateProject;
