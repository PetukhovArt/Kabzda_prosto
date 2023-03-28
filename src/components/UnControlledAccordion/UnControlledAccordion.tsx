import React, {useReducer, useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';
import {reducer} from './reducer';

type AccordionPropsType={
    title: string
}


export function UnControlledAccordion(props:AccordionPropsType) {

    let [state,dispatch]= useReducer (reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle
                title={props.title}
                dispatch={dispatch}
                collapsed={state.collapsed}
            />
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}
export const UnControlledAccordion_memo=React.memo(UnControlledAccordion)


