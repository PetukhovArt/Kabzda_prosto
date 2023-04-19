import React, {useEffect, useState} from 'react';

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [now, setNow] = useState(new Date())
    const getTwoDigitString = (value: number) => value < 10 ? '0' + value : value

    let time = `${getTwoDigitString(now.getHours())}
     : ${getTwoDigitString(now.getMinutes())}
      : ${getTwoDigitString(now.getSeconds())}`

    useEffect(() => {
        const intervalId=setInterval(() => {
            console.log('TICK')
            setNow(new Date()) //каждую сек сетаем новую дату
        }, 1000)
        // clearInterval()
        return ()=> {  //функция зачистки перед смертью компоненты
            clearInterval(intervalId)
            //тк юзэффект асинхронный требуется зачистка данной функции
        }
    }, [])

    return (
        <div style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>
            {time}
        </div>
    );
};

