import React from 'react';

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