import * as React from 'react';
import './nagivation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBell, faClock, faStopwatch, faHourglass } from '@fortawesome/free-solid-svg-icons';
import { ContextWrapper } from '../ComponentWrapper/Wrapper';


export default function Nagivation(){
    const {updateEventState} = ContextWrapper();
  
     function nagivationHandler(events ){
        console.log('clicked')
        const eventTarget = events.target;
        console.log(eventTarget)
        const value = eventTarget.parentNode.classList;
        const localName = eventTarget.localName;
        
        const typeofClass = new Map(
            [
                ['fa-clock', 'World Clock'],
                ['fa-bell', 'Alarms'],
                ['fa-stopwatch', 'StopWatch'],
                ['fa-hourglass', 'Timers'],
              ]
        );
        
        const itemClicked = {
            classClicked: 'undefined'
        };
    
       
       
        // if user clicks on icons//
        if(localName === 'path' || localName === 'svg'){
            
            switch(localName){
                case 'svg':
                const containedParentValue = typeofClass.get(events.target.classList[1])
                    itemClicked.classClicked = containedParentValue
                    break;
    
                case 'path':
                    const containedValue = typeofClass.get(value[1]);
                    itemClicked.classClicked = containedValue;  
                   
                    break;
            }
            // do something with the itemclicked object//
        }
        else{
            
            if(localName == 'p'){
                itemClicked.classClicked = eventTarget.innerText;
            }
            else{
                console.log(true, 'on div')
                itemClicked.classClicked = typeofClass.get(eventTarget.classList[0]);
            }
    
        }
        updateEventState(itemClicked)
    }
    

    return(
        <div className='nagivation-footer'>
           
                <div className='fa-clock' onClick={nagivationHandler}>
                    <FontAwesomeIcon  className='nagivation-icons-edits' icon={faClock} />
                    <p>World Clock</p>
                </div>
                <div className='fa-bell' onClick={nagivationHandler}>
                    <FontAwesomeIcon className='nagivation-icons-edits-2' icon={faBell} />
                    <p>Alarms</p>
                </div>

                <div className='fa-stopwatch'  onClick={nagivationHandler}>
                    <FontAwesomeIcon  className='nagivation-icons-edits' icon={faStopwatch} />
                    <p>Stop Watch</p>

                </div>
                <div className='fa-hourglass' onClick={nagivationHandler} >
                    <FontAwesomeIcon className='nagivation-icons-edits-2' icon={faHourglass} />
                    <p>Timers</p>
                </div>
                
            
        </div>
    )
}

