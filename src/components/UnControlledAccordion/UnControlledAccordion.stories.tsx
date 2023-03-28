import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledAccordion, UnControlledAccordion_memo} from './UnControlledAccordion';

export default {
    title: 'Components/UnControlled_Accordion_memo',
    component: UnControlledAccordion_memo,
}

export const ModeChanging = () => <UnControlledAccordion_memo title={'Menu'}/>;


