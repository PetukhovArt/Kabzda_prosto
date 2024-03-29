import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accCollapsed, setAccCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(false)

    return (
        <>
            <OnOff on={on}
                   onChange={setOn}
            />
            <UnControlledOnOff onChange={setOn}/> {on.toString()}

            <UnControlledAccordion title={'Menu'}/>
            {/*<Accordion title={'Menu'}*/}
            {/*           collapsed={accCollapsed}*/}
            {/*           onChange={() => {setAccCollapsed(!accCollapsed)}}*/}
            {/*/>*/}

            <UnControlledRating onChange={setRatingValue}/> {/*onChange for StoryBook , value??? */}
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
        </>
    );
}

export default App;
