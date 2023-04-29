import React from 'react';
import {Clock} from './Clock';
import {DigitalClock} from './Clock';
import {AnalogClock} from './Clock';

export default {
    title: 'Components/Clock',
    component: Clock
}

export const ChangeModeExample = () => {
    return <Clock/>
}
export const ExampleDigitalCLock = () => {
    return <DigitalClock/>
}
export const ExampleAnalogClock = () => {
    return <AnalogClock size={300}/>
}

