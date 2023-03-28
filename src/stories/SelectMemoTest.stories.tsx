import React, {useCallback, useMemo, useState} from 'react';
import {Select_memo} from '../components/Select/Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Tests/SelectMemoTest'
}

const items = [
    {id: 1, name: 'Artem', country: 'Russia', age: 32},
    {id: 2, name: 'Pavel', country: 'Russia', age: 33},
    {id: 3, name: 'Denis', country: 'Bulgaria', age: 29},
    {id: 4, name: 'Sasha', country: 'Belarus', age: 28},
    {id: 5, name: 'Nikolay', country: 'Belarus', age: 31},
]
const onClickCallBack = action('Some item was clicked')


export const SelectMemoExample = () => {
    const [counter, setCounter] = useState(0)

    const itemsRussia = useMemo(() => items.filter(i => i.country === 'Russia'), [items])
    const itemsAge30 = useMemo(() => items.filter(i => i.age > 30), [items])
    const itemsHaveA = useMemo(() => items.filter(i => i.name.toLowerCase().indexOf('s') > -1), [items])

//{},[],()=>

    return <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Select_memo items={itemsRussia}
                     onClick={onClickCallBack}
                     value={''}
                     collapsed={true}
        />
        <Select_memo items={itemsAge30}
                     onClick={onClickCallBack}
                     value={''}
                     collapsed={true}
        />
        <Select_memo items={itemsHaveA}
                     onClick={onClickCallBack}
                     value={''}
                     collapsed={true}
        />
    </div>
}


