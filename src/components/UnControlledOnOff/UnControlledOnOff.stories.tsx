import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff, UnControlledOnOff_memo} from './UnControlledOnOff';

export default {
    title: 'Components/UnControlledOnOff_memo',
    component: UnControlledOnOff_memo,
}

const callBack = action('on or off clicked')

export const OnMode = () => <UnControlledOnOff_memo defaultOn={true} onChange={callBack}/>;
export const OffMode = () => <UnControlledOnOff_memo defaultOn={false} onChange={callBack}/>;


