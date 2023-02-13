import React from 'react';

type StarPropsType = {
    jir: boolean
}

export function Star(props: StarPropsType) {

    if (props.jir) return <span> <b>Star</b></span>
    else return (<span> Star</span>);
}