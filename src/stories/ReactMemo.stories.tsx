import React, {useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import dragOver = Simulate.dragOver;

export default {
    title: 'Tests/React.memo demo'
}

const Counter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersList = (props: { users: Array<string> }) => {
    console.log('Users rerendered')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>
        )}
    </div>
}
const Users = React.memo(UsersList) // adds NO rerender for Table, if no changes in state/props (optimization)

export const Example1 = () => {
    const [counter, setCounter]=useState(1)
    const [users, setUsers]=useState(['Dimych', 'Valera', 'Artem'])
    const addUser = () => {
        const newUsers=[...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}

