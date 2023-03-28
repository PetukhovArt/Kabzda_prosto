import React from 'react';

export function AccordionBody() {
    return (
            <ul>
                <li>Body1</li>
                <li>Body2</li>
                <li>Body3</li>
            </ul>
    );
}
export const AccordionBody_memo=React.memo(AccordionBody)