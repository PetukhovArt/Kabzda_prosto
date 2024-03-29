import React, {useState} from 'react';
import {AccordionTitle} from '../Accordion/AccordionTitle';

export type OnOffPropsType = {
    on: boolean
    onChange: (value:boolean)=> void
}

export function OnOff(props: OnOffPropsType) {

    const OnStyleButton = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const OffStyleButton={
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: props.on ? 'white' : 'red',
        marginLeft: '20px',
    }
    const lightStyle={
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '20px',
        width: '20px',
        borderRadius:'50%',
        backgroundColor: props.on ? 'green' : 'red',
        marginLeft: '20px',
    }

    return (
        <>
        <div>controlled</div>
        <div style={{display: 'flex'}}>

            <button  style={OnStyleButton} onClick={()=>props.onChange(true)}>ON</button>
            <button  style={OffStyleButton} onClick={()=>props.onChange(false)}>OFF</button>
            <div style={lightStyle}></div>
        </div>
        </>
    )
}
export const OnOff_memo = React.memo(OnOff) // adds NO rerender for Table, if no changes in state/props (optimization)




