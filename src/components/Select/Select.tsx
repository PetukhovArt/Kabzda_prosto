import React, { useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

export type SelectPropsType = {
    value?: any
    setValue?: (value: any) => void
    items: { id: number, name: string }[]
    onClick: () => void
    collapsed?: boolean
    setCollapsed?: (value: boolean) => void
}

export function Select(props: SelectPropsType) {
    console.log('SELECT RERENDER')

    // const [collapsed, props.setCollapsed] = useState<boolean>(true)
    // const [value, setValue] = useState<string>('')
    const [hoverElementName, setHoverElementName] = useState(props.value)

    const onClickOptionHandler = (name: string) => {
        if (props.setValue) props.setValue(name)
        if(props.setCollapsed) props.setCollapsed(!props.collapsed)
    }
    const onClickTitleHandler = (value: boolean) => {
        if(props.setCollapsed) props.setCollapsed(value)
    }

    useEffect(() => {
        setHoverElementName(props.value)
    }, [props.value])

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].name === hoverElementName) {
                    const pretendentElement= e.key === 'ArrowDown'? props.items[i + 1]: props.items[i - 1]
                    if (pretendentElement) {
                        if (props.setValue) props.setValue(pretendentElement.name) //NOT WORKING
                        break;
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key==='Escape') {
            if(props.setValue) props.setValue(hoverElementName)
            if(props.setCollapsed) props.setCollapsed(!props.collapsed)
        }
        if (props.collapsed && e.key === 'Enter' ) {
            if(props.setCollapsed) props.setCollapsed(!props.collapsed)
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
export const Select_memo=React.memo(Select)
