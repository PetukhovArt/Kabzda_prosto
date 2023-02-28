import React, {useState} from 'react';

export function UnControlledRating(props: any) {

    let [value, setValue] = useState(0)

    return (
        <div className="UnControlledRating">
            <Star setValue={()=> setValue(1)} selected={value >= 1}/>
            <Star setValue={()=> setValue(2)} selected={value >= 2}/>
            <Star setValue={()=> setValue(3)} selected={value >= 3}/>
            <Star setValue={()=> setValue(4)} selected={value >= 4}/>
            <Star setValue={()=> setValue(5)} selected={value >= 5}/>
        </div>
    )
}

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
