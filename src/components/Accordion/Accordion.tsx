import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type TitleType={
    title: string
    collapsed: boolean
}

export function Accordion(props:TitleType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

export function Accordion2(props:TitleType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    } else
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        );
}
