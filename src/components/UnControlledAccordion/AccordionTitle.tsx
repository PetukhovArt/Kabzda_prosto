import React, {Dispatch} from 'react';
import {AccordionTitleContent} from './AccordionTitleContent';
import {ActionType} from './reducer';

type AccordionTitleType={
    title: string
    // setCollapsed:(val:boolean)=>void
    collapsed: boolean
    dispatch: Dispatch<ActionType>
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <AccordionTitleContent
            title={props.title}
            // setCollapsed={props.setCollapsed}
            collapsed={props.collapsed}
            dispatch={props.dispatch}
        />
    );
}