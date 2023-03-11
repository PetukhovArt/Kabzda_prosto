import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledAccordion} from './UnControlledAccordion';

export default {
    title: 'Components/UnControlled_Accordion',
    component: UnControlledAccordion,
}

export const ModeChanging = () => <UnControlledAccordion title={'Menu'}/>;


