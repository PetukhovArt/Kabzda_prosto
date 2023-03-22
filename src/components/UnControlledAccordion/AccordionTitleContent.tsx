import React, {Dispatch} from 'react';
import {ActionType} from './reducer';


type AccordionTitleContentType = {
    title: string
    // setCollapsed: (val: boolean) => void
    collapsed: boolean
    dispatch: Dispatch<ActionType>
}

export function AccordionTitleContent(props: AccordionTitleContentType) {
    return (
        // <button onClick={() => props.setCollapsed(!props.collapsed)}>
        <button onClick={() =>props.dispatch({type: 'TOGGLE-COLLAPSED'})}>
            ---{props.title}---
        </button>
    );
}