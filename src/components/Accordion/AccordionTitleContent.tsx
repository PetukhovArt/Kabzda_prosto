import React from 'react';

type AccordionTitleContentType = {
    title: string
}

export function AccordionTitleContent(props: AccordionTitleContentType) {
    return (
        <h3>---{props.title}---</h3>
    );
}