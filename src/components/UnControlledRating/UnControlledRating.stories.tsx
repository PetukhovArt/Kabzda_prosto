import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledRating, UnControlledRating_memo} from './UnControlledRating';

export default {
    title: 'Components/UnControlled_Rating_memo',
    component: UnControlledRating_memo,
}

const callBack=action('rating changed inside component')

export const Rating0 = () => <UnControlledRating_memo defaultStars={0} onChange={callBack}/>;
export const Rating1 = () => <UnControlledRating_memo defaultStars={1} onChange={callBack}/>;
export const Rating2 = () => <UnControlledRating_memo defaultStars={2} onChange={callBack}/>;
export const Rating3 = () => <UnControlledRating_memo defaultStars={3} onChange={callBack}/>;
export const Rating4 = () => <UnControlledRating_memo defaultStars={4} onChange={callBack}/>;
export const Rating5 = () => <UnControlledRating_memo defaultStars={5} onChange={callBack}/>;


