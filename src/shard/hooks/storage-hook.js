import React from 'react';
import  {useHistory} from 'react-router-dom';
export const useStorage=()=>{
    const history=useHistory();
    try{
        const userString=localStorage.getItem('user_data');
        const userObject=JSON.parse(userString);
        const {token,user}=userObject;
        if(!token||!user){
            history.push('/')
        }
        return [token,user]
    }catch (e) {
        console.log("Error occurred : ",e)
        history.push('/')
    }

}
