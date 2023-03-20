import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {selectOptions} from '@testing-library/user-event/dist/select-options';

export default {
    title: 'tests',
    // component: UnControlledRating,
}


export const UnControlledInput = () => <input/>;
export const FixedValueOfUncontrolledInput = () => <input value={'incubator'}/>;
export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <><input onChange={onChange}/> - {value} </>
};
export const GetValueFromButtonOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={onClickSave}>save</button>
        - input value: {value}
    </>
};

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <input onChange={onChange} value={value}/>
};

export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked);
    }
    return <input type="checkbox" onChange={onChange} checked={value}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState("3")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    }
    return (
        <label>
            <span>Select city: </span>
        <select name="selectedCity" value={value} onChange={onChange}>
            <option value="1"> default</option>
            <option value="2"> Moscow</option>
            <option value="3"> Perm</option>
            <option value="4"> Minsk</option>
        </select>
        </label>
    )
}

