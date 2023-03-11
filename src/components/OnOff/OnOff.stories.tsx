import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'Components/OnOff',
    component: OnOff,
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff onChange={callBack} on={true}/>;
export const OffMode = () => <OnOff onChange={callBack} on={false}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <OnOff on={value} onChange={setValue}/>
)
};

