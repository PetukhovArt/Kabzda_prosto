import React, {useState} from 'react';
import {Star} from './Star';

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function UnControlledRating(props: any) {

    let [bold, SetBold] = useState(0)

    const onClickHandlerBold = (val: number) => {
        SetBold(val)
    }

    return (
        <div className="UnControlledRating">
            <Star
                onClickHandlerBold={onClickHandlerBold}
                value={1}
                ifSetThanBold={bold >= 1}
            />
            <Star
                onClickHandlerBold={onClickHandlerBold}
                ifSetThanBold={bold >= 2}
                value={2}
            />
            <Star
                onClickHandlerBold={onClickHandlerBold}
                ifSetThanBold={bold >= 3}
                value={3}
            />
            <Star
                onClickHandlerBold={onClickHandlerBold}
                ifSetThanBold={bold >= 4}
                value={4}
            />
            <Star
                onClickHandlerBold={onClickHandlerBold}
                ifSetThanBold={bold >= 5}
                value={5}
            />
        </div>
    )
}
