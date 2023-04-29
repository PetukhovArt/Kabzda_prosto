import React, {useEffect, useRef, useState} from 'react';
import './clock.css';
import {Button} from '../../stories/Button';
import { CSSTransition } from 'react-transition-group';

type PropsType = {
    size?: number
    mode?: 'component1' | 'component2'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [mode, setMode] = useState('component1')
    const changeModeHandler = () => {
        setMode(mode === 'component1' ? 'component2' : 'component1');
    }

    return (
        <div className="wrapper">
            <Button
                primary={true}
                label="Change Mode"
                onClick={changeModeHandler}
            />

            <div>
                    {mode === 'component1'  ?
                        <DigitalClock/>
                        : <AnalogClock size={300}/>
                    }
            </div>
        </div>
    )
}

export const DigitalClock: React.FC<PropsType> = (props) => {

    const [now, setNow] = useState(new Date())
    const getTwoDigitString = (value: number) => value < 10 ? '0' + value : value

    let time = `${getTwoDigitString(now.getHours())}
     : ${getTwoDigitString(now.getMinutes())}
      : ${getTwoDigitString(now.getSeconds())}`

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setNow(new Date()) //каждую сек сетаем новую дату
        }, 1000)
        // clearInterval()
        return () => {  //функция зачистки перед смертью компоненты
            clearInterval(intervalId)
            //тк юзэффект асинхронный требуется зачистка данной функции
        }
    }, [])

    return (
        <div className='digital'>
            {/*{`'digital' ${props.mode ? 'showDigital' : ''}`}*/}
            {time}
        </div>
    );
};


export const AnalogClock: React.FC<PropsType> = (props) => {

    const hourHandRef = useRef<HTMLDivElement>(null);
    const minuteHandRef = useRef<HTMLDivElement>(null);
    const secondHandRef = useRef<HTMLDivElement>(null);
    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hourAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    const hourMarkers = hourAngles.map((angle, index) => {
        const markerStyle = {
            transform: `rotate(${angle}deg) translate(${props.size ? props.size / 2 - 40 : 300}px) rotate(-${angle}deg)`
        };
        return (
            <div key={index} className="hour-marker" style={markerStyle}>
                {index === 0 ? 3 : index === 11 ? 2 : index === 10 ? 1 : index + 3}
            </div>
        );
    });
    const hourHandStyle = {
        transform: `rotate(${hours * 30 + minutes / 2}deg)`
    };
    const minuteHandStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const secondHandStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const markerHandStyle = {
        transform: `rotate(${hours * 30 + minutes / 2 + seconds / 120}deg)`
    };

    return (
        <div className="clock" style={{width: props.size, height: props.size}}>
            <div className="clock-face">
                {hourMarkers}
                <div className="hour-hand" ref={hourHandRef} style={hourHandStyle}/>
                <div className="minute-hand" ref={minuteHandRef} style={minuteHandStyle}/>
                <div className="second-hand" ref={secondHandRef} style={secondHandStyle}/>
                <div className="marker-hand" style={markerHandStyle}/>
            </div>
        </div>
    );
};




