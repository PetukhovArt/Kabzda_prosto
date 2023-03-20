import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

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
            <AccordionTitle title={props.title}
                            color={props.color}
                            collapsed={props.collapsed}
                            onChange={props.onChange}
            />
            {!props.collapsed &&
                <AccordionBody
                    names={props.names}
                    onClickCallBack={props.onClickCallBack}
            />
            }
        </div>
    );
}

