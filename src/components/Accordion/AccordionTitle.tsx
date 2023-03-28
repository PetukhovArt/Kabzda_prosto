import React from 'react';
import {AccordionBody} from './AccordionBody';

type AccordionTitleType={
    title: string
    collapsed: boolean
    onChange:()=>void
    color?: string
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <h3 onClick={(e)=> props.onChange()}
            style={{color: props.color? props.color : 'black'}}
        >
            ---{props.title}---
        </h3>
    );
}
export const AccordionTitle_memo = React.memo(AccordionTitle) // adds NO rerender for Table, if no changes in state/props (optimization)