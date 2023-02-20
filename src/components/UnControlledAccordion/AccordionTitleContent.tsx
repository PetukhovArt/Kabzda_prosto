import React from 'react';

type AccordionTitleContentType = {
    title: string
    onClickCollapse:(val:boolean)=>void
    collapsed: boolean
}

export function AccordionTitleContent(props: AccordionTitleContentType) {
    return (
        <h3 onClick={()=>props.onClickCollapse(!props.collapsed)}>---{props.title}---</h3>
    );
}