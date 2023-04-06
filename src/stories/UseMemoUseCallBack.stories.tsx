import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'Tests/UseMemo_demo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    // resultA = useMemo(() => {
    //     let tempResultA = 1
    //     for (let i = 1; i <= a; i++) {
    //         let fake = 0
    //         while (fake < 10000000) {
    //             fake++;
    //             const fakeValue = Math.random();
    //         }
    //         tempResultA = tempResultA * i
    //     }
    //     return tempResultA
    // }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a : {resultA}</div>
        <div>Result for b : {resultB}</div>
    </>
}

const UsersList = (props: { users: Array<string> }) => { //UsersSecret
    console.log('Users List rerendered')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>
        )}
    </div>
}
const Users = React.memo(UsersList)
// adds NO rerender for Table, if no changes in state/props (optimization)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo rerendered')
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => { //defends component from additional rerender ,
        //because filter creates new array , so in base, react want's to rerender component
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/> {/*Memoized*/}

    </>
}


export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML&CSS'])

    const addBook =() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    } //basic => rerender all

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books]) // no rerender for BooksSecret with useMemo

    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])  //// no rerender for BooksSecret with useCallback

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BookSecret')
    return <div>
        <button onClick={() => props.addBook()}>Add Book</button>
    </div>
}
const Books = React.memo(BooksSecret)
