import React from 'react';
import './App.css';
import {Rating} from './components/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating';

function App() {
    return (
        <>
            <OnOff/>
            <UnControlledAccordion title={'Menu'}/>
            <UnControlledRating/>
        </>
    );
}

export default App;
