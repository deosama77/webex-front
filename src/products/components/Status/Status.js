import React from 'react';
import './Status.css'
function Status(props) {
    return (
        <div className='status-container'>
            <div className={`status-item ${props.status==='my'? 'red'
                :(props.status==='acquire'? 'green':'blue')}`}></div>
        </div>
    );
}

export default Status;
