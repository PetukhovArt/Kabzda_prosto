import React from 'react';
import styled from 'styled-components'

type LightPropsType = {
    light: boolean
}


export function OnOff(props: LightPropsType) {
    return (
        <div style={{display: 'flex'}}>
            <ButtonOnOff color={props.light ? 'green' : 'white'}>ON</ButtonOnOff>
            <ButtonOnOff color={props.light ? 'white' : 'red'}>OFF</ButtonOnOff>
            <Light color={props.light ? 'green' : 'red'}></Light>
        </div>
    )
}

const ButtonOnOff = styled.span`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 60px;
  width: 60px;
  background-color: ${props => {
    if (props.color === 'green') return 'green'
    if (props.color === 'red') return 'red'
    else return 'white'
  }};
  margin: 10px;
`

const Light = styled.span`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 20px;
  width: 20px;
  margin: 10px;
  background-color: ${props => {
    if (props.color === 'green') return 'green'
    if (props.color === 'red') return 'red'
    else return 'white'
  }};
`

