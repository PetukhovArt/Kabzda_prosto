import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, Rating_memo, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Rating_memo',
    component: Rating_memo,
}


export const EmptyStars = () => <Rating_memo value={0} onClick={x => x}/>;
export const Rating1 = () => <Rating_memo value={1} onClick={x => x}/>;
export const Rating2 = () => <Rating_memo value={2} onClick={x => x}/>;
export const Rating3 = () => <Rating_memo value={3} onClick={x => x}/>;
export const Rating4 = () => <Rating_memo value={4} onClick={x => x}/>;
export const Rating5 = () => <Rating_memo value={5} onClick={x => x}/>;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return (
        <Rating_memo value={rating} onClick={setRating}/>
)
};

