import React from 'react';
import {FaSearch} from "react-icons/fa";
import {IconContext} from "react-icons"
import "./Search.css"
import './Search.css'
import Button from "../../../shard/components/FormElements/Button";
import Status from "../Status/Status";
function Search(props) {
    return (
        //1
        <div className='search-container'>
            {/*2*/}
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
         <div className='search-input-container'>
             {/*3*/}
             <div className='search-input-group'>
                 {/*4*/}
                 <div className="search-input-icon">
                     <FaSearch></FaSearch>
                 </div>
                 <input type='text' onChange={props.onChange}/>
             </div>
             <div className='search-input-button'>
                 <Button onClick={props.onClick} inverse>Search</Button>
             </div>

         </div>
        </IconContext.Provider>
         <div className='button-group'>
             <Button inverse>All</Button>
             <Button inverse><div className="search-button-status"><Status status='my'></Status>My</div></Button>
             <Button inverse><div className="search-button-status"><Status status='acquire'></Status>Acquired</div></Button>
             <Button inverse><div className="search-button-status"><Status status='save'></Status>Saved</div></Button>
         </div>
        </div>
    );
}

export default Search;
