import React, { useEffect, useState} from 'react';

export default {
    title: 'Tests/useEffect',
}

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    console.log('example')


    useEffect(() => {
        console.log('useEffect  every render (no dependencies)')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect  only first render (Component Did Mount)' )
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and  every dependence change')
        document.title = count.toString()
    }, [count])

    return <>
        Hello,<br/>
        count: {count}  <br/>
        fake : {fake} <br/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCount(count + 1)}>count+</button> <br/>
    </>
}
export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    const [now, setNow]=useState(new Date())
    // console.log('Example Render')

    // useEffect(() => {
    //     setTimeout(()=>{
    //         console.log('setTimeout changes')
    //         document.title = count.toString()
    //     }, 2000)
    // }, [count])
    //тк сеттаймаут асинхронная операция , необходимо выполнять ее внутри юзэффекта

    // useEffect(() => {
    //     setInterval(()=>{
    //         console.log('tick')
    //         setCount((state)=> state+1)
    //     }, 1000)
    // }, [])
    let time=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    useEffect(() => {
        setInterval(()=>{
            setNow(new Date())
        }, 1000)
    }, [])


    return <>
        Hello,<br/>
        count: {count}  <br/>
        fake : {fake} <br/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCount(count + 1)}>count+</button> <br/>
        TIME: {time}
    </>
}
