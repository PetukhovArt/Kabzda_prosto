import React from 'react';
import {Star} from './Star';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            {/*<Star jir={props.value > 0}/>*/}
            {/*<Star jir={props.value > 1}/>*/}
            {/*<Star jir={props.value > 2}/>*/}
            {/*<Star jir={props.value > 3}/>*/}
            {/*<Star jir={props.value > 4}/>*/}
        </div>
    )
}
