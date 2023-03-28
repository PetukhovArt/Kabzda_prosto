import React from 'react';
import {Accordion} from './Accordion';

type BodyPropsType = {
    names?: {id: number, name: string}[]
    onClickCallBack: (id: number)=> void
}

export function AccordionBody(props: BodyPropsType) {
    console.log('AccordionBody rendering')
    return (
            <ul>
                { props.names ?
                    props.names.map(el=> <li
                        key={el.id}
                        onClick={()=> props.onClickCallBack(el.id) }
                    >
                        {el.name}</li>)
                    : 'Names Undefined'}
            </ul>
    );
}
export const AccordionBody_memo = React.memo(AccordionBody) // adds NO rerender for Table, if no changes in state/props (optimization)