import React, {useReducer, useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';
import {reducer} from './reducer';

type AccordionPropsType={
    title: string
}


export function UnControlledAccordion(props:AccordionPropsType) {

    const [collapsed,dispatch]=useReducer(reducer, false);

    return (
        <div>
            <AccordionTitle
                title={props.title}
                dispatch={dispatch}
                collapsed={collapsed}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


