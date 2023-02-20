import React, {useState} from 'react';
import styled from 'styled-components'

// type LightPropsType = {
//     light: boolean
// }

// const ButtonOnOff = styled.button`
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   height: 60px;
//   width: 60px;
//   background-color: ${props => {
//     if (props.color === 'green') return 'green'
//     if (props.color === 'red') return 'red'
//     else return 'white'
// }};
//   margin: 10px;
// `

// const Light = styled.span`
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   height: 20px;
//   width: 20px;
//   margin: 10px;
//   background-color: ${props => {
//     if (props.color === 'green') return 'green'
//     if (props.color === 'red') return 'red'
//     else return 'white'
// }};
// `

export function OnOff(props: any) {
    let [on,setOn]=useState(false)
    const OnStyleButton = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'green' : 'white'
    };
    const OffStyleButton={
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'white' : 'red',
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
        backgroundColor: on ? 'green' : 'red',
        marginLeft: '20px',
    }

    return (
        <div style={{display: 'flex'}}>
            <button  style={OnStyleButton} onClick={()=>setOn(true)}>ON</button>
            <button  style={OffStyleButton} onClick={()=>setOn(false)}>OFF</button>
            <div style={lightStyle}></div>
            {/*<ButtonOnOff color={props.light ? 'green' : 'white'}>ON</ButtonOnOff>*/}
            {/*<ButtonOnOff color={props.light ? 'white' : 'red'}>OFF</ButtonOnOff>*/}
            {/*<Light color={props.light ? 'green' : 'red'}></Light>*/}
        </div>
    )
}



