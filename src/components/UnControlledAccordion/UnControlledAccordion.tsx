import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type TitleType={
    title: string
    // collapsed: boolean
}

export function UnControlledAccordion(props:TitleType) {

    let [collapsed,SetCollapsed]=useState(true)

    return (
        <div>
            <AccordionTitle
                title={props.title}
                setCollapsed={SetCollapsed}
                collapsed={collapsed}
            />
            {/*<button onClick={()=>(SetCollapsed(!collapsed))}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


