import React from 'react';

type AccordionTitleType={
    title: string
    collapsed: boolean
    onChange:()=>void
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <h3 onClick={props.onChange}>
            ---{props.title}---
        </h3>
    );
}