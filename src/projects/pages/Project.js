import React, {useEffect, useState, useContext} from 'react';
import Search from "../components/Search/Search";
import {AuthContext} from '../../shard/context/auth-context';
import {useHistory} from 'react-router-dom'
import ProjectTable from "../components/Project-table/ProjectTable";
import {axiosProjects} from '../../shard/axios/axios-project';

function Projects(props) {
    const [value,setValue]=useState("");
    const [projects,setProjects]=useState([]);


    // search by input
    const onChangeSearch=(e)=>{
        setValue(e.target.value)

    }
    const onClickSearchHandler=()=>{
        console.log('it works')
    }
    const {logout,isLoggedIn}=useContext(AuthContext);
    const history=useHistory();
    const dataString= localStorage.getItem('user_data');
    let dataObject={};
    if(dataString&& isLoggedIn) {
        dataObject = JSON.parse(dataString);

    }else {
        history.push('/login')
    }
    const {token, user} = dataObject;
    // function to bring data
    const getProjects=async ()=>{
             try{
                 const res=await axiosProjects(token).get(`/${user.id}`);
                 setProjects(res.data.projects)
             }catch (error) {
                 console.log(error)
                 logout();
                 history.push('/');
                 localStorage.removeItem('user_data')
             }

    }
    const refreshHandler=()=>{
        getProjects();
    }
    useEffect(()=>{
       getProjects();
    },[])
    return (
        <div>
            <div>
                <Search onClick={onClickSearchHandler}
                        onChange={onChangeSearch}></Search>
            </div>
            <div>
                <ProjectTable refreshProjects={refreshHandler}
                    valueSearch={value}
                              projects={projects}></ProjectTable>
            </div>
        </div>
    );
}

export default Projects;
