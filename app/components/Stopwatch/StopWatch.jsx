import * as React from 'react';
import { useState, useRef } from 'react';
import './StopWatch.css'


export default function StopWatch(){

    const TrackObject = useRef({
        milliSeconds: 0,
        seconds: 0,
        minutes: 0,
        
    });
    const [milliSeconds, setMilliSeconds] = useState('.00');
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
 
    
    const [startInterval, setStartInterval] = useState(null);
    
    const [startStop, setstartStop] = useState("Start");
  
       

    function handleStopWatchClicked(events){
        if(events.target.classList.contains("btn-stop_start")){
            return;
            // return if clicked the parent //
        }

        else{
            
            const whichButton = events.target.innerText;


            if( whichButton === 'Start' ){
                // might need the date info when user clicked later//

                setStartInterval(
                    setInterval(()=>{
                        let current = TrackObject.current;
                       

                        if(current.milliSeconds <= 9){
                            
                            setMilliSeconds(()=>{

                                return `.0${current.milliSeconds}`
                            });
                            current.milliSeconds++
                        }
                        else if( current.milliSeconds>= 9 && current.milliSeconds !== 99 ){

                            setMilliSeconds(()=>{
                                return `. ${current.milliSeconds}`;
                            });
                            current.milliSeconds++
                        }
                        else{
                            // when timer is == 100

                            current.seconds++;
                            
                            current.milliSeconds = 0;
                        };

                        if( current.seconds <=9 ){
                            //when second is 0-9//
                            setSeconds(()=>{
                                return `0${current.seconds}`
                            });
                        }
                        else {
                           
                            setSeconds(()=>{
                                return `${current.seconds}`
                            });

                        };

                        if( current.seconds >= 60){
                            current.minutes++;
                            
                           if(minutes <=9 ){
                            setMinutes(()=>{
                                return `0${current.minutes}`;
                            })
                           }
                           else{
                                setMinutes(()=>{
                                return current.minutes;
                                })
                           }
                            current.seconds = 0;
                        };
                       
                    
                     
                    
                    }, 10)
                )
                setstartStop("Stop");
            }
            else if(whichButton == "Stop"){
            
                
                // clear the setDate useRef//

                // stops the intervals and turns the button to Start//
                clearInterval(startInterval);
                setStartInterval(null)
                setstartStop("Start");
            }

            else if(whichButton == "Reset"){
                
                TrackObject.current = {
                    milliSeconds: 0,
                    seconds: 0,
                    minutes: 0,
                    
                };
                clearInterval(startInterval)
                setStartInterval(null);
                setMilliSeconds(".00");
                setSeconds("00");
                setMinutes("00");
                setstartStop("Start")
                
            }
        }
    }



    return(
        <>
            <div className='Timer_StopWatch_container'>
                <p>{minutes + ":" + seconds + milliSeconds }</p>
            </div>
            <div className='btn-stop_start' onClick={handleStopWatchClicked} >
                <button >Reset</button>
                <button style= {{backgroundColor:  startStop === "Stop" ? " rgb(247, 93, 93) ": " rgb(68, 160, 68)", color: startStop === 'Stop' ? "rgb(204, 21, 21)": " rgb(9, 238, 9)"  }} >{ startStop }</button>
            </div>
            <div className='laps-container'></div>     

        </>
        

    )
}