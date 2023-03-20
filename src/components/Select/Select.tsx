import React, { useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

export type SelectPropsType = {
    value: any
    setValue: (value: any) => void
    items: { id: number, name: string }[]
    onClick: () => void
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

export function Select(props: SelectPropsType) {

    const onClickOptionHandler = (name: string) => {
        props.setValue(name)
        props.setCollapsed(!props.collapsed)
    }
    const onClickTitleHandler = (value: boolean) => {
        props.setCollapsed(value)
    }
    const [hoverElementName, setHoverElementName] = useState(props.value)
    useEffect(() => {
        setHoverElementName(props.value)
    }, [props.value])

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].name === hoverElementName) {
                    const pretendentElement= e.key === 'ArrowDown'? props.items[i + 1]: props.items[i - 1]
                    if (pretendentElement) {
                        props.setValue(pretendentElement.name) //NOT WORKING
                        break;
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key==='Escape') {
            props.setValue(hoverElementName)
            props.setCollapsed(!props.collapsed)
        }
        if (props.collapsed && e.key === 'Enter' ) {
            props.setCollapsed(!props.collapsed)
        }
    }

    return (
        <div className={s.wrapper} onKeyDown={onKeyDownHandler} tabIndex={0}>
            <div className={s.title}
                 onClick={(e) => onClickTitleHandler(!props.collapsed)}>
                {props.value}
            </div>
            {props.collapsed &&
                <div className={s.optionsWrapper}>
                    {props.items.map(el =>
                        <div key={el.id}
                             className={s.option + ' ' + (hoverElementName === el.name ? s.selected : '')}
                             onClick={(e) => onClickOptionHandler(el.name)}
                             onMouseEnter={() => {
                                 setHoverElementName(el.name)
                             }}
                        > {el.name} </div>)
                    }
                </div>
            }
        </div>
    )
}
