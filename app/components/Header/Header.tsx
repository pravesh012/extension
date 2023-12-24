import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { ContextWrapper } from '../ComponentWrapper/Wrapper';

export default function Header(){
    const { eventState, headerState, updateHeaderState  } = ContextWrapper();
   
    function HandleShowPlus(){
        if( eventState.classClicked === 'StopWatch' ){
            return <div>''</div>
        }
        else{
            
            return(
                <div className='container-of-plus' onClick={handleHeaderClicked} >
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            )
        }
    }
    function handleHeaderClicked(events: any ){
        const eventTarget = events.target;
        if(eventTarget.innerText === 'Edits'){
            // when edits clicked
            updateHeaderState({clicked: eventTarget})
        }
        else{
            // plus clicked
            updateHeaderState({clicked: eventState})
        }
    }
    
    return(
        <div className='header-container-of-Alarms'>
            <div className='edit-container' onClick={handleHeaderClicked}>
                <p>Edits</p>
            </div>
            
            <div >
                <p id = 'show-user-clicked'>{ eventState.classClicked } </p>
            </div>

            < HandleShowPlus />
        </div>
    )
}