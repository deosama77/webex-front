import axios from "axios";
import {URL_PROJECT_BASE} from "../util/urls";
// var CancelToken = axios.CancelToken;
// var cancel;

export const axiosProjects=(token)=>{
    return axios.create({
        baseURL: URL_PROJECT_BASE,
        headers: {
            authorization: `Bearer ${token}`
        },
    //     cancelToken: new CancelToken(function executor(c) {
    //     // An executor function receives a cancel function as a parameter
    //     cancel = c;
    // }),
    })
}
