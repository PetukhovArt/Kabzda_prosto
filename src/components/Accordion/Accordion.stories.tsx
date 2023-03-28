import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, Accordion_memo, AccPropsType} from './Accordion';

const GetCategoryObj = (categoryName: string) => ({
    table: {category: categoryName}
})

export default {
    title: 'Components/Accordion',
    component: Accordion_memo,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('colors')
        },
        onChange: {
            ...GetCategoryObj('events')
        }
    }
}
const names = [
    {id: 1, name: 'Pavel'},
    {id: 2, name: 'Artem'},
    {id: 3, name: 'Denis'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Gregory'},
]
const callBack = action('accordion mode change event fired')
const onClickCallBack = action('Some item was clicked')
const Template: Story<AccPropsType> = args => <Accordion_memo {...args} />;

const callBackProps = {
    onChange: callBack,
    onClickCallBack: onClickCallBack,
    names: names,
    //etc. for destructing props on body
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callBackProps,
    title: 'Menu',
    collapsed: true,
}

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    ...callBackProps,
    title: 'Users',
    collapsed: false,
}

export const ModeChanging: Story<AccPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion_memo {...args}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      names={names}
                      onClickCallBack={onClickCallBack}
    />
}
ModeChanging.args = {
    title: 'Users',
}

