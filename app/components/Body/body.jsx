import React from "react";
import './body.css';
import {ContextWrapper} from '../ComponentWrapper/Wrapper.jsx'
import StopWatch from '../StopWatch/Stopwatch.jsx'


export default function Body(){
    const { eventState, headerState, updateHeaderState  } = ContextWrapper();
    const navgationclicked = eventState.classClicked;
    
    
    return(
        <div className="body-container-of-alarms">
            <div style = {{display: navgationclicked == 'WorldClock' ? 'block' : 'none'}} className="WorldClock" >
                Clock
            </div>
            <div style = {{display: navgationclicked == 'Alarms' ? 'block' : 'none'}} className="Alarms">Alarms</div>
            <div style = {{display: navgationclicked == 'StopWatch' ? 'block' : 'none'}} className = "StopWatch">
                <StopWatch />
            </div>
            <div style = {{display: navgationclicked == 'Timers' ? 'block' : 'none'}} className="Timers"></div>
        </div>
    )
}