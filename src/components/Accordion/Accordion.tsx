import React from 'react';
import {AccordionTitle, AccordionTitle_memo} from './AccordionTitle';
import {AccordionBody, AccordionBody_memo} from './AccordionBody';

export type AccPropsType={
    title: string
    collapsed: boolean
    onChange:()=>void
    color: string
    names: {id: number, name: string}[]
    onClickCallBack: (id: number)=> void
}

export function Accordion(props:AccPropsType) {


    return (
        <div>
            <AccordionTitle_memo title={props.title}
                            color={props.color}
                            collapsed={props.collapsed}
                            onChange={props.onChange}
            />
            {!props.collapsed &&
                <AccordionBody_memo
                    names={props.names}
                    onClickCallBack={props.onClickCallBack}
            />
            }
        </div>
    );
}
export const Accordion_memo = React.memo(Accordion) // adds NO rerender for Table, if no changes in state/props (optimization)

