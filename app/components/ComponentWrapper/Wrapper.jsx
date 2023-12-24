import * as React from 'react';
import { useContext, createContext, useState  } from 'react';



let WrapperContext = createContext(undefined);

export default function WrapperData ( {children } ){
    const [eventState, setEventState] = useState({});
    const [ headerState, setHeaderState ] = useState({
    });

    const updateEventState = (arg)=>{
      return setEventState(arg)
    };
    const updateHeaderState = (arg)=>{
      return setHeaderState(arg)
    }
    return(
      <WrapperContext.Provider value = { {eventState, updateEventState, headerState, updateHeaderState} } >
        {children}
      </WrapperContext.Provider>
    )
};

export const ContextWrapper = () => {
  return useContext(WrapperContext);
};
