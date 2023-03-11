import React, {useState} from 'react';
import '../../App.css';
import {RatingValueType} from './Rating';

type StarPropsType = {
    value: RatingValueType
    onClick:(value: RatingValueType)=>void
    selected: boolean
}


export function Star(props: StarPropsType) {

    return (
        <button onClick={()=>props.onClick(props.value)}>
            {props.selected? <b>star</b> : 'star'}
        </button>
    )
}




