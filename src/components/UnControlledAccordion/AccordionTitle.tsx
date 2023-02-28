import React from 'react';
import {AccordionTitleContent} from './AccordionTitleContent';

type AccordionTitleType={
    title: string
    setCollapsed:(val:boolean)=>void
    collapsed: boolean
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <AccordionTitleContent
            title={props.title}
            setCollapsed={props.setCollapsed}
            collapsed={props.collapsed}
        />
    );
}