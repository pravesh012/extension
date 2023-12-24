'use client'
import * as React from 'react';
import './style/style.css';

import WrapperData from './components/ComponentWrapper/Wrapper';
import Header from './components/Header/Header';
import Nagivation from './components/Navigation/navigation';
import Body from './components/Body/body';
function App() {
return (
<>
    <div className='root'>
        <WrapperData>
            <Header />
            <Body />
            <Nagivation />
        </WrapperData>
    </div>
    
</>
);
}
export default App;