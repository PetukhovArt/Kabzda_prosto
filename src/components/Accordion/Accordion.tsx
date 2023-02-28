import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccPropsType={
    title: string
    collapsed: boolean
    onChange:()=>void
}

export function Accordion(props:AccPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title}
                            collapsed={props.collapsed}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

