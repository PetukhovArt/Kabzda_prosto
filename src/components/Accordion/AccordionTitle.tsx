import React from 'react';
import {AccordionTitleContent} from './AccordionTitleContent';

type AccordionTitleType={
    title: string
}

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <AccordionTitleContent title={props.title}/>
    );
}