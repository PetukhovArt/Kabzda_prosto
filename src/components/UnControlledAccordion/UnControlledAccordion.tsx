import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type TitleType={
    title: string
    // collapsed: boolean
}

export function UnControlledAccordion(props:TitleType) {

    let [collapsed,SetCollapsed]=useState(true)
let onClickCollapse=(val: boolean)=> {
    SetCollapsed(val)
}
    return (
        <div>
            <AccordionTitle
                title={props.title}
                onClickCollapse={onClickCollapse}
                collapsed={collapsed}
            />
            {/*<button onClick={()=>(SetCollapsed(!collapsed))}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


