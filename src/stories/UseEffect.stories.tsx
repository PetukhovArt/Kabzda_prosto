import React, {useEffect, useState} from 'react';
import internal from 'stream';

export default {
    title: 'Tests/useEffect',
}

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    console.log('example1')


    useEffect(() => {
        console.log('useEffect  every render (no dependencies)')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect  only first render (Component Did Mount)')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and  every dependence change')
        document.title = count.toString()
    }, [count])

    return <>
        Hello,<br/>
        count: {count} <br/>
        fake : {fake} <br/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCount(count + 1)}>count+</button>
        <br/>
    </>
}
export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    // console.log('Example Render')

    // useEffect(() => {
    //     setTimeout(()=>{
    //         console.log('setTimeout changes')
    //         document.title = count.toString()
    //     }, 2000)
    // }, [count])
    //тк сеттаймаут асинхронная операция , необходимо выполнять ее внутри юзэффекта

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setCount((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello,<br/>
        count: {count} <br/>
        fake : {fake} <br/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCount(count + 1)}>count+</button>
        <br/>
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log('Component render')

    useEffect(() => {
        console.log('effect occurred  ' + counter)
        return () => {
            console.log('RESET EFFECT  ' + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            <button onClick={increase}>plus</button>
            <div>{counter}</div>
        </>
    )
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component render with  ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text : {text}
    </>
}

export const SetTimeOutExampleReset = () => {

    const [text, setText] = useState('')
    console.log('Component render with  ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 sec passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return <>
        Typed text : {text}
    </>
}

