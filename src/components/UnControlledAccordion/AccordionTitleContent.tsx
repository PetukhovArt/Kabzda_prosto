import React from 'react';

type AccordionTitleContentType = {
    title: string
    setCollapsed: (val: boolean) => void
    collapsed: boolean
}

export function AccordionTitleContent(props: AccordionTitleContentType) {
    return (
        <button onClick={() => props.setCollapsed(!props.collapsed)}>
            ---{props.title}---
        </button>
    );
}