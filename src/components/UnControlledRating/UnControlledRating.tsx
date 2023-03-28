import React, {useState} from 'react';

type RatingValueType=0|1|2|3|4|5

type UnControlledRatingPropsType = {
    defaultStars?: RatingValueType
    onChange: (value: RatingValueType)=> void
}

export function UnControlledRating(props: UnControlledRatingPropsType) {

    let [value, setValue] = useState(props.defaultStars? props.defaultStars : 0)

    return (
        <div className="UnControlledRating">
            <Star_memo setValue={()=> {setValue(1); props.onChange(1);}} selected={value >= 1}/>
            <Star_memo setValue={()=> {setValue(2); props.onChange(2);}} selected={value >= 2}/>
            <Star_memo setValue={()=> {setValue(3); props.onChange(3);}} selected={value >= 3}/>
            <Star_memo setValue={()=> {setValue(4); props.onChange(4);}} selected={value >= 4}/>
            <Star_memo setValue={()=> {setValue(5); props.onChange(5);}} selected={value >= 5}/>
        </div>
    )
}
export const UnControlledRating_memo=React.memo(UnControlledRating)

type StarPropsType = {
    selected: boolean
    setValue:()=> void
}

 function Star(props: StarPropsType) {

    return (
        <button onClick={()=>{props.setValue()}}>
            {props.selected? <b>star</b> : 'star'}
        </button>
    )
}
export const Star_memo=React.memo(Star)
