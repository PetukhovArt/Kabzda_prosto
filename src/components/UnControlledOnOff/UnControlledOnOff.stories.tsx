import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from './UnControlledOnOff';

export default {
    title: 'Components/UnControlled_OnOff',
    component: UnControlledOnOff,
}

const callBack = action('on or off clicked')

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callBack}/>;
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callBack}/>;


