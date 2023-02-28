import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {ControlledOnOff} from './components/OnOff/ControlledOnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {UnControlledOnOff} from './components/OnOff/UnControlledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accCollapsed, setAccCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    return (
        <>
            <ControlledOnOff on={on}
                             onChange={setOn}
            />
            <UnControlledOnOff onChange={setOn}/> {on.toString()}

            <UnControlledAccordion title={'Menu'}/>
            <Accordion title={'Menu'}
                       collapsed={accCollapsed}
                       onChange={() => {
                           setAccCollapsed(!accCollapsed)
                       }}
            />

            <UnControlledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
        </>
    );
}

export default App;
