import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledRating} from './UnControlledRating';

export default {
    title: 'Components/UnControlled_Rating',
    component: UnControlledRating,
}

const callBack=action('rating changed inside component')

export const Rating0 = () => <UnControlledRating defaultStars={0} onChange={callBack}/>;
export const Rating1 = () => <UnControlledRating defaultStars={1} onChange={callBack}/>;
export const Rating2 = () => <UnControlledRating defaultStars={2} onChange={callBack}/>;
export const Rating3 = () => <UnControlledRating defaultStars={3} onChange={callBack}/>;
export const Rating4 = () => <UnControlledRating defaultStars={4} onChange={callBack}/>;
export const Rating5 = () => <UnControlledRating defaultStars={5} onChange={callBack}/>;


