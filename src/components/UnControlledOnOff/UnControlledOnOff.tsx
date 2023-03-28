import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UnControlledOnOff(props: PropsType) {
    let [on, setOn] = useState(props.defaultOn? props.defaultOn : false)

    const OnStyleButton = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'green' : 'white'
    };
    const OffStyleButton = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '30px',
        width: '40px',
        backgroundColor: on ? 'white' : 'red',
        marginLeft: '20px',
    }
    const lightStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red',
        marginLeft: '20px',
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <>
            <div>Uncontrolled</div>
            <div style={{display: 'flex'}}>
                <button
                    style={OnStyleButton}
                    onClick={onClicked}
                >ON
                </button>
                <button style={OffStyleButton}
                        onClick={offClicked}
                >OFF
                </button>
                <div style={lightStyle}></div>
            </div>
        </>
    )
}
export const UnControlledOnOff_memo=React.memo(UnControlledOnOff)



