import React, {useState} from 'react';
import '../App.css';
import styled from 'styled-components';

type StarPropsType = {
    value: number
    onClickHandlerBold: (val: number) => void  //приходит в пропсах юс стейт
    ifSetThanBold: any
}


export function Star(props: StarPropsType) {

    return (
        <span
            style={{
                margin: '2px',
                border: '1px solid black',
                padding: '2px',
                fontWeight: props.ifSetThanBold ? 'bold' : 'normal'
            }}
            onClick={() => props.onClickHandlerBold(props.value)}>
            Star
        </span>
    )
    // по клику - вызываем из пропсов функцию onClickHandlerBold ,
    //которая сетает значение value , переданное ей из пропсов у Star

    //стайл - если приходит в пропсах bold = true , то выделяем
    //фолс приходит, если мы кликнули  , передали например вэлью 2 в сет,
    // условия в Старах проверяют значения сета и выдают фолс на звездах 3 4 5
}




