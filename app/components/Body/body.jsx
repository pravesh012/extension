import React from "react";
import './body.css';
import {ContextWrapper} from '../ComponentWrapper/Wrapper.jsx'

export default function Body(){
    const { eventState, headerState, updateHeaderState  } = ContextWrapper();
   
    
    
    return(
        <div className="body-container-of-alarms">
            
        </div>
    )
}