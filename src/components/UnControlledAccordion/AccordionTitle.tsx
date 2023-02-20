import React from 'react';
import {AccordionTitleContent} from './AccordionTitleContent';

type AccordionTitleType={
    title: string
    onClickCollapse:(val:boolean)=>void
    collapsed: boolean
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <AccordionTitleContent
            title={props.title}
            onClickCollapse={props.onClickCollapse}
            collapsed={props.collapsed}
        />
    );
}