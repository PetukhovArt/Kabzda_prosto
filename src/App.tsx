import React from 'react';
import './App.css';
import {Rating} from './components/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    return (
        <>
            <OnOff light={true}/>
            <OnOff light={false}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
    );
}

export default App;
