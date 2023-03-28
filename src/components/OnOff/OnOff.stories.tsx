import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {OnOff, OnOff_memo} from './OnOff';

export default {
    title: 'Components/OnOff_memo',
    component: OnOff_memo,
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff_memo onChange={callBack} on={true}/>;
export const OffMode = () => <OnOff_memo onChange={callBack} on={false}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <OnOff_memo on={value} onChange={setValue}/>
)
};

