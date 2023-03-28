import React, {Dispatch} from 'react';
import {AccordionTitleContent, AccordionTitleContent_memo} from './AccordionTitleContent';
import {ActionType} from './reducer';
import {AccordionBody} from './AccordionBody';

type AccordionTitleType={
    title: string
    // setCollapsed:(val:boolean)=>void
    dispatch: Dispatch<ActionType>,
    collapsed: boolean
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <AccordionTitleContent_memo
            title={props.title}
            // setCollapsed={props.setCollapsed}
            collapsed={props.collapsed}
            dispatch={props.dispatch}
        />
    );
}
export const AccordionTitle_memo=React.memo(AccordionTitle)